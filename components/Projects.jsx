"use client"

import React, {useState, useRef} from 'react'
import VideoPlayer from "./ui/VideoPlayer";
import Image from "next/image"
import Link from 'next/link';
import Parallax from './Parallax';
import useMouse from "@react-hook/mouse-position";
import { useMediaQuery } from "react-responsive";
import { useTransform, useScroll, motion } from 'framer-motion';

export const basePath = (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_USE_CUSTOM_DOMAIN !== "true") ? "/dev-portfolio" : "";
export const withBasePath = (path) => `${basePath}${path}`;



const featuredProjects = [
  {
    number: '01',
    projectLink: 'https://counterculturecoffee.com/',
    parallaxBgImg: 'test-img-2.webp',
    projectVideoClip: 'CCC-Homepage.mp4',
    projectHeader: 'Counter Culture Coffee',
    projectDescription: 'Sustainability focussed Premium Coffee Subscriptions',
    tags: [
      'Liquid',
      'Tailwind CSS',
      'Recharge',
      'jQuery',
      'Gulp',
      'Lenis'
    ]
  },
  // {
  //   number: '02',
  //   projectLink: 'https://onpargolf.com/',
  //   parallaxBgImg: 'test-img.webp',
  //   projectVideoClip: 'OnPar-Homepage.mp4',
  //   projectHeader: 'On Par Golf',
  //   projectDescription: 'High Performance Trendy Goft Attire',
  //   tags: [
  //     'Liquid',
  //     'jQuery'
  //   ]
  // },
  {
    number: '02',
    projectLink: 'https://www.moziwash.com/',
    parallaxBgImg: 'test-img.webp',
    projectVideoClip: 'Moziwash-Homepage.mp4',
    projectHeader: 'MoziWash',
    projectDescription: 'Designer Scented Laundry Detergent',
    tags: [
      'Liquid',
      'jQuery',
      'Shopify',
      'Recharge'
    ]
  },
  // {
  //   number: '03',
  //   projectLink: '',
  //   parallaxBgImg: 'test-img-3.webp',
  //   projectVideoClip: 'SNE-Bundle-Builder.mp4',
  //   projectHeader: 'Sketch & Etch',
  //   projectDescription: 'Fully Customizable Custom Built Neon Signs',
  //   tags: [
  //     'Liquid',
  //     'Vue JS',
  //     'Javascript',
  //     'GSAP'
  //   ]
  // },
  {
    number: '03',
    projectLink: 'https://www.maiaestates.in/',
    parallaxBgImg: 'test-img-3.webp',
    projectVideoClip: 'MAIA-homepage.mp4',
    projectHeader: 'MAIA Estates',
    projectDescription: 'Luxury Real Estate Developers',
    tags: [
      'PHP',
      'Wordpress',
      'Javascript',
      'Lenis',
      'GSAP'
    ]
  },
  {
    number: '04',
    projectLink: 'https://houndstoothsc.com/',
    parallaxBgImg: 'test-img-4.webp',
    projectVideoClip: 'HT-Homepage.mp4',
    projectHeader: 'Houndstooth Strategic Comm.',
    projectDescription: 'Award Winning Design and Development Studio Website',
    tags: [
      'HTML',
      'CSS',
      'Javascript',
      'GSAP'
    ]
  },
  {
    number: '05',
    projectLink: 'https://counterculturecoffee.com/pages/transparency-report-2023',
    parallaxBgImg: 'test-img-5.webp',
    projectVideoClip: 'CCC-TR.mp4',
    projectHeader: 'Counter Culture - Transparency Report 2023',
    projectDescription: 'Counter Culture Coffee\'s Award-Winning Landing Page documenting their Sustainability Practices',
    tags: [
      'Liquid',
      'Tailwind',
      'Javascript',
      'GSAP',
      'Lenis'
    ]
  }
]



const Projects = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");


  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 0,
      height: 0,
      width: 0,
      fontSize: "16px",
      backgroundColor: "#000",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    project: {
      opacity: 1,
      background: "linear-gradient(to right, #b3a2c7, #f2a1b3, #a1c4fd)",
      color: "#000",
      height: 40,
      width: 80,
      fontSize: "16px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32
    },
  };


  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28
  };

  const tween = {
    type: "tween",
    duration: 0.4, // Adjust the duration for smoothness
    ease: [0.25, 0.1, 0.25, 1], // This is a custom cubic-bezier easing function
  };
  


  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }








  const container = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: 1024 });


  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['-10% end', '1% start']
  })

  // const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  // const scale = isDesktop ? useTransform(scrollYProgress, [0, 1], [0.8, 1]) : 1;

  const scaleDesktop = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = isDesktop ? scaleDesktop : 1;



  return (
    <motion.div style={isDesktop ? { scale } : {}} className="relative origin-top projects-wrapper mt-8 lg:mt-32">
      
      <div ref={container} id="pf--projects" className="min-h-screen_ rounded-[30px] lg:rounded-[60px] pb-8 lg:pb-20 bg-gradient-to-b from-[#0a0a0a] to-[#0b192e] mt-12 relative ">
        <div className="max-w-[1260px] px-6 mx-auto py-12 lg:py-24">
          <h2 className="mb-4 lg:mb-10 text-heading-2 font-cabinet font-medium text-secondary-500">Featured Projects</h2>
          <div className="flex flex-col gap-14 lg:gap-20" ref={ref} >
            <motion.div
                    variants={variants}
                    className="projectsCursor hidden lg:flex"
                    animate={cursorVariant}
                    transition={tween}
                  >
                    <span className="cursorText span items-center">{cursorText}
                    </span>

                    <div className="w-[20px] h-[20px]">
                      <svg 
                          className="w-full h-full"
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 10 10" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="0.8" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          class="icon-right-up-arrow"
                      >
                        <path d="M1.5 8.5L8.5 1.5" />
                        <path d="M1.5 1.5h7v7" />
                      </svg>
                    </div>
                   
            </motion.div>


            {
              featuredProjects.map((featuredProject, index) => {
                return <div key={index} className="grid grid-cols-1 lg:grid-cols-[40%_60%] h-full">
                        <p className="sticky top-20 text-[22vw] overflow-hidden h-fit font-normal leading-[0.8] text-secondary-500 hidden lg:block">{featuredProject.number}.</p>


                        <div>
                          <Link href={featuredProject.projectLink} target="_blank" onMouseEnter={projectEnter} onMouseLeave={projectLeave}>
                            <div className="aspect-[1/0.9] bg-gradient-to-b from-[#b3a2c7] via-[#f2a1b3] to-[#0a0a0a] rounded-xl lg:rounded-3xl flex items-center justify-center px-4 lg:px-16 relative overflow-hidden">
                              <Parallax speed={1.5} className={"absolute inset-0 w-full h-full scale-[1.6] origin-bottom"}>
                                <Image
                                  src={`${basePath}/images/${featuredProject.parallaxBgImg}`}
                                  className='w-full'
                                  width={500}
                                  height={500}
                                  alt={featuredProject.projectHeader}
                                />
                              </Parallax>

                              <video
                                width="100%"
                                autoPlay
                                loop
                                muted
                                className="relative z-10 rounded-[20px]"
                                preload="auto"
                                
                              >
                                <source  src={`${basePath}/videos/${featuredProject.projectVideoClip}`} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>  


                            </div>
                          </Link>


                          <div className="flex flex-col lg:flex-row items-start justify-between lg:mt-2 gap-0 lg:gap-6">
                              <div className="w-full">
                                <h4 className="mt-2 text-2xl font-general text-secondary-500 font-medium">{featuredProject.projectHeader}</h4>
                                <p className="text-sm w-2/3 opacity-70 hidden lg:block">
                                  {featuredProject.projectDescription}
                                </p>

                              </div>
                            

                              <div className="flex gap-1 mt-2 lg:mt-3 items-center">
                                {
                                  featuredProject.tags.map((tag, index) => {
                                    return (
                                      <div key={index} className="py-0.5 px-2 whitespace-nowrap border border-secondary-500 text-secondary-500 rounded-full text-[10px]">
                                        {featuredProject.tags[index]}
                                      </div>
                                    )
                                  })
                                }
                              </div>

                          </div>
                        </div>
                      </div>

              })
            }
          
  
          </div>


          <div className="relative w-fit mx-auto mt-20 group">
            <Link 
              href="/projects"
              className="text-transparent font-medium bg-gradient-to-r from-subtle-purple-light via-subtle-pink-light to-subtle-blue-light bg-clip-text text-xl block text-center relative z-10"
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradientShift 2s ease infinite'
              }}
            >
              View More 

            </Link>
            <span 
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue transition-all duration-500 w-full group-hover:w-0 z-0"
            ></span>
          </div>



        </div>
      </div>
                
      
    </motion.div>
  )
}
 
export default Projects
