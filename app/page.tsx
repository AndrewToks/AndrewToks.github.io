import Header from "./components/header"
import {FaStar,FaFacebook,FaWhatsapp,FaLinkedin,FaTwitter,FaCode} from "react-icons/fa"
import Link from "next/link"

const projects =[
    {
        id:1,
        title:"Finance Tracker",
        description:"A web application designed to help users monitor and manage their personal finances with ease.",
        more:"../projects/finance-tracker",
        github:""
    },
    {
        id:2,
        title:"Estate Management",
        description:"A web application designed to help users monitor and manage their personal finances with ease.",
        more:"",
        github:""
    },
    {
        id:3,
        title:"Personal Landing Page",
        description:"A personal website designed to showcase my professional skills, projects, and achievements.",
        more:"../projects/portfolio"
    },
    {
        id:4,
        title:"Todo List",
        description:"A web application designed to help users monitor and manage their personal finances with ease.",
        more:""
    },
    {
        id:5,
        title:"Bmi Calculator",
        description:"A web application designed to help users monitor and manage their personal finances with ease.",
        more:"../projects/bmi-calculator",
    },
    {
        id:6,
        title:"Finance Tracker",
        description:"A web application designed to help users monitor and manage their personal finances with ease.",
        more:"",
    }
]

export default function Home(){
    return(
        <main>
            <div className="border-b-[1px] border-slate-500"></div>
            <Header />
            {/* About Section */}
            <div id="about" className="min-h-screen mt-5 max-w-[1150px] ml-auto mr-auto flex flex-col gap-8 p-5 justify-center">
                <h2 className="bg-[#a049f1] text-[12px] font-semibold py-3 px-5 max-w-fit rounded-full flex items-center gap-2"><FaStar className="animate animate-spin" />ABOUT ME</h2>
                <h3 className="text-2xl">Hi,I'm Andrew Adetokunbo</h3>
                <small>I'm a passionate Software Engineer with 2 years of experience creating high-performance web applications
                using Next.js, React.js, NodeJs,ExpressJs and TailwindCSS, I specialize in crafting seamless user experiences with
                reusable code, SEO optimization, and responsive designs and I am committed to delivering scalable,
                intuitive solutions aligned with user and business goals.
                My Life as a Software Engineer revolves around Javascript and Python.
                </small>
                <div className="flex lg:justify-between flex-col lg:flex-row gap-5">
                    <article className="flex flex-col gap-2">
                        <small>Email</small>
                        <h5><a href="mailto:adetokunboandrew2@gmail.com">adetokunboandrew2@gmail.com</a></h5>
                    </article>
                    <article className="flex flex-col gap-2">
                        <small>Phone</small>
                        <h5><a href="tel:+234 7048222080">07048222080</a></h5>
                    </article>
                    <article className="flex flex-col gap-2">
                        <small>Spoken Languages</small>
                        <h5>English | Yoruba</h5>
                    </article>
                    <article className="flex flex-col gap-2">
                        <small>Interest</small>
                        <h5>Music | Reading | Coding | Soccer</h5>
                    </article>
                    <article className="flex flex-col gap-2">
                        <small>Social Media</small>
                        <h5 className="flex lg:justify-between gap-5 ">
                        <Link href=""><FaFacebook /></Link>
                        <Link href=""><FaWhatsapp /></Link>
                        <Link href=""><FaLinkedin /></Link>
                        <Link href=""><FaTwitter /></Link>
                        </h5>
                    </article>
                </div>
            </div>
            {/* Skills */}
            <div id="skills" className="min-h-screen mb-8 max-w-[1150px] ml-auto mr-auto flex flex-col gap-8 p-5 items-center justify-center">
                <h2 className="bg-[#a049f1] text-[12px] font-semibold py-3 px-5 max-w-fit rounded-full flex items-center gap-2"><FaStar className="animate animate-spin" />SKILLS</h2>
                <h3 className="text-2xl">My Skills</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <article className="flex flex-col px-3 py-2 h-56 bg-[#050C17] border-[1px] border-slate-900 hover:bg-slate-950 cursor-pointer rounded-md gap-3">
                    <h2>Frontend Programming Languages</h2>
                    <h4 className="bg-orange-200 text-orange-500 max-w-fit px-2 py-1 text-[12px]">TECH STACK</h4>
                    <ul><li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>REST API</li>
                    </ul>
                </article>
                <article className="flex flex-col px-3 py-2 h-56 bg-[#050C17] border-[1px] border-slate-900 hover:bg-slate-950 cursor-pointer rounded-md gap-3">
                    <h2>Backend Programming Languages</h2>
                    <h4 className="bg-orange-200 text-orange-500 max-w-fit px-2 py-1 text-[12px]">TECH STACK</h4>
                    <ul>
                        <li>Javascript</li>
                    </ul>
                </article>
                <article className="flex flex-col px-3 py-2 h-56 bg-[#050C17] border-[1px] border-slate-900 hover:bg-slate-950 cursor-pointer rounded-md gap-3">
                    <h2>Frameworks and Libraries</h2>
                    <h4 className="bg-orange-200 text-orange-500 max-w-fit px-2 py-1 text-[12px]">TECH STACK</h4>
                    <ul>
                        <li>NodeJs</li>
                        <li>ExpressJs</li>
                        <li>React</li>
                        <li>Next</li>
                        <li>Tailwind</li>
                    </ul>
                </article>
                <article className="flex flex-col px-3 py-2 h-52 bg-[#050C17] border-[1px] border-slate-900 hover:bg-slate-950 cursor-pointer rounded-md gap-3">
                    <h2>Tools and Technologies</h2>
                    <h4 className="bg-orange-200 text-orange-500 max-w-fit px-2 py-1 text-[12px]">TECH STACK</h4>
                    <ul>
                        <li>Git and Github</li>
                    </ul>
                </article>
                <article className="flex flex-col px-3 py-2 h-52 bg-[#050C17] border-[1px] border-slate-900 hover:bg-slate-950 cursor-pointer rounded-md gap-3">
                    <h2>Methodologies and Soft Skills</h2>
                    <h4 className="bg-orange-200 text-orange-500 max-w-fit px-2 py-1 text-[12px]">TECH STACK</h4>
                    <ul>
                        <li>Teamwork</li>
                        <li>Effective Communication</li>
                        <li>Problem Solving</li>
                    </ul>
                </article>
                <article className="flex flex-col px-3 py-2 h-52 bg-[#050C17] border-[1px] border-slate-900 hover:bg-slate-950 cursor-pointer rounded-md gap-3">
                    <h2>DataBase</h2>
                    <h4 className="bg-orange-200 text-orange-500 max-w-fit px-2 py-1 text-[12px]">TECH STACK</h4>
                    <ul>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                </article>
                </div>
            </div>
             {/* Services */}
             <div className="min-h-screen mb-8 max-w-[1150px] ml-auto mr-auto flex flex-col gap-8 p-5 items-center justify-center">
                <h2 className="bg-[#a049f1] text-[12px] font-semibold py-3 px-5 max-w-fit rounded-full flex items-center gap-2"><FaStar className="animate animate-spin" />SERVICES</h2>
                <h3 className="text-2xl">Services I Offer</h3>
                <small>I build,develop and create Softwares.</small>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <article className="bg-[#050C17] rounded-md border-[1px] border-slate-900 p-3 h-60 max-w-[400px] flex flex-col justify-center gap-5">
                    <h1 className="flex flex-col"><FaCode />Frontend Web Development</h1>
                    <small>I build user interface and user experience (UI/UX) of a web application.</small>
                    <div className="flex gap-3">
                        <h4 className="bg-orange-200 text-orange-500 max-w-fit px-2 py-1 text-[12px]">TECH STACK</h4>
                        <h5>React and TailwindCSS</h5>
                    </div>
                </article>
                <article className="bg-[#050C17] rounded-md border-[1px] border-slate-900 p-3 max-w-[400px]  flex flex-col justify-around items-start">
                    <h1 className="flex flex-col"><FaCode /> Backend Web Development</h1>
                    <small>Leveraging the power of NodeJs,Express.js, and MongoDB to develop robust ,efficient, and scalable server-side solutions that meet your needs.</small>
                    <div className="flex gap-3">
                        <h4 className="bg-orange-200 text-orange-500 max-w-fit px-2 py-1 text-[12px]">TECH STACK</h4>
                        <h5>NodeJS and MongoDB </h5>
                    </div>
                </article>
                <article className="bg-[#050C17] border-[1px] border-slate-900 h-60 p-3 max-w-[400px] rounded-md flex flex-col justify-center gap-5">
                    <h1 className="flex flex-col"><FaCode />Full Stack Web Development</h1>
                    <small>I use React,Nextjs and TailwindCSS to build a nice user interface.</small>
                    <div className="flex gap-3">
                        <h4 className="bg-orange-200 text-orange-500 max-w-fit px-2 py-1 text-[12px]">TECH STACK</h4>
                        <h5>Nextjs and Typescript</h5>
                    </div>
                </article>
                </div>
            </div>
             {/* Projects */}
            <div id="projects" className="min-h-screen mb-2 max-w-[1150px] ml-auto mr-auto flex flex-col gap-8 p-5 items-center justify-center">
                <h2 className="bg-[#a049f1] text-[12px] font-semibold py-3 px-5 max-w-fit rounded-full flex items-center gap-2"><FaStar className="animate animate-spin" />PROJECTS</h2>
                <h3 className="text-2xl">Projects I have Done</h3>
                <small>I build,develop and create Softwares.</small>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {projects.map((project)=>{
                        return(
                <article key={project.id} className="bg-[#050C17] border-[1px] border-slate-900 p-3 h-60 max-w-[400px] rounded-md cursor-pointer flex flex-col justify-center items-center gap-5 hover:bg-slate-950">
                    <h1 className="flex flex-col">{project.title}</h1>
                <small>{project.description}</small>
                <div className="flex flex-row gap-3">
                    <button className="btn btn-primary"><a href={project.more}>See More</a></button>
                </div>
                </article>
                        )
                    })}
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className='max-w-[1150px] ml-auto mr-auto flex flex-col min-h-screen justify-center items-center p-5'>
        <form className='max-w-[900px] w-full h-full flex flex-col gap-6'>
            <h1 className='text-xl text-center'>Contact Me by Sending Me An Email</h1>
            <div className='flex flex-col gap-5 '>
            <input type="text" placeholder='Your Full Name' className='w-full h-14 px-2 outline-none bg-slate-900 border-[1px] rounded-md border-slate-950' />
            <input type="Email" placeholder='Your Email'  className='w-full h-14 px-2 outline-none bg-slate-900 border-[1px] rounded-md border-slate-950'/>
            </div>
            <textarea name="" id="" placeholder='Your Message' className='w-full h-36 outline-none bg-slate-900 text-white px-2 py-2 border-[1px] border-slate-950 rounded-md'></textarea>
            <button className='btn btn-primary w-full'>Send Message</button>
        </form>
    </div>
        </main>
    )
}