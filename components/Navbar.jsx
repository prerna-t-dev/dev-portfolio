"use client"
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLenis } from 'lenis/react'
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname() // Get the current path
  const lenis = useLenis()

  // Run smooth scroll after navigating to homepage with a hash
  useEffect(() => {
    if (typeof window !== 'undefined' && pathname === '/' && window.location.hash) {
      const target = window.location.hash.substring(1) // Remove #
      setTimeout(() => {
        lenis.scrollTo(`#${target}`, { lerp: 0.1 })
      }, 300) // Small delay to ensure page has loaded
    }
  }, [pathname, lenis])

  const handleScroll = (e, target) => {
    e.preventDefault()

    if (pathname === '/') {
      // If already on the homepage, scroll smoothly
      lenis.scrollTo(`#${target}`, { lerp: 0.1 })
    } else {
      // If on another page, navigate to homepage with the section hash
      router.push(`/#${target}`)
    }
  }

  return (
    <div id="pf--navbar" className="lg:fixed w-full top-0 left-0 px-6 lg:px-14 py-8 lg:py-10 z-[100]">
      <div className="flex items-center justify-between font-general">

        <a href="/" className="relative inline-block hover:opacity-80 transition">
          <p className="font-semibold text-3xl leading-none flex items-center gap-1 from-subtle-purple via-subtle-pink to-subtle-blue bg-gradient-to-r bg-clip-text text-transparent">
            <span className="font-semibold text-xl text-secondary-700_">&lt;</span>
            <span className="">pt</span>
            <span className="font-semibold text-xl text-secondary-700_"> /&gt;</span>
          </p>
          <span className="absolute text-[9px] font-medium top-[-6px] left-0 text-secondary-500">
            Dev.
          </span>
        </a>

        {/* Navigation Links */}
        <ul className="hidden lg:flex gap-6 items-center font-medium from-subtle-purple via-subtle-pink to-subtle-blue bg-gradient-to-r bg-clip-text text-transparent">
          <li className="cursor-pointer">
            <Link href="/#pf--skills" onClick={(e) => handleScroll(e, 'pf--skills')}>
              Technologies
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/#pf--projects" onClick={(e) => handleScroll(e, 'pf--projects')}>
              Projects
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/#pf--awards" onClick={(e) => handleScroll(e, 'pf--awards')}>
              Awards
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/#pf--contact" onClick={(e) => handleScroll(e, 'pf--contact')}>
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
