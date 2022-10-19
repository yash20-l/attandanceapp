import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = (props) => {
    const [clicked, setClicked] = useState(false)

    const handleOnClick = () => {
        if (clicked == true) {
            setClicked(false)
        }else{
            setClicked(true)
        }
    }
    return (
        <div className="wrapper">
            <div className="heading py-2  flex flex-row align-center justify-between py-4"
                style={{ background: '#7e49f2' }}>
                <div className="imagemenu px-4">
                    <Image src="/menu.png" height={30} width={30} className="cursor-pointer" alt="menu" onClick={handleOnClick}/>
                </div>
                <h1 className="text-center text-white text-2xl font-bold" style={{ fontWeight: 500 }}>{props.title}</h1>
                <div className="demo"></div>
            </div>
            {clicked ? (<div className="menuOpen py-2 flex flex-col align-center justify-center bg" style={{ background: '#7e49f2' }}>
                <Link href={'/'}><h1 className="text-xl cursor-pointer text-center text-white py-2">Dashboard</h1></Link>
                <Link href={'/mark'}><h1 className="text-xl cursor-pointer text-center text-white py-2">Mark Attandance</h1></Link>
                <Link href={'/'}><h1 className="text-xl cursor-pointer text-center text-white py-2">Attandance History</h1></Link>
            </div>) : null}
            
        </div>

    )
}

export default Navbar