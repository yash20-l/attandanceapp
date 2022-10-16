import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
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
          <h1 className='text-7xl text-gray-800 text-center' style={{fontWeight:700}}>75%</h1>
        </div>
        <div className="boxex grid-cols-2 grid gap-2 h-[20vh]">
          <div className="box1 bg-red-500 rounded-xl">
            <div className="boxheading py-2">
              <h1 className='text-center text-white text-xl'>Total Lectures</h1>
              <h1 className='text-5xl text-white text-center py-6' style={{fontWeight:500}}>234</h1>
            </div>
          </div>
          <div className="box1 bg-blue-500 rounded-xl">
            <div className="boxheading py-2">
              <h1 className='text-center text-white text-xl'>Total Attended</h1>
              <h1 className='text-5xl text-white text-center py-6' style={{fontWeight:500}}>198</h1>
            </div>
          </div>
        </div>
        <div className="workingdays bg-gray-300 my-4 py-2 rounded-xl">
          <div className="workingheading flex flex-row items-center justify-between">
            <h1 className='px-2'>Total Working Days This Month</h1>
            <h1 className='px-2'>24</h1>
          </div>
        </div>
        <div className="upcomingHolidays">
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
