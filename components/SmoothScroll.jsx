"use client"
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from 'lenis/react'

function SmoothScroll({ children }) {
  const pathname = usePathname()
  const lenis = useLenis()

  // Always start at top when navigating to a new page (fixes landing in middle of page)
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.scrollTo(0, 0)
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, lenis])

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