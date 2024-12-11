import React from "react"
import Image from "next/image"
import {FaUser,FaBook} from "react-icons/fa"
const Header = () => {
  return (
    <div className="mt-24 max-w-[1150px] flex flex-col lg:flex-row gap-10 p-5 ml-auto mr-auto  items-center">
        <div className="flex flex-col gap-6">
        <h3 className="bg-orange-200 text-orange-500 max-w-fit p-2">Hi, I'm Andrew Adetokunbo</h3>
        <h1 className="text-4xl">Software Engineer</h1>
            <small>I'm a Software Engineer with expertise in Javascript,React,Nextjs,NodeJs,Expressjs and Tailwindcss.</small>
            <div className="flex gap-3">
                <button className="btn btn-primary flex gap-1 items-center"><FaUser />Hire Me</button>
                <button className="btn btn-primary-outline"><a href="resume.pdf" download="ADETOKUNBO-ANDREW-RESUME.pdf" className=" flex gap-2 items-center"><FaBook />Download CV</a></button>
            </div>
            <div className="flex gap-10">
                <div className="flex flex-col items-center">
                <h3 className="text-3xl">15+</h3>
                <small>Projects Done</small>
                </div>
                <div className="flex flex-col items-center">
                <h3 className="text-3xl">1+</h3>
                <small>Years Experience</small>
                </div>
            </div>
        </div>
        <div>
            <Image src="/busand.jpg" alt="Picture" width={500} height={500}></Image>
        </div>
    </div>
  )
}

export default Header