"use client"
import { MdOutlineAttachEmail } from "react-icons/md";
import React, { useRef } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_h816kz6", "template_tes7w5f", form.current, "3q6KLxn6baL1QTtLZ")
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message: " + (error.text || JSON.stringify(error)));
        }
      );
  };

  return (
    <div className='w-full mx-auto px-4 mt-8 mb-4 scroll-mt-24' id='contact'>
        <h1 className='text-[2rem] text-[#0987d4] font-extrabold text-center mb-2'>Contact me</h1>
        <div className='w-full'>
            <div className='w-full lg:w-4/6 mx-auto  flex flex-col gap-2 md:flex-row'>
              <div className='w-full md:w-1/2 flex flex-col gap-4 py-4'>
                         
                {/* Write email */}
                <div className='w-full md:w-5/6 p-3 bg-[var(--bg-color)] mx-auto flex flex-col gap-2 items-center justify-center rounded-2xl border border-[var(--border-color)]'>
                    <span className="text-3xl text-[var(--primary-text-color)]"><MdOutlineAttachEmail /></span>
                    <span className="text-[var(--primary-text-color)] text-lg font-semibold">rajputayush694@gmail.com</span>
                    <a href="mailto:rajputayush694@gmail.com" className="text-[var(--secondary-text-color)] flex gap-2 items-center">
                        <p>Write me</p>
                        <FaArrowRightLong />
                    </a>
                </div>

                {/* Call me */}
                <div className='w-full md:w-5/6 p-3 bg-[var(--bg-color)] mx-auto flex flex-col gap-2 items-center justify-center rounded-2xl border border-[var(--border-color)]'>
                    <span className="text-3xl text-[var(--primary-text-color)]"><FiPhoneCall /></span>
                    <span className="text-[var(--primary-text-color)] text-lg font-semibold">+91-6307554191</span>
                    <a href="tel:6307554191" className="text-[var(--secondary-text-color)] flex gap-2 items-center">
                        <p>Call me</p>
                        <FaArrowRightLong />     
                    </a>
                </div>

                     
              </div>

              <form ref={form} onSubmit={sendEmail} className='md:w-1/2 w-full flex flex-col p-4 gap-8'>
                <h2 className="text-center font-bold text-[var(--primary-text-color)] mb-5">Question, Thoughts Or Just Want to Say Hello?</h2>
                <div className="flex flex-col relative">
                    <label href='name' className="w-fit  absolute -top-2 bg-[var(--bg-color)] p-[2px] left-2 rounded-md text-xs text-[var(--secondary-text-color)]">Name</label>
                    <input required type="text" name="name" id="name" placeholder="Enter Your Name" className="outline-none p-3 bg-[var(--bg-color)] rounded-2xl border-2 border-[var(--border-color)] " />
                </div>    
                <div className="flex flex-col relative">
                    <label href='email' className="w-fit  absolute -top-2 bg-[var(--bg-color)] p-[2px] left-2 rounded-md text-xs text-[var(--secondary-text-color)]">Email</label>
                    <input required type="email" name="email" id="email" placeholder="Enter Your Email" className="outline-none p-3 bg-[var(--bg-color)] rounded-2xl border-2 border-[var(--border-color)] " />
                </div> 
                <div className="flex flex-col relative">
                    <label href='message' className="w-fit  absolute -top-2 bg-[var(--bg-color)] p-[2px] left-2 rounded-md text-xs text-[var(--secondary-text-color)]">Message</label>
                    <textarea required type="text" name="message" id="message" rows={6} placeholder="Enter Your Message" className="outline-none p-3 bg-[var(--bg-color)] rounded-2xl border-2 border-[var(--border-color)] " />
                </div> 
                <button type="submit" className='w-fit mx-auto md:mx-0 flex items-center gap-2 cursor-pointer hover:bg-slate-900 bg-slate-800 text-white py-[1rem] px-[2rem] rounded-2xl font-semibold text-xl'>
                    <p>Submit</p>
                    <LuSend />
                </button>
              </form>
            </div>

        </div>
        


    </div>
  )
}

export default Contact