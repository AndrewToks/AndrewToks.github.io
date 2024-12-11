import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-slate-950 p-5 max-w-[1000px] ml-auto mr-auto flex justify-center items-center flex-col gap-5'>
     <h1 className='text-2xl bg-orange-200 text-orange-500 max-w-fit p-2'>Estate Management</h1>
    <h3 className='text-lg btn btn-primary-outline'>Description</h3>
    <p>A web application designed to help users monitor and manage their personal finances with
    ease.</p>
    <h3 className='text-lg btn btn-primary-outline'>Key Features</h3>
    <ul className='flex flex-col gap-3'>
        <li>Expense Tracking: Allows users to log daily expenses and categorize them for better
        financial insights.</li>
        <li>Data Visualization: Interactive charts provide a clear overview of income, expenses, and
        savings trends.</li>
        <li>Customizable Categories: Users can create and manage personalized expense categories
        for detailed tracking.</li>
        <li>Report Generation: Automatically generates financial summaries to help users analyze their
        spending habits over time.</li>
        <li>Responsive Design: Optimized for use on both desktop and mobile devices, ensuring
        accessibility and usability.</li>
        <li>Technologies Used:React and CSS</li>
    </ul>
    <div className='flex flex-row gap-3'>
    <button className='btn btn-primary'><a href="real-estate-management-gray.vercel.app/">Live Preview</a></button>
    <button className='btn btn-primary-outline'><a href="https://github.com/AndrewToks/estate-management">Github</a></button>
    </div>
    </div>
  )
}

export default page