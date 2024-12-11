import React from 'react'

const page = () => {
  return (
    <div  className='bg-slate-950 p-5 max-w-[1000px] ml-auto mr-auto flex justify-center items-center flex-col gap-5'>
    <h1 className='text-2xl bg-orange-200 text-orange-500 max-w-fit p-2'>Personal Landing Page</h1>
    <h3 className='text-lg btn btn-primary-outline'>Description</h3>
    <p>A personal website designed to showcase my professional skills, projects, and achievements.
    The website serves as an online portfolio, providing potential employers and clients with a
    detailed view of my work, technical expertise, and career journey.</p>
    <h3 className='text-lg btn btn-primary-outline'>Key Features</h3>
    <ul className='flex flex-col gap-3'>
    <li>Professional Bio: A section dedicated to introducing myself, my background, and my career
    goals.</li>
    <li>Project Showcase: A dynamic gallery displaying key projects, with detailed descriptions and
    links to live demos or repositories.</li>
    <li>Skills Section: A comprehensive list of technical skills, tools, and technologies I'm proficient
    in, highlighting my expertise in frontend development.</li>
    <li>Contact Form: An easy-to-use contact form for potential clients, collaborators, or
    employers to reach out directly.</li>
    <li>Responsive Design: Fully optimized for mobile and desktop devices to ensure smooth
    navigation and readability across platforms.</li>
    <li>Technologies Used:React, TailwindCSS and EmailJ</li>
    </ul>
    <div className='flex flex-row gap-3'>
    <button className='btn btn-primary'><a href="busayomi-beta.vercel.app/">Live Preview</a></button>
    <button className='btn btn-primary-outline'><a href="https://github.com/AndrewToks/busayomi">Github</a></button>
    </div>
    </div>
  )
}

export default page