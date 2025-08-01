"use client"
import { projects } from '@/utils/projectData'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";
import Tilt from 'react-parallax-tilt'


const Projects = () => {
  return (
    <div className='w-full mx-auto px-4' id='projects'>
      <h1 className='text-[2rem] text-[#0987d4] font-extrabold text-center mb-8'>Projects</h1>
      <div className='max-w-5xl mx-auto flex gap-8 flex-wrap items-center justify-center'>
        {projects.map((project, idx) => (
          <Tilt key={idx}>
          <div key={idx} className='border border-[var(--border-color)] w-[320px] h-[460px] bg-[var(--secondary-bg-color)] shadow-lg rounded-3xl overflow-hidden flex flex-col p-4'>
            <div className='border border-[var(--border-color)] rounded-lg '>
                <img
                src={project.img}
                alt={project.name}
                className='h-40 w-full object-cover rounded-lg'
                />
            </div>
            <div className='pt-4 flex-1 flex flex-col'>
              <h2 className='text-lg font-semibold text-[var(--primary-text-color)] mb-2'>{project.name}</h2>
              <p className='text-[var(--secondary-text-color)] text-xs  flex-1'>{project.description}</p>
              <p className='text-[var(--primary-text-color)] font-semibold text-sm my-2'>Tech Stack: <span className='text-[var(--secondary-text-color)] font-normal text-sm'>{project.techStack}</span></p>
              <div className='flex gap-5 text-2xl p-2 text-[var(--primary-text-color)]'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'

                >
                  <TfiNewWindow />
                </a>
                <a
                  href={project.repo}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}

export default Projects