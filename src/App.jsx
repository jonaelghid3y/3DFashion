import './App.css'
import { CostumizeProvider } from './Context/Costumize'
import Configurator from './Components/Configurator'
import Experience from './Components/Experience'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {motion, AnimatePresence } from 'framer-motion' 

import { OrbitControls, Html, Text, ScrollControls, Scroll } from '@react-three/drei'
import { ScrollManager } from './Components/ScrollManager'
import Header from './Components/Header'
import AboutText from './Components/AboutText'



function App() {
  const [section, setSection] = useState(0)

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
          <ScrollControls pages={3} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <color attach="background" args={["#101010"]} />
            <fog attach="fog" args={['#101010', 5, 25]} />
            
            

            <Scroll html>
              <Header />
              
              
              <AboutText/>
             
              
             
            </Scroll>

            <Scroll>
              <Text textAlign="center" position={[-0.4, -0.2, 2]} font="./Anurati-Regular.otf" fontSize={1.5} curveSegments={16} maxWidth={10} > VENTURO
                <meshBasicMaterial />
              </Text>
              <Text textAlign="center" position={[-2, -7, 2]} font="./Anurati-Regular.otf" fontSize={1} curveSegments={16} > AERO
                <meshBasicMaterial />
              </Text>

              <Experience />

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
