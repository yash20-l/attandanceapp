const mongoose = require('mongoose')
const { Schema } = mongoose;

const Attandance = new Schema({
  Date : String,
  Lectures : [
    {
        Name : String,
        Status : String,
    }
]
});

const Lectures = new Schema({
    Name : String,
    Course : String,
    Days : Number, // ANY NUMBER FROM 11 TO 16 WHERE FIRST AND LAST NUMBERS ARE THE WEEKDAYS
});


module.exports = {Attandance, Lectures}