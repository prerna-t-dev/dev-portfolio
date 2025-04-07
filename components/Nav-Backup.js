"use client"
import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'


const Navbar = () => {
  const lenis = useLenis(({scroll}) => {
    // console.log(scroll)
  })




  return (
    <div id="pf--navbar" className="lg:fixed w-full top-0 left-0 px-6 lg:px-14 py-8 lg:py-10 z-[100]">
        <div className="flex items-center justify-between font-general">
  
            <a href="/" className="relative inline-block hover:opacity-80 transition">
              <p className="font-semibold text-3xl leading-none flex items-center gap-1 from-subtle-purple via-subtle-pink to-subtle-blue bg-gradient-to-r bg-clip-text text-transparent  ">
              <span className="font-semibold text-xl text-secondary-700_">&lt;</span>
                <span className="">pt</span>
                <span className="font-semibold text-xl text-secondary-700_"> /&gt;</span>
              </p>
              <span className="absolute text-[9px] font-medium top-[-6px] left-0 text-secondary-500">
                Dev.
              </span>
            </a>



            <ul className="hidden lg:flex gap-6 items-center font-medium from-subtle-purple via-subtle-pink to-subtle-blue bg-gradient-to-r bg-clip-text text-transparent">
                <li className="cursor-pointer "
                onClick={() => lenis.scrollTo('#pf--skills', {
                  lerp: 0.1
                })}
                >Technologies</li>
                <li className="cursor-pointer "
                 onClick={() => lenis.scrollTo('#pf--projects', {
                  lerp: 0.1
                })}
                >Projects</li>
                <li className="cursor-pointer "
                 onClick={() => lenis.scrollTo('#pf--awards', {
                  lerp: 0.1
                })}
                >Awards</li>
                <li className="cursor-pointer "
                 onClick={() => lenis.scrollTo('#pf--contact', {
                  lerp: 0.1
                })}
                >Contact</li>
            </ul>
         

        </div>
      
    </div>
  )
}

export default Navbar
