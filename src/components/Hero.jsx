import React from "react";
import { Link } from "react-router-dom";
import '../styles/font.css'
import TrueFocus from './ui/TrueFocus/TrueFocus';
import RotatingText from './ui/RotatingText/RotatingText';
import Shuffle from "./ui/Shuffle/Shuffle";
import PixelBlast from './ui/PixelBlast/PixelBlast';
import Particles from './ui/Particles/Particles';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer'
import Mes from '../assets/mes-college.jpeg';
import '../styles/BackgroundGrid.css';
import logo from '../../public/logo.png';


const Hero = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return(
    <>
    <section className="relative w-full h-screen overflow-hidden">

     
      <div className="absolute inset-0 w-screen h-screen">

            {isMobile && (
              <Particles
                particleColors={['#ff0000', '#ff0000']}
                particleCount={250}
                particleSpread={10}
                speed={0.14}
                particleBaseSize={85}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            )}

          {!isMobile && <PixelBlast
              variant="circle"
              pixelSize={6}
              color="#ff0000"
              patternScale={3}
              patternDensity={1.2}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}
              liquid
              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.44}
              transparent
            />}
      </div>


      <div className="absolute top-6 right-8  z-50 flex flex-row font-bold text-red-500 font-Orbitron lg:text-lg xl:text-xl text-sm md:text-base tracking-widest">
        <p>Mes College <br /> Marampally</p>
      </div>
      
 
      <div className="absolute left-7 top-6 z-50">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-16 md:w-20 lg:w-24 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>


      <div className="relative font-robot  flex flex-col items-center  justify-center h-full text-center text-white">
          <div className="text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase text-gray-300 font-poppins mb-1">
          <Shuffle
            text="DEPARTMENT OF COMPUTER APPLICATIONS"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            loop={true}
            loopDelay={3} 
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
        </div>

          <br />
          <p className="text-sm sm:text-base text-gray-200 mb-8 -mt-6 tracking-widest">
            presents
        </p>

         


          <span className="text-5xl md:text-8xl font-bold font-saira">
            <TrueFocus 
              sentence="INKRIT-4.0"
              manualMode={true}
              blurAmount={5}
              borderColor="red"
              animationDuration={8}
              pauseBetweenAnimations={4}
              />
          </span>
 
        <p className="mt-6 text-sm md:text-lg font-robot text-gray-200 shadow-red-100 max-w-2xl">
          Showcase Your talent and win exciting prizes
        </p>

        <Link to='/events'>
          <button className="mt-8 px-8 py-3 bg-red-600 font-robot text-gray-200 font-semibold rounded-full hover:scale-105 transition-transform relative neon-btn z-2">
            Explore Events
          </button>
        </Link>

         <div className="mt-12 overflow-hidden flex flex-row gap-1 z-4">
            <RotatingText
              texts={['Date : January 16, 17 2026', 'Time : From 9:30 Am onwards',  'Stay Tuned!']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 shadow-[0_2px_7px_rgba(210,0,0,0.6)] sm:py-1 md:py-2 justify-center rounded-lg "
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
            />
      </div>

      

      </div>

       


    </section>
  
           <div className="p-8 w-full min-h-screen flex flex-col items-center about-section-grid text-white space-y-20">

        {/* Main Heading */}
        <h1 className="mt-16 text-5xl md:text-6xl font-orbitron font-bold text-red-500 relative">
          About Us
          <span className="absolute left-0 -bottom-2 h-1 w-32 bg-red-600 rounded-lg"></span>
        </h1>

        {/* Info Sections */}
        <div className="w-full max-w-5xl flex flex-col space-y-16">

          {/* Inkrit 4.0 */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-orbitron text-red-400 border-l-4 border-red-600 pl-4 tracking-wider">
              INKRIT 4.0
            </h2>
            <p className="text-white text-lg md:text-xl font-exo2 leading-relaxed">
              INKRIT 4.0 is the cutting-edge technical fest hosted by the Department of Computer Applications, MES College Marampally. It fosters innovative ideas, tech experiments, and provides a futuristic platform for students to showcase their potential.
            </p>
          </div>

          {/* Department */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-orbitron text-red-400 border-l-4 border-red-600 pl-4 tracking-wider">
              Department of Computer Applications
            </h2>
            <p className="text-white text-lg md:text-xl font-exo2 leading-relaxed">
              Established in 1995, the Department of Computer Applications delivers world-class education through BCA, MSc. Computer Science, and PhD programs. Students gain strong technical foundations and excel in placements or higher studies.
            </p>
          </div>

          {/* College */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-orbitron text-red-400 border-l-4 border-red-600 pl-4 tracking-wider">
              MES College Marampally
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-white text-lg md:text-xl font-exo2 leading-relaxed md:flex-1">
                MES College Marampally has been shaping young minds for over 30 years, hosting nearly 3000 students and 145 faculty members. The campus offers state-of-the-art infrastructure for UG and PG courses.
              </p>
              <img 
                src={Mes}
                alt="MES College" 
                className="md:w-[400px] md:h-[250px] w-full h-64 object-cover rounded-3xl border-2 border-red-500 shadow-red-600 shadow-lg"
              />
            </div>
          </div>

        </div>

        {/* Masonry Section */}
        

      </div>
      <Footer />
  </>
  )
}

export default Hero;