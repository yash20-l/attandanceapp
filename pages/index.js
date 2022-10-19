import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function Home() {

  const [percentage, setPercentage] = useState('Loading')
  const [totalLec, setTotalLec] = useState('Loading')
  const [present, setPresent] = useState('Loading')

  useEffect(() => {
    axios.get('http://192.168.1.3:8000/attdetails').then((res) => {
      const jsonres = res.data
      setPercentage(jsonres['percentage'])
      setPresent(jsonres['present'])
      setTotalLec(jsonres['totallec'])
    })
  }, [])
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;0,800;1,900&display=swap" rel="stylesheet"/>
        <title>Attandance App </title>
        <meta name="description" content="Attandance Managing App By Yash Verma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar title="Attandance Report"></Navbar>
      <div className="percentShower px-2">
        <div className="heading py-8">
          {percentage == 'Loading' ? (
            <div className="wrapper flex flex-row align-center justify-center">
            <Image priority={true} src={'/wait.png'} height={50} width={50}></Image>
            </div>
          ) : (
            <div className="wrapper flex flex-row items-center justify-center">
              {percentage < 75 ? (
                <h1 className="text-center text-6xl text-red-500 animate-pulse" style={{fontWeight:700}}>{percentage}%</h1>
              ) : <h1 className="text-center text-6xl text-green-500" style={{fontWeight:700}}>{percentage}%</h1>}
          
          </div>)
          }
          
        </div>
        <div className="boxex grid-cols-2 grid gap-2 h-[20vh]">
          <div className="box1 bg-red-500 rounded-xl">
            <div className="boxheading py-2">
              <h1 className='text-center text-white text-xl'>Total Lectures</h1>
              <h1 className='text-5xl text-white text-center py-6' style={{fontWeight:500}}>{totalLec == 'Loading' ? (
            <div className="wrapper flex flex-row align-center justify-center">
            <Image priority={true} src={'/wait.png'} height={50} width={50}></Image>
            </div>
          ) : (
            <div className="wrapper flex flex-row items-center justify-center">
          <h1 className="text-center text-4xl text-white" style={{fontWeight:700}}>{totalLec}</h1>
          </div>)
          }</h1>
            </div>
          </div>
          <div className="box1 bg-blue-500 rounded-xl">
            <div className="boxheading py-2">
              <h1 className='text-center text-white text-xl'>Total Attended</h1>
              <h1 className='text-5xl text-white text-center py-6' style={{fontWeight:500}}>{present == 'Loading' ? (
            <div className="wrapper flex flex-row align-center justify-center">
            <Image priority={true} src={'/wait.png'} height={50} width={50}></Image>
            </div>
          ) : (
            <div className="wrapper flex flex-row items-center justify-center">
          <h1 className="text-center text-4xl white" style={{fontWeight:700}}>{present}</h1>
          </div>)
          }</h1>
            </div>
          </div>
        </div>
        {percentage < 75 ? (
                  <div className="note bg-red-500 rounded-xl py-4 px-2 my-4">
                  <h1 className="text-left text-white">Your attandance is short by {75 - percentage}% therefore you must be regular and punctual.</h1>
                </div>
        ) : null}

        <div className="upcomingHolidays py-4">
          <div className="upcomingheading">
            <h1 className='text-2xl text-black align-left' style={{fontWeight:700}}>Upcoming Holidays</h1>
          </div>
          <div className="holidayTile my-2 py-2 rounded-xl flex flex-row items-center justify-between bg-green-300">
            <h1 className='px-2 text-lg'>Diwali</h1>
            <h1 className='px-2 text-lg'>Oct. 24 2022</h1>
          </div>
          <div className="holidayTile my-2 py-2 rounded-xl flex flex-row items-center justify-between bg-green-300">
            <h1 className='px-2 text-lg'>Christmas</h1>
            <h1 className='px-2 text-lg'>Dec. 25 2022</h1>
          </div>
          <div className="holidayTile my-2 py-2 rounded-xl flex flex-row items-center justify-between bg-green-300">
            <h1 className='px-2 text-lg'>New Year Eve</h1>
            <h1 className='px-2 text-lg'>Dec. 31 2022</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
