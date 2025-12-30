"use client"
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLenis } from 'lenis/react'
import Link from 'next/link'


export const basePath = (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_USE_CUSTOM_DOMAIN !== "true") ? "/dev-portfolio" : "";
export const withBasePath = (path) => `${basePath}${path}`;



const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname() // Get the current path
  const lenis = useLenis()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
    setIsDrawerOpen(false) // Close drawer when navigating

    if (pathname === '/') {
      // If already on the homepage, scroll smoothly
      lenis.scrollTo(`#${target}`, { lerp: 0.1 })
    } else {
      // If on another page, navigate to homepage with the section hash
      router.push(`/#${target}`)
    }
  }

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isDrawerOpen])

  return (
    <div id="pf--navbar" className="lg:fixed w-full top-0 left-0 px-6 lg:px-14 py-8 lg:py-10 z-[100]">
      <div className="flex items-center justify-between font-general">

      {/* <Link href="/" scroll={true}>
        <a className="relative inline-block hover:opacity-80 transition">
          <p className="font-semibold text-3xl leading-none flex items-center gap-1 from-subtle-purple via-subtle-pink to-subtle-blue bg-gradient-to-r bg-clip-text text-transparent">
            <span className="font-semibold text-xl text-secondary-700_">&lt;</span>
            <span className="">pt</span>
            <span className="font-semibold text-xl text-secondary-700_"> /&gt;</span>
          </p>
          <span className="absolute text-[9px] font-medium top-[-6px] left-0 text-secondary-500">
            Dev.
          </span>
        </a>
      </Link> */}
      <Link
        href="/"
        scroll={true}
        className="relative inline-block hover:opacity-80 transition"
      >
        <p className="font-semibold text-3xl leading-none flex items-center gap-1 from-subtle-purple via-subtle-pink to-subtle-blue bg-gradient-to-r bg-clip-text text-transparent">
          <span className="font-semibold text-xl text-secondary-700_">&lt;</span>
          <span className="">pt</span>
          <span className="font-semibold text-xl text-secondary-700_"> /&gt;</span>
        </p>
        <span className="absolute text-[9px] font-medium top-[-6px] left-0 text-secondary-500">
          Dev.
        </span>
      </Link>



        {/* Navigation Links - Desktop */}
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

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden fixed top-8 right-6 flex flex-col gap-1 z-[101]"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue transition-all duration-300 ${
              isDrawerOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue transition-all duration-300 ${
              isDrawerOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue transition-all duration-300 ${
              isDrawerOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>

        {/* Drawer */}
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
            isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className={`absolute top-0 left-0 right-0 bg-[#0a0a0a] transition-transform duration-300 ease-out ${
              isDrawerOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col pt-24 px-6">
              <ul className="flex flex-col gap-8 font-medium">
                <li>
                  <Link
                    href="/#pf--skills"
                    onClick={(e) => handleScroll(e, 'pf--skills')}
                    className="text-transparent bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue bg-clip-text text-xl block hover:opacity-80 transition-opacity"
                  >
                    Technologies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pf--projects"
                    onClick={(e) => handleScroll(e, 'pf--projects')}
                    className="text-transparent bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue bg-clip-text text-xl block hover:opacity-80 transition-opacity"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pf--awards"
                    onClick={(e) => handleScroll(e, 'pf--awards')}
                    className="text-transparent bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue bg-clip-text text-xl block hover:opacity-80 transition-opacity"
                  >
                    Awards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pf--contact"
                    onClick={(e) => handleScroll(e, 'pf--contact')}
                    className="text-transparent bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue bg-clip-text text-xl block hover:opacity-80 transition-opacity"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
