import React from "react";
import LiquidEther from './ui/LiquidEther/LiquidEther';
import '../styles/font.css'
import TrueFocus from './ui/TrueFocus/TrueFocus';
import RotatingText from './ui/RotatingText/RotatingText';
import Hyperspeed from './ui/Hyperspeed/Hyperspeed';
import Particles from './ui/Particles/Particles'


const Hero = () => {
  return(
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
      <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
      </div>

      <div className="relative mt-8  flex flex-col items-center  justify-center h-full text-center text-white">

          <span className="text-6xl md:text-8xl font-bold font-saira">
            <TrueFocus 
              sentence="ASTRAVERSE"
              manualMode={false}
              blurAmount={5}
              borderColor="blue"
              animationDuration={8}
              pauseBetweenAnimations={4}
              />
          </span>
 
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
          Showcase Your talent and win exciting prices
        </p>
        <button className="mt-8 px-8 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:scale-105 transition-transform">
          Explore Events
        </button>

         <div className="mt-12 overflow-hidden flex flex-row gap-1">
          <div>
            <h1 className="text-lg mt-1.5 font-bold">Date :</h1>
          </div>
            <RotatingText
              texts={['January 15 , 16, 17 2026', 'From 10 Am onwards',  'Stay Tuned!']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg "
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
      </div>

      </div>

    </section>
  )
}

export default Hero;