import Image from 'next/image'
import React from 'react'
const Navbar = (props) => {
    return (
        <div className="heading py-2 h-[7rem]  rounded-b-3xl flex flex-row align-center justify-between py-4"
            style={{background:'#7e49f2'}}>
            <div className="imagemenu px-4">
                <Image src="/menu.png" height={30} width={30} className="cursor-pointer" alt="menu"/>
            </div>
            <h1 className="text-center text-white text-2xl font-bold" style={{fontWeight:500}}>{props.title}</h1>
            <div className="demo"></div>
        </div>
    )
}

export default Navbar