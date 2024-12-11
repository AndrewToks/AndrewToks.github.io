"use client"

import Link from "next/link"
import React, { useState } from "react"
import {FaBars} from "react-icons/fa"
// import {FaHome,FaUser} from "react-icons/fa"

const Navigation = () => {
    const [showMenu,setShowMenu] = useState(false)
  return (
    <div className="fixed w-full z-50 ml-auto mr-auto backdrop-blur-md flex justify-between items-center px-10 py-5 ">
        <h1>Andrew</h1>
        <div>
            <div className="gap-24 hidden md:flex">
        <ul className="flex font-semibold text-[16px] gap-3 items-center">
           <Link href="/"><li>Home</li></Link> 
            <Link href="#about"><li>About Me</li></Link>
            <Link href="#skills"><li>skills</li></Link>
            <Link href="#projects"><li>Projects</li></Link>
        </ul>
        <button className="bg-white text-black text-sm max-w-fit px-3 py-2 hover:bg-[#a049f1] hover:text-white cursor-pointer"><Link href="#contact">Let's Chat</Link></button>
            </div>

            {/* Medium Screen */}
            
        <div>
        <FaBars onClick={()=>{setShowMenu(true)}} className="flex text-2xl md:hidden cursor-pointer"/>
        {showMenu && 
        <div className="absolute flex md:hidden justify-center right-0 bg-slate-900 p-5 min-w-[300px] min-h-screen top-0 ">
            <h1 className="text-2xl font-bold absolute right-10 cursor-pointer"onClick={()=>{
                setShowMenu(false)
            }}>X</h1>
            <ul className="flex flex-col items-center justify-center gap-5">
            <li className="cursor-pointer" onClick={()=>{
                setShowMenu(false)
            }}><Link href="/" >Home</Link></li>
            <li className="cursor-pointer" onClick={()=>{
                setShowMenu(false)
            }}><Link href="#about">About Me</Link></li>
            <li className="cursor-pointer" onClick={()=>{
                setShowMenu(false)
            }}><Link href="#skills">Skills</Link></li>
            <li className="cursor-pointer" onClick={()=>{
                setShowMenu(false)
            }}><Link href="#projects">Projects</Link></li>
            <li className="bg-white text-black text-sm max-w-fit px-3 py-2
             hover:bg-[#a049f1] hover:text-white cursor-pointer" onClick={()=>{
                setShowMenu(false)
            }}><Link href="#contact">Let's Chat</Link></li>
        </ul>
        </div>}
        </div>
        </div>
        
    </div>
  )
}

export default Navigation