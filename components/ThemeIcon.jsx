'use client'
import React, { useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
const ThemeIcon = () => {
    const[lightMode ,setLightMode] = useState(true)
  return (
    <div className='w-11/12 mx-auto flex justify-end sticky top-[5rem]'>
        <div onClick={()=>setLightMode(!lightMode)} className='cursor-pointer bg-slate-300 rounded-full p-3 text-xl transition-all duration-500 ease-in-out'>
            {
                lightMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />
            }     
        </div>
         
    </div>
  )
}

export default ThemeIcon