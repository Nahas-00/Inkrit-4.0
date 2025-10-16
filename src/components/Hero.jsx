import React from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import '../styles/font.css'
import TrueFocus from './ui/TrueFocus/TrueFocus';
import RotatingText from './ui/RotatingText/RotatingText';
import Shuffle from "./ui/Shuffle/Shuffle";
import RobotModel from './RobotModel'
import PixelBlast from './ui/PixelBlast/PixelBlast'
import '../styles/font.css'


const Hero = () => {
  return(
    <section className="relative w-full h-screen overflow-hidden">

     
      <div className="absolute inset-0">

           <PixelBlast
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
              
            />
       
      </div>


      <div className="absolute left-7 top-8 z-50 font-bold text-red-500 font-Orbitron lg:text-lg xl:text-xl text-sm md:text-base tracking-widest">
        <p>Mes College <br /> Marampally</p>
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
 
        <p className="mt-6 text-sm md:text-lg font-robot text-gray-300 shadow-blue-100 max-w-2xl">
          Showcase Your talent and win exciting prizes
        </p>
        <button className="mt-8 px-8 py-3 bg-red-600 font-robot text-gray-200 font-semibold rounded-full hover:scale-105 transition-transform relative neon-btn">
          Explore Events
        </button>


         <div className="mt-12 overflow-hidden flex flex-row gap-1">
            <RotatingText
              texts={['Date : January 16, 17 2026', 'Time : From 9:30 Am onwards',  'Stay Tuned!']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg "
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

       <div className="absolute bottom-2 right-1 w-[300px] h-[300px] md:w-[550px] md:h-[550px] z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 3]} intensity={1.5} />
          <RobotModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

    </section>
  )
}

export default Hero;