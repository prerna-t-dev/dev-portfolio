"use client"
import React from 'react'
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Award from './components/award';

export const basePath = (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_USE_CUSTOM_DOMAIN !== "true") ? "/dev-portfolio" : "";
export const withBasePath = (path) => `${basePath}${path}`;

const awards = [
  {
    title: "CSS Site of the Day",
    src: "css-winner-awards.jpg",
    color: "#000000",
    url: "https://www.csswinner.com/details/transparency-report-2023/18145"
  },
  {
    title: "CSS Design Awards",
    src: "css-design-awards.jpg",
    color: "#8C8C8C",
    url: "https://www.cssdesignawards.com/sites/transparency-report-2024/45934"
  },
  {
    title: "WD Awards",
    src: "wd-awards.png",
    color: "#EFE8D3",
    url: "https://wdawards.com/web/transparency-report-2023"
  }
]

const scaleAnimation = {
  initial: {scale: 0, x:"-50%", y:"-50%"},
  enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
  closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}



const Awards = () => {
  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }



  return (
    <div id="pf--awards" onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
        <div className="px-6 py-12 pt-20 lg:py-24 lg:pt-32">
            <h2 className="mb-10 text-heading-2 font-cabinet font-medium text-secondary-500">Awards</h2>


            <div className="hidden lg:flex">
              <div className={styles.body}>
                  {
                      awards.map( (award, index) => {
                          return <Award index={index} title={award.title} url={award.url} manageModal={manageModal} key={index}/>
                      })
                  }
              </div>

              <>
                  <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
                      <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
                      {
                          awards.map( (award, index) => {
                          const { src, color } = award
                          return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                              <Image 
                              src={`${basePath}/images/${src}`}
                              width={300}
                              height={0}
                              alt="image"
                              />
                          </div>
                          })
                      }
                      </div>
                  </motion.div>
                  <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
                  <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
              </>

            </div>


            <div className="lg:hidden">
              <div className={styles.body}>
                  {
                      awards.map( (award, index) => {
                          return <Award index={index} title={award.title} url={award.url} manageModal={manageModal} key={index}/>
                      })
                  }
              </div>
            </div>
            
        </div> 
    </div>
  )
}

export default Awards



// Awards

// - CSS Site of the Day: https://www.csswinner.com/details/transparency-report-2023/18145
// - CSS Design Awards: https://www.cssdesignawards.com/sites/transparency-report-2024/45934
// - WD Awards: https://wdawards.com/web/transparency-report-2023

// Cool Hover Effects:
// https://www.hover.dev/