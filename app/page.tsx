import {FaStar,FaFacebook,FaWhatsapp,FaLinkedin,FaTwitter,FaCode,FaUser,FaBook} from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

// const projects =[
//     {
//         id:1,
//         title:"Finance Tracker",
//         description:"A web application designed to help users monitor and manage their personal finances with ease.",
//         more:"../projects/finance-tracker",
//         github:""
//     },
//     {
//         id:2,
//         title:"Estate Management",
//         description:"A web application designed to help users monitor and manage their personal finances with ease.",
//         more:"",
//         github:""
//     },
//     {
//         id:3,
//         title:"Personal Landing Page",
//         description:"A personal website designed to showcase my professional skills, projects, and achievements.",
//         more:"../projects/portfolio"
//     },
//     {
//         id:4,
//         title:"Todo List",
//         description:"A web application designed to help users monitor and manage their personal finances with ease.",
//         more:""
//     },
//     {
//         id:5,
//         title:"Bmi Calculator",
//         description:"A web application designed to help users monitor and manage their personal finances with ease.",
//         more:"../projects/bmi-calculator",
//     },
//     {
//         id:6,
//         title:"Finance Tracker",
//         description:"A web application designed to help users monitor and manage their personal finances with ease.",
//         more:"",
//     }
// ]

export default function Home(){
    return(
        <main className="mt-24">
            {/* Hero Section */}
    
            <section>
                <header className="flex flex-col md:flex-row items-start justify-center gap-10 px-5">
                    <div className="flex flex-col gap-10">
                    <h3 className='image-name'>Hii,I'm Andrew Adetokunbo</h3>
                    <h1 className="text-4xl">Software Engineer</h1>
                    <small>I'm a Software Engineer with expertise in Javascript,React,Nextjs,NodeJs,Expressjs and Tailwindcss.</small>
                 <div className="flex gap-5">
                 <button className="btn btn-primary flex gap-1 items-center">
                    <Link href="#contact" className="flex gap-1 items-center">
                    <FaUser />Hire Me</Link>
                </button>
                 <button className="btn btn-primary-outline">
                    <a href="resume.pdf" download="ADETOKUNBO-ANDREW-RESUME.pdf" className=" flex gap-1 items-center">
                    <FaBook />Download CV</a>
                </button>
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
            <div><Image src="/busand.jpg" alt="Picture" width={500} height={500}></Image></div>
                </header>
            </section>

            {/* About Section */}

            <section>
                <main className="mt-12 px-5">
                <h1 
                className="bg-[#a049f1] font-semibold py-3 px-5 max-w-fit 
                rounded-full flex items-center mb-3 gap-1">
                <FaStar className="animate animate-spin" />
                ABOUT ME
                </h1>
                <h3 className="image-name mb-3">Hi,I'm Andrew Adetokunbo</h3>
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
                </main>
            </section>

            {/* Skills */}
            <section>
                <main className="mt-12 px-5">
                <h1 
                className="bg-[#a049f1] font-semibold py-3 px-5 max-w-fit 
                rounded-full flex items-center gap-1 mb-2 text-center">
                <FaStar className="animate animate-spin" />
                SKILLS
                </h1>
                <h2>Skills I Offer</h2>
                <div className="mt-3">
                    <article className="max-w-[300px] p-5 bg-slate-900">
                        <h3>Frontend Development</h3>
                        <ul className="grid grid-cols-2">
                            <li>HTML</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>ReactJs</li>
                            <li>NextJs</li>
                            <li>Tailwindcss</li>
                        </ul>
                    </article>
                </div>
                </main>
            </section>

            {/* Education */}

            <section>
                <main className="mt-4 flex flex-col gap-8 p-5 justify-center">
                    <h1 className="bg-[#a049f1]  
                    font-semibold py-3 px-5 max-w-fit rounded-full flex 
                    items-center gap-2 mb-3">
                    <FaStar className="animate animate-spin" />EDUCATION</h1>
                </main>
            </section>

            {/* 
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

             {/* Services */}
            {/* <div className="  flex flex-col gap-8 p-5 items-center justify-center">
                <h1 className="bg-[#a049f1] text-[12px] font-semibold py-3 px-5 max-w-fit rounded-full flex items-center gap-2"><FaStar className="animate animate-spin" />SERVICES</h1>
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
            </div> */}
             {/* Projects */}
            {/* <div id="projects" className="  flex flex-col gap-8 p-5 items-center justify-center">
                <h1 className="bg-[#a049f1] text-[12px] font-semibold py-3 px-5 max-w-fit rounded-full flex items-center gap-2"><FaStar className="animate animate-spin" />PROJECTS</h1>
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
            </div> */}

            {/* Contact Section */}
            {/* <div id="contact" className=' flex flex-col  justify-center items-center p-5'>
        <form className='max-w-[900px] w-full h-full flex flex-col gap-6'>
            <h1 className='text-xl text-center'>Contact Me by Sending Me An Email</h1>
            <div className='flex flex-col gap-5 '>
            <input type="text" placeholder='Your Full Name' className='w-full h-14 px-2 outline-none bg-slate-900 border-[1px] rounded-md border-slate-950' />
            <input type="Email" placeholder='Your Email'  className='w-full h-14 px-2 outline-none bg-slate-900 border-[1px] rounded-md border-slate-950'/>
            </div>
            <textarea name="" id="" placeholder='Your Message' className='w-full h-36 outline-none bg-slate-900 text-white px-2 py-2 border-[1px] border-slate-950 rounded-md'></textarea>
            <button className='btn btn-primary w-full'>Send Message</button>
        </form>
    </div> */}
        </main>
    )
}