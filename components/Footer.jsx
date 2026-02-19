import React from 'react'

const Footer = () => {
  return (
    <div className="px-0 lg:px-32 text-sm lg:text-base">
        <p className="text-center text-secondary-600 lg:w-3/5 mx-auto">
            This Portfolio is created using <span className="font-medium text-secondary-500">Next.js</span>, <span className="font-medium text-secondary-500">Tailwind CSS</span>, <span className="font-medium text-secondary-500">GSAP</span> and <span className="font-medium text-secondary-500">Framer Motion</span>  
        </p>
        <p className="text-center text-secondary-300 mt-0">
          &copy; {new Date().getFullYear()}
        </p>

    </div>
  )
}

export default Footer
