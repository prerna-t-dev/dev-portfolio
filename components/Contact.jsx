import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Parallax from './Parallax';
import Footer from './Footer';


const contactDetails = [
    {
        "social": "LinkedIn",
        "url": "https://www.linkedin.com/in/prernamayee-tripathy-52162bb5/"
    }
]

export default function Contact() {
  return (
    <div id="pf--contact" className="max-w-[1260px] px-6 mx-auto pt-12 lg:pt-32 pb-4">
        <div className="grid grid-cols-2_ gap-14 mb-[64px] lg:mb-[172px]">
            <div className="w-full h-full overflow-hidden rounded-[8px] hidden">
                {/* <Parallax speed={-1.1} className={"scale-[1.5] origin-top"}>
                    <Image
                        className="object-cover rounded-[20px] w-full grayscale-[50%]_ saturate-70_ brightness-[75%] blur-[0.05px]"
                        src="/images/Prerna-portrait-bluegrey-bg.png"
                        alt="Prerna Tripathy"
                        width="200"
                        height="200"
                    >

                    </Image>
                </Parallax> */}
                <Parallax speed={-1.1} className={"scale-[1.5] origin-top"}>
                    <Image
                        className="object-cover rounded-[20px] w-full grayscale-[30%]"
                        src="/images/Prerna-portrait.jpg"
                        alt="Prerna Tripathy"
                        width="200"
                        height="200"
                    >

                    </Image>
                </Parallax>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full w-4/5_ gap-4">
                <p className="text-base opacity-70 lg:w-1/2 lg:pr-20 text-secondary-300">
                    <span className="pb-2 block">
                        {/* I&apos;m a <strong>Senior Shopify Front-End Developer</strong> specializing in building high-performance, user-friendly e-commerce experiences. I’ve led and developed Shopify projects for D2C and B2B brands, ensuring seamless functionality, speed, and scalability. */}
                            I’m a Senior Shopify Frontend Engineer with 7+ years of experience building high-performance e-commerce experiences. I’ve led and delivered Shopify projects for D2C and B2B brands, focusing on scalable architecture, performance, and conversion optimization.
                        <br />
                    </span>
               
                    <span className="pb-2 block">
                        {/* I focus on <strong>Custom Shopify themes, performance-driven UI enhancements, and optimizing site speed</strong> to create smooth, efficient storefronts. My goal is to build <strong>fast, accessible, and conversion-optimized experiences</strong> that help brands grow. */}
                        My work involves developing <strong>Custom Shopify themes, Complex frontend systems, and Interactive UI components</strong>, including bundle builders, subscription flows, and advanced product experiences. I focus on creating fast, intuitive storefronts that improve usability and drive business outcomes.
                        <br />
                    </span>
                                            

                    <span className="pb-2 block">
                        I prioritize performance, maintainability, and minimal app dependency, ensuring solutions are scalable and easy to extend. I approach each project with a balance of technical execution and business understanding, aligning frontend decisions with conversion and growth goals.                
                    </span>

                Outside of work, I enjoy reading, biking, and exploring new technologies. I also paint as a way to unwind and stay creative.

                </p>



                <div className="lg:text-right flex flex-col gap-2 text-lg">
                    <Link href="https://www.linkedin.com/in/prernamayee-tripathy-52162bb5/" target="_blank">
                        <span className="font-semibold text-secondary-500">
                            LinkedIn
                        </span>
                    </Link>
                    <Link href="https://github.com/prerna-t-dev" target="_blank">
                        <span className="font-semibold text-secondary-500">
                            Github
                        </span>
                    </Link>

                </div>
            </div>
            

        </div>
        {/* <Footer /> */}
      
    </div>
  )
}
