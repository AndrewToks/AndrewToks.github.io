import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='absolute bottom-0 w-full bg-[#050C17] p-5'>
            <div className='gap-24 flex justify-between'>
        <ul className='flex font-semibold text-[16px] gap-3 items-center '>
            <Link href="/"><li>Home</li></Link> 
            <Link href="/components/about"><li>About Me</li></Link>
            <Link href="/components/skills"><li>Skills</li></Link>
            <Link href="/components/contact"><li>Projects</li></Link>
        </ul>
        </div>
    </div>
  )
}

export default Footer