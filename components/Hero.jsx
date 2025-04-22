"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { ReactLenis, useLenis } from 'lenis/react'
import ContraHireMeButton from "../components/ContraHireMeButton";



const Hero = () => {

  const lenis = useLenis(({scroll}) => {
    // console.log(scroll)
  })



  return (
    <div id="pf--hero" className="lg:text-center max-w-[1260px] mx-auto min-h-[50vh] lg:min-h-[80vh] bg-secondary-300_ mt-12 lg:mt-32 px-6">
        {/* Hero Title with delay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-title font-general lg:text-center font-semibold leading-none mb-3"
        >
            <span className="text-subtitle">Hello,</span>
            <br />
            I&apos;m 
            <span className="from-subtle-purple via-subtle-pink to-subtle-blue bg-gradient-to-r bg-clip-text text-transparent"> Prerna</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{  opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-2xl lg:text-4xl font-medium text-secondary-500 leading-[1.25em] md:leading-[1.08em] lg:px-[200px]"
        >
         Senior Frontend Developer
        </motion.p>

        {/* Hero Subtitle with delay */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{  opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-base lg:text-xl font-medium text-secondary-500 leading-[1.25em] md:leading-[1.08em] px-30 lg:px-[250px] mt-10"
        >
         I craft dynamic e-commerce solutions by leveraging advanced front-end technologies to deliver seamless, engaging digital experiences that drive growth and connect with users.
        </motion.p>



        <motion.p
          initial={{ opacity: 0 }}
          animate={{  opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="inline-flex mt-12 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400_ focus:ring-offset-2 focus:ring-offset-slate-50"
            style={{animation: `floatUpDown ${Math.random() * 5 + 3}s ease-in-out infinite`}}
            onClick={() => lenis.scrollTo('#pf--projects', {
              lerp: 0.1
            })}
            >
            Checkout my Work
          </button>

          {/* <ContraHireMeButton /> */}


          {/* <button className='btn capitalize border p-4 rounded-full mx-auto'
          onClick={() => lenis.scrollTo('#pf--projects', {
            lerp: 0.1
          })}
          >Checkout my Work</button> */}


        </motion.p>
  
       

    </div>
  );
};

export default Hero;
