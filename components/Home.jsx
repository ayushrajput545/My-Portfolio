"use client"
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineArrowDown } from 'react-icons/hi'
import { SlSocialLinkedin } from "react-icons/sl";
import { LuSend } from "react-icons/lu";

const HomePage = () => {
  return (
    <div className='w-11/12 mx-auto' id='home'>
       
      {/* For mobiles screens*/}
      <div className='md:hidden  flex items-center gap-5 pl-5 justify-center mt-5'>

        <div className='flex flex-col gap-5'>
          <a href='https://www.linkedin.com/in/ayush-rajput-199574287/' target='_blank' className='text-3xl'>
            <SlSocialLinkedin/>
          </a>
          <a href='https://github.com/ayushrajput545' target='_blank' className='text-3xl'>
            <FaGithub/>
          </a>
        </div>
        <div
          className="w-[320px] h-[320px] shadow-inner bg-center bg-cover profile-img"
          style={{
            backgroundImage: "url('/profileimg.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            boxShadow: 'inset 0 0 0 9px rgba(191, 171, 171, 0.3)',
            animation: 'profile_animate 6s ease-in-out infinite 1s',
            order: 1,
            justifySelf: 'center',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', // Initial shape
          }}
        ></div>
      </div>

      {/*For desktop screens*/}
      <div className='flex justify-between min-h-[460px] md:min-h-[660px] items-center gap-8 lg:px-36'>
 
        <div className='hidden md:flex flex-col gap-5 '>
          <a href='https://www.linkedin.com/in/ayush-rajput-199574287/' target='_blank' className='text-3xl'>
            <SlSocialLinkedin/>
          </a>
          <a href='https://github.com/ayushrajput545' target='_blank' className='text-3xl'>
            <FaGithub/>
          </a>
        </div>

        <div className='flex flex-col mx-auto text-center md:text-start'>
          <div className='flex flex-col gap-2 mb-12'>
            <h1 className='md:text-[2.7rem] text-[2rem] text-[#0987d4] font-extrabold'>Ayush Rajput</h1>
            <h3 className='text-slate-600 font-semibold md:text-xl text-md '>Full Stack Developer</h3>
            <p className="md:text-md text-sm text-gray-500 ">
              Hi, I'm Ayush Rajput. A passionate Full Stack <br />
              Developer based in Odisha, India.
            </p>
          </div>

          <div className='flex flex-col justify-between md:h-[15rem] h-[10rem]'>
            <button id='#contact' className='w-fit mx-auto md:mx-0 flex items-center gap-2 cursor-pointer hover:bg-slate-900 bg-slate-800 text-white py-[1rem] px-[2rem] rounded-2xl font-semibold text-xl'>
              <p>Say Hello</p>
              <LuSend />
            </button>
            <div className=''>Scroll down</div> 
          </div>
        </div>

        <div
          className="hidden md:block w-[350px] h-[350px] shadow-inner bg-center bg-cover"
          style={{
            backgroundImage: "url('/profileimg.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            boxShadow: 'inset 0 0 0 9px rgba(191, 171, 171, 0.3)',
            animation: 'profile_animate 6s ease-in-out infinite 1s',
            order: 1,
            justifySelf: 'center',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', // Initial shape
          }}
        ></div>
      </div>

    </div>
  )
}

export default HomePage
