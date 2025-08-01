'use client'
import { navLinks } from '@/utils/navLinks'
import React, { useState } from 'react'
import { PiSquaresFour } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
 

const NavBar = () => {
    const[mobileMenuOpen , setMobileMenuOpen] = useState(false)
  return (
    <>
    <div className='hidden fixed top-0 left-0 w-full px-20 shadow-md bg-[var(--bg-color)] z-50 md:flex items-center  justify-between mx-auto p-4 border-b  border-[var(--border-color)]'>
        <h1 className='text-3xl font-bold text-[var(--primary-text-color)]'>Ayush<span className='text-3xl text-red-400'>.</span></h1>
        {/* for desktop */}
        <div className='flex gap-6 font-semibold text-[var(--primary-text-color)] text-sm'>
            {
                navLinks.map((link , i)=>(
                    <a key={i} href={link?.path} className='hover:underline'>
                        {link?.name}
                    </a>
                ))
            }
        </div>
    </div>

      {/* for mobiles */}
    <div className='md:hidden fixed top-0 left-0 shadow-md w-full bg-[var(--bg-color)] z-50 flex items-center  justify-between p-4 border-b  border-[var(--border-color)]'>
        <h1 className='text-3xl font-bold text-[var(--primary-text-color)]'>Ayush<span className='text-3xl text-red-400'>.</span></h1>

                 
        <div onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className='text-[var(--primary-text-color)] text-3xl cursor-pointer md:hidden z-60'>
            {mobileMenuOpen ?  <RxCross2 /> : <PiSquaresFour /> }
        </div>

        {/* Sliding menu */}

      
        <div 
            className={`flex flex-col items-center fixed top-0 right-0 w-[60%] h-full transform transition-transform duration-500 ease-in-out max-w-xs gap-12 
            font-semibold text-[var(--primary-text-color)] text-md  z-50 bg-[var(--bg-color)] p-6 rounded-xl shadow-lg 
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {
                navLinks.map((link , i)=>(
                    <a key={i} href={link?.path} className='hover:underline translate-y-[5rem] flex flex-col items-center'>
                       <p className='text-xl'>{link?.icon}</p>
                       <p>{link?.name}</p>
                    </a>
                ))
            }
        </div>
            
        

        {mobileMenuOpen && (
            <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
            />
        )}
    </div>
    </>
  )
}

export default NavBar