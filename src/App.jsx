import './App.css'
import { CostumizeProvider } from './Context/Costumize'
import Configurator from './Components/Configurator'
import Experience from './Components/Experience'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Text, ScrollControls, Scroll } from '@react-three/drei'
import { ScrollManager } from './Components/ScrollManager'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutText from './Components/Html'


function App() {
  const [section, setSection] = useState(0)
  const [showLoader, setShowLoader] = useState(true);

  const loaderVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 4000);
  }, []);

  return (
    <CostumizeProvider>
      <div className='App'>
        <AnimatePresence>
          {showLoader && (
            <motion.div
              id="custom__ripple_Loader"
              className="box"
              initial="visible"
              animate="visible"
              exit="hidden"
              variants={loaderVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="ripple__rounds"></div>
            </motion.div>
          )}
        </AnimatePresence>
        <Configurator section={section} />
        <Canvas className='touch'  >
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <color attach="background" args={["#101010"]} />
            <fog attach="fog" args={['#101010', 5, 25]} />
            <Scroll html>
              <AboutText section={section} onSectionChange={setSection} />
            </Scroll>
            <Scroll >
              <Experience section={section} />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </CostumizeProvider>
  )
}

export default App
