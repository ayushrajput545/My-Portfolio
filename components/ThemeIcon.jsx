'use client'
import { useTheme } from 'next-themes';
import React, { useState ,useEffect } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
const ThemeIcon = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <div className='w-11/12 mx-auto flex justify-end sticky top-[5rem]'>
        <div  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='cursor-pointer bg-slate-300 rounded-full p-3 text-xl transition-all duration-500 ease-in-out'>
            {
                theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />
            }     
        </div>
         
    </div>
  )
}

export default ThemeIcon