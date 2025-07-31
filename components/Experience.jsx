import React from 'react'

const Experience = () => {
  return (
    <div className='w-full px-4'>
        <h1 className=' text-[2rem] text-[#0987d4] font-extrabold text-center mb-8'>Work Experience</h1>
        <div className='flex flex-col'>
            {/* Internship */}
            <div className='lg:w-4/6 w-full mx-auto bg-[var(--secondary-bg-color)] shadow-md rounded-lg p-6 mb-6 flex flex-col items-start border border-[var(--border-color)]'>
                <div className='w-full flex flex-col md:flex-row  items-start md:items-center justify-between'>
                     <span className='text-lg font-bold mb-2 text-[var(--primary-text-color)] tracking-wide '>Web Devlopment Internship - BabyCode</span>
                     <span className='text-lg  mb-2 text-[var(--secondary-text-color)] tracking-wide italic'>May 2025 - July 2025</span>
                </div>

                <div className='flex flex-wrap border-t border-[var(--border-color)] pt-3 w-full'>
                <span className='text-[var(--primary-text-color)] text-base leading-relaxed'>
                    <ul className='list-disc ml-6 mt-2 text-sm md:text-md space-y-2'>
                        <li>
                            Worked on a real world, live production website contributing to both frontend and integration with backend APIs using React.js and Tailwind CSS.
                        </li>
                        <li>
                            Built and improved multiple website components and pages, ensuring mobile responsiveness and modern UI design.
                        </li>
                        <li>
                            Integrated RESTful APIs to connect frontend with backend services, enhancing real-time data display and dynamic interactions.
                        </li>
                        <li>
                            Performed website testing, debugging, and bug fixing across multiple devices and browsers to ensure a seamless user experience.
                        </li>
                        <li>
                            Utilized AI tools like ChatGPT and GitHub Copilot for efficient debugging, refactoring, and accelerating development workflows.
                        </li>
                    </ul>
                </span>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Experience