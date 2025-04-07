import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { AuroraBackgroundDark } from "@/components/ui/AuroraBackgroundDark";
import { StarBackground } from "@/components/ui/StarBackground";
import CustomCursor from "@/components/CustomCursor";
import Awards from "../components/Awards";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
     {/* <CustomCursor /> */}
    
    <div className="relative font-grotesk text-white z-[10] overflow-hidden">
     
     

      {/* Radial Gradient Overlay */}
      <div className="fixed z-[-20]">
        <div className="absolute top-0 z-[-20] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Aurora Background */}
      {/* <AuroraBackgroundDark className="absolute inset-0 -z-10" /> */}

      <StarBackground className="absolute inset-0 -z-10" />



      {/* Page Content */}
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      
    </div>
    </>
  );
}




// PORTFOLIO EXAMPLES
// https://brittanychiang.com/
// https://sugith.in/  --- really good portfolio
// https://dennissnellenberg.com/  --- awards copied from here
// https://www.sunnypatel.net/  --- this one has the Tech Skills section
// https://x.com/theo/status/1694507736673743014  --- twitter thread with examples