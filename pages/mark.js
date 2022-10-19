import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Mark = () => {

    const [AllLectures, setAllLectures] = useState([])
    const [Date, SetDate] = useState('Loading...')
    useEffect(() => {
        axios.get('http://192.168.1.3:8000/getlectures').then((res) => {
            console.log(res.data);
            setAllLectures(res.data)
        })
    }, [])

    useEffect(() => {
        const getCurrentDate = (separator = ' ') => {
            let newDate = new window.Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();

            const finalDate = `${date}/${separator}${month < 10 ? `0${month}` : `${month}`}/${separator}${year}`
            SetDate(finalDate)
        }
        getCurrentDate()
    }, [])

    const postAttandance = () => {
        let data = []
        AllLectures.map((lec) => {
            data.push({
                Name: lec.Name,
                Status: document.getElementById(lec._id).value
            })
        })
        axios.post('http://192.168.1.3:8000/markattandance', data).then((res) => {
            console.log(res.status);
        })
    }


    return (
        <div className="primaryWrapper h-screen">
            <Head>
                <title>Mark New Attandance</title>
            </Head>
            <Navbar title="Mark Today's Attandance"></Navbar>
            <div className="wrapper px-2">
                <div className="heading py-4">
                    <h1 className='text-center text-xl text-black' >Mark Attandance For</h1>
                    <h1 className='text-center text-2xl' style={{ fontWeight: 500 }}>{Date}</h1>
                </div>
                <div className="lectures">
                    {AllLectures.map((item) => {
                        return (
                            <div className="box grid my-2 grid-cols-2 py-2 bg-blue-500 rounded-xl">
                                <h1 className='text-left text-white text-xl px-2' style={{ fontWeight: 500 }}>{item.Name}</h1>
                                <div className="selectBar flex flex-row align-center justify-center">
                                    <select name={`${item._id}`} id={`${item._id}`} className='text-xl text-white outline-none border-none rounded-xl bg-blue-500' style={{ fontWeight: 500 }}>
                                        <option value="present">Present</option>
                                        <option value="absent">Absent</option>
                                        <option value="no_lecture">No Lecture</option>
                                    </select>
                                </div>
                            </div>)
                    })}
                </div>
                <div className="button">
                    <button className='p-2 rounded-xl bg-green-500 text-xl text-white my-2 hover:bg-green-600' style={{ fontWeight: 500 }} onClick={postAttandance}>Update</button>
                </div>
            </div>
            <div className="card bg-green-600 h-20 rounded-xl flex flex-col align-center justify-center my-[10rem]">
                <div className="text">
                    <h1 className='text-center text-2xl text-white' style={{ fontWeight: 500 }}></h1>
                </div>
            </div>
        </div>
    )
}

export default Mark