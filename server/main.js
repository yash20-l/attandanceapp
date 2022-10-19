const express = require('express')
var cors = require('cors')
const ConnectToDB = require('../database/Connection')
const app = express()
const port = 8000
const { LectureModel, AttandanceModel } = require('../database/Models')
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next) => {
  ConnectToDB()
  next()
})

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getlectures', (req, res) => {
  let LectureArray = [];
  let day1;
  let day2;
  const d = new Date()
  const weekDay = d.getDay() + 1
  LectureModel.find({}, (err, lec) => {
    if (err) {
      res.status(404).send(err)
    } else {
      lec.map((days) => {
        const day = days.Days
        day1 = String(day)[0]
        day2 = String(day)[1]
        if (weekDay >= day1 && weekDay <= day2) {
          LectureArray.push(days)
        }
      })
      res.send(LectureArray)
    }
  })
})

app.get('/attdetails', (req, res) => {
  allLectures = AttandanceModel.find({ "Status": "present" }, (err, lec) => {
    if (err) {
      res.status(500).send('internal server error. Please try again later !')
    } else {
      let totalClass = 0;
      let present = 0;
      lec.map((seclec) => {
        const onlyLectures = seclec.Lectures;
        onlyLectures.map((singleLec) => {
          const jsonLec = singleLec.toObject()
          if (jsonLec['Status'] == 'present') {
            present = present + 1;
            totalClass = totalClass + 1
          } else if (jsonLec['Status'] == 'absent') {
            totalClass = totalClass + 1;
          }
        })
      })

      const percentage = present / totalClass * 100
      res.status(200).json({
        "totallec": totalClass,
        "percentage": percentage,
        "present": present,
      })

    }
  })
})

app.get('/newlecture', (req, res) => {
  const NewLecture = new LectureModel({
    Name: 'ENV',
    Days: 56,
    Course: "BSC-NM"
  })
  NewLecture.save()
  res.send('New Lecture Registered Successfully !!!')
})

const getCurrentDate = (separator = '') => {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const finalDate = `${date}/${separator}${month < 10 ? `0${month}` : `${month}`}/${separator}${year}`
  return finalDate
}

app.post('/markattandance', (req, res) => {
  const date = getCurrentDate()
  const reqBody = req.body
  AttandanceModel.find({ Date: date }, (err, res) => {
    if (res.length <= 0) {

      const newAttandance = new AttandanceModel({
        Date: date,
        Lectures: reqBody
      })
      newAttandance.save()

    } else {
      AttandanceModel.findOneAndUpdate({ Date: date }, {
        Date: date,
        Lectures: reqBody
      }, (err, doc) => {
        if (err) {
          console.log(err);
        }
      })
    }
  })
  res.status(200).json({
    "message": "Attendance Marked Successfully",
    "code": 200
  })
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})