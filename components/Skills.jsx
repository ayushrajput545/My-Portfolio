import React from 'react'

const cardStyle =
  'bg-[var(--secondary-bg-color)] shadow-md rounded-lg p-6 mb-6 flex flex-col items-start border border-[var(--border-color)] '

const sectionTitle =
  'text-lg font-bold mb-2 text-[var(--primary-text-color)] tracking-wide uppercase'

const badgeStyle =
  'px-3 py-1 mx-2 my-1 rounded-full font-medium text-sm bg-blue-50 text-blue-900 border border-blue-200 inline-block'

const badgeStyle2 =
  'px-3 py-1 mx-2 my-1 rounded-full font-medium text-sm bg-green-50 text-green-900 border border-green-200 inline-block'

const badgeStyle3 =
  'px-3 py-1 mx-2 my-1 rounded-full font-medium text-sm bg-pink-50 text-pink-900 border border-pink-200 inline-block'

const Skills = () => {
  const languages = ['Java', 'C', 'Python', 'HTML', 'CSS', 'JavaScript']
  const tools = [
    'React.js',
    'Node.js',
    'Tailwind CSS',
    'Express.js',
    'Redux',
    'Next.js',
    'shadcn/ui',
    'Git & GitHub',
    'Postman',
    'Axios',
    'mongoDB',
    'Firebase',
    'Clerk'

  ]
  const concepts = ['Data Structures & Algorithms', 'Operating System', 'OOPs']

  return (
    <div className='w-full mb-5 mt-12 px-4' id='skills'>
      <h1 className='text-[2rem] text-[#0987d4] font-extrabold text-center mb-8'>
        Skills
      </h1>
      <div className='lg:w-4/6 w-full mx-auto'>
        {/* Card 1: Languages */}
        <div className={cardStyle}>
          <span className={sectionTitle}>Languages</span>
          <div className='flex flex-wrap border-t border-[var(--border-color)] pt-3 w-full'>
            {languages.map(lang => (
              <span key={lang} className={badgeStyle}>
                {lang}
              </span>
            ))}
          </div>
        </div>
        {/* Card 2: Tools */}
        <div className={cardStyle}>
          <span className={sectionTitle}>Tools , Frameworks & Libraries</span>
          <div className='flex flex-wrap border-t border-[var(--border-color)] pt-3 w-full'>
            {tools.map(tool => (
              <span key={tool} className={badgeStyle2}>
                {tool}
              </span>
            ))}
          </div>
        </div>
        {/* Card 3: Concepts */}
        <div className={cardStyle}>
          <span className={sectionTitle}>
            Computer Science Concepts & Core Skills
          </span>
          <div className='flex flex-wrap border-t border-[var(--border-color)] pt-3 w-full'>
            {concepts.map(concept => (
              <span key={concept} className={badgeStyle3}>
                {concept}
              </span>
            ))}
          </div>
          <p className='mt-5 text-[var(--secondary-text-color)] text-sm'>
            Strong grasp of problem-solving and programming fundamentals.  
            I enjoy tackling algorithmic challenges and building efficient, scalable solutions.  
            Passionate about applying theoretical knowledge to real-world development!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills