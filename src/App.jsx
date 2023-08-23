import './App.css'
import { CostumizeProvider } from './Context/Costumize'
import Configurator from './Components/Configurator'
import Experience from './Components/Experience'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { useThree } from '@react-three/fiber';

import { OrbitControls, Html, Text, ScrollControls, Scroll } from '@react-three/drei'
import { ScrollManager } from './Components/ScrollManager'
import Header from './Components/Header'
import AboutText from './Components/AboutText'
import { useCostumize } from './Context/Costumize'
import ThreejSText from './Components/ThreejSText'
import { Loader } from '@react-three/drei'
import { useProgress } from '@react-three/drei'



function App() {
  const [section, setSection] = useState(0)

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }




  return (
    <CostumizeProvider>
      <div className='App'>

        <AnimatePresence>
          {section === 1 && (
            <motion.div
              initial={{ opacity: 0 }}     // Initial state: fully transparent
              animate={{ opacity: 1 }}     // End state: fully opaque
              exit={{ opacity: 0 }}        // Exit animation: fade out
              transition={{ duration: 2 }} // Duration of the transition in seconds
            >
              <Configurator />
            </motion.div>
          )}
        </AnimatePresence>


        <Canvas >

          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <color attach="background" args={["#101010"]} />
            <fog attach="fog" args={['#101010', 5, 25]} />



            <Scroll html>
              <Header section={section} />


              <AboutText />



            </Scroll>

            <Scroll>

              <ThreejSText />
              <Suspense fallback={<Loader />}>
                <Experience section={section} />
              </Suspense>
            </Scroll>
            <Scroll >


            </Scroll>


          </ScrollControls>
        </Canvas>





      </div>
    </CostumizeProvider>
  )
}

export default App
