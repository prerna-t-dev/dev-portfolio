"use client"

import React from 'react';
import Navbar from "@/components/Navbar";
import Image from "next/image"
import Link from 'next/link';
import Parallax from '../../components/Parallax';
import { StarBackground } from "@/components/ui/StarBackground";
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';



export const basePath = (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_USE_CUSTOM_DOMAIN !== "true") ? "/dev-portfolio" : "";
export const withBasePath = (path) => `${basePath}${path}`;



const projectList = [
  {
    projectLink: 'https://recesspickleball.com/',
    parallaxBgImg: 'recess-bg-img.webp',
    bgScale: '1.5',
    bgOrigin: 'origin-bottom',
    mockupImg: 'recess-mockup-1.png',
    blur: true,
    projectHeader: 'Recess Pickleball',
    projectDescription: 'High-Quality Aesthetic Pickleball Paddles - Shopify Store',
    tags: [
      'Liquid',
      'ReactJS',
      'jQuery',
      'Webpack'
    ]
  },
  {
    projectLink: 'https://atidiv.com/',
    parallaxBgImg: 'atidiv-bg.png',
    bgScale: '1',
    bgOrigin: 'origin-bottom',
    mockupImg: 'atidiv-mockup-1.png',
    blur: false,
    background: '#0303B3',
    projectHeader: 'Atidiv',
    projectDescription: 'Data-Powered Outsourcing Solutions',
    tags: [
      'Wordpress',
      'Lenis',
      'Javascript',
      'GSAP'
    ]
  },
  {
    projectLink: 'https://www.argylesp.com/',
    parallaxBgImg: '',
    bgScale: '1.5',
    bgOrigin: 'origin-bottom',
    mockupImg: 'argyle-mockup-1.png',
    blur: false,
    background: "#15274B",
    projectHeader: 'Argyle',
    projectDescription: 'Argyle Search Partners - Leadership Job Portal',
    tags: [
      'Wordpress',
      'PHP',
      'Javascript',
    ]
  },
  {
    projectLink: '',
    parallaxBgImg: 'gnome-bg.webp',
    bgScale: '1.5',
    bgOrigin: 'origin-bottom',
    mockupImg: 'gnome-mockup.png',
    blur: true,
    projectHeader: 'Gnome',
    projectDescription: 'Lawn Care Brand offering custom solutions and natural ingredients',
    tags: [
      'Liquid',
      'Tailwind',
      'jQuery',
      'Google Maps API'
    ]
  },
  {
    projectLink: 'https://poolday.com/',
    parallaxBgImg: 'poolday-bg.webp',
    bgScale: '1.5',
    bgOrigin: 'origin-bottom',
    mockupImg: 'poolday-mockup.png',
    blur: true,
    projectHeader: 'Poolday',
    projectDescription: 'Premium Pool care Solutions',
    tags: [
      'Liquid',
      'Tailwind',
      'Javascript',
      'GSAP'
    ]
  },
  {
    projectLink: 'https://app.tensorstudio.ai/signin',
    parallaxBgImg: 'soket-img.webp',
    bgScale: '1.5',
    bgOrigin: 'origin-bottom',
    mockupImg: 'tensor-mockup.png',
    blur: false,
    background: "linear-gradient(-150deg, #8eb1f2, #000 30%)",
    projectHeader: 'SOKET Labs - S2S Playground',
    projectDescription: 'Speech-To-Speech AI Model for Indic Languages',
    tags: [
      'NextJS',
      'Shadcn/UI',
      'Supertoken'
    ]
  }
]


const Projects = () => {
  return (
    <>
      <div className="relative font-grotesk text-white z-[10] overflow-hidden mb-[200px]_">
        {/* Radial Gradient Overlay */}
        <div className="fixed z-[-20]">
          <div className="absolute top-0 z-[-20] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
  
        {/* Aurora Background */}
        {/* <AuroraBackgroundDark className="absolute inset-0 -z-10" /> */}
  
        <StarBackground className="fixed inset-0 -z-10" />


        <Navbar />


        {/* Project List */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:text-center max-w-[1260px] mx-auto min-h-[50vh] lg:min-h-[80vh] bg-secondary-300_ mt-12 lg:mt-40 px-6">
          <h2 className="mb-4 lg:mb-10 text-heading-2 font-cabinet font-medium text-secondary-500">Featured Work</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-14">
            {
              projectList.map((project, index) => (
                <div key={index}>
                  <div className="group border order-secondary-700 p-6 lg:p-10 aspect-[3/2] rounded-xl lg:rounded-3xl overflow-hidden relative" style={project.background !== '' ? { background: project.background } : {}}>
                    <Link href={project.projectLink} target="_blank">

                      {/* { project.number} */}
                      <Parallax speed={1.5} className={`absolute inset-0 w-full h-full scale-[${project.bgScale}] ${project.bgOrigin}`}>
                        <Image
                          src={withBasePath(`/images/${project.parallaxBgImg}`)}
                          className='w-full h-full object-cover transition-transform duration-[1200ms] ease-in-out group-hover:scale-105'
                          // style={project.blur && { filter: "blur(1px)" }}
                          width={1500}
                          height={1000}
                          alt='bg'
                        />
                      </Parallax>

                      {project.mockupImg && 
                      <Image
                          src={withBasePath(`/images/${project.mockupImg}`)}
                          className='w-full h-full object-contain z-10 relative rounded-[10px] floatUpDown'
                          // style={{animation: `floatUpDown ${Math.random() * 5 + 3}s ease-in-out infinite`}}
                          width={1500}
                          height={1000}
                          alt={project.projectHeader}
                      />
                      }

                    </Link>
                    
                  </div>
                  <div className="flex flex-col lg:flex-row items-start justify-between lg:mt-2 gap-0 lg:gap-6">
                      <div className="w-full text-left">
                          <h4 className="mt-2 mb-1 text-2xl font-general text-secondary-500 font-medium">{project.projectHeader}</h4>
                          <p className="text-sm w-full opacity-70 hidden lg:block">
                            {project.projectDescription}
                          </p>
                      </div>
                      <div className="flex gap-1 mt-2 lg:mt-3 items-center lg:justify-end w-fit">
                        {
                          project.tags.map((tag, index) => {
                            return (
                              <div key={index} className="py-0.5 px-2 whitespace-nowrap border border-secondary-500 text-secondary-500 rounded-full text-[10px]">
                                {project.tags[index]}
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
        </motion.div>

        <div className="my-10 lg:my-20 px-6">
          <Footer />
        </div>
        
        
      </div>
     
    </>
  )
}

export default Projects
