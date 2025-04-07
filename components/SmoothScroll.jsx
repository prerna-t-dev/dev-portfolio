"use client"
import { useRef, } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'

function SmoothScroll({children}) {
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // })

  return (
    <ReactLenis root options={{
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: false,
        syncScroll: true,
    }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;