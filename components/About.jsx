"use client"
import React from 'react'
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className='lg:w-11/12 w-full mx-auto mt-8 mb-5' id='about'>
        <h1 className=' text-[2rem] text-[#0987d4] font-extrabold text-center'>About me</h1>

        <div className='w-full  flex flex-col lg:flex-row mt-16 items-center justify-center'>
            <div className='w-1/2 h-full'>
              <img src='/ayycpy2.jpeg' alt='ayyimg' className='lg:w-1/2 md:w-[300px] mx-auto rounded-4xl'/>
            </div>

            <div className='lg:w-1/2 w-full flex flex-col gap-12 p-4 items-center justify-center mx-auto'>
              <div className='grid grid-cols-2 md:grid-cols-3  gap-3'>
                <div className='bg-[var(--secondary-bg-color)] border shadow-xl border-[var(--border-color)] rounded-2xl flex flex-col gap-2 items-center justify-center p-4'>
                  <MdOutlineWorkHistory className='text-2xl text-[var(--primary-text-color)]'/>
                  <h3 className='font-bold text-lg text-[var(--primary-text-color)] text-center'>Worked On</h3>
                  <p className='text-md text-slate-400 text-center'>5+ Projects</p>
                </div>

                <div className='bg-[var(--secondary-bg-color)]  border shadow-xl border-[var(--border-color)] rounded-2xl flex flex-col gap-2 items-center justify-center p-4'>
                  <MdOutlineWorkspacePremium className='text-2xl text-[var(--primary-text-color)]'/>
                  <h3 className='font-bold text-lg text-[var(--primary-text-color)] text-center'>Certified</h3>
                  <p className='text-sm text-center text-slate-400'>Frontend (ReactJS) - HackerRank</p>
                </div>

                <div className='bg-[var(--secondary-bg-color)] border shadow-xl border-[var(--border-color)] rounded-2xl hidden md:flex flex-col gap-2 items-center justify-center p-4'>
                  <FaNetworkWired  className='text-2xl text-[var(--primary-text-color)]'/>
                  <h3 className='font-bold text-lg text-[var(--primary-text-color)] text-center'>Problem Solving</h3>
                  <p className='text-md text-center text-sm text-slate-400'>Across Multiple Platforms</p>
                </div>
              </div>

              <div>
                <p className='text-center text-gray-400'>
                  Full-stack web developer with a specialization in MERN stack and Next.js. 
                  Observant and curious, with a strong interest in building scalable, user-focused products. 
                  Eager to sharpen my skills in a fast-paced, growth-oriented environment
                </p>
              </div>

              <a href="https://drive.google.com/file/d/1yA3LbGsNoZhwRRcNzsYS7RIc0AE0jXkY/view?usp=drive_link" download target='_blank'>
                <button id='#contact' className='w-fit mx-auto md:mx-0 flex items-center gap-2 cursor-pointer hover:bg-slate-900 bg-slate-800 text-white py-[1rem] px-[2rem] rounded-2xl font-semibold text-xl'>
                  <p>Download Resume</p>
                  <IoDocumentTextOutline />
                </button>
              </a>

            </div>

        </div>

 
        
    </div>
  )
}

export default About