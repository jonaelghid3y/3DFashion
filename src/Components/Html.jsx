import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowDown } from 'react-icons/ai';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { useEffect, useState } from 'react'

import Header from './Header'
import { Center } from '@react-three/drei'

export default function AboutText({ section, onSectionChange }) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 9
      }
    },
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.3,
      transition: { duration: 0.1 },
    },
    tap: {
      scale: 0.95,
      filter: "brightness(0.8)",
      transition: { duration: 0.1 },
    }

  };
  const neonVariants = {
    hidden: { opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { x: { duration: 1 }, opacity: { duration: 3 } }
    }
  };
  const aboutVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };
  const [showHelpText, setShowHelpText] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowHelpText(false);
      }, 10000);

      return () => clearTimeout(timer);
  }, []);
  const fadeInOut = {
    animate: {
        opacity: [0.5, 1, 0.5],
        scale: [0.95, 1, 0.95],
        transition: {
            opacity: { repeat: Infinity, duration: 2, repeatType: 'loop' },
            scale: { repeat: Infinity, duration: 2, repeatType: 'loop' },
            times: [0, 0.5, 1]
        }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: 1 }
    }
};

  return (
    <>
      <Header section={section} onSectionChange={onSectionChange} />
      <AnimatePresence>
      {showHelpText && (
        <motion.div
          id='helpText'
          key="animatedDiv"
          variants={fadeInOut}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h2>Swipe once to change section </h2>
          <AiOutlineArrowDown size={30} />
        </motion.div>
      )}
    </AnimatePresence>

      <motion.div
        id="landingPageText"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div id="LandingPageName">
          {"VENTURO".split('').map((char, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="hero glitch layers"
              data-text={char}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <motion.h2
          style={{ fontSize: '30px' }}
          data-text="近設計"
          variants={itemVariants}
        >
          <span>近設計</span>
        </motion.h2>
        <motion.div id="iconDiv">
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a href='https://www.instagram.com/' target='blank'>
              <AiOutlineInstagram color='white' size={30} />
            </a>
          </motion.div>
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a href='https://www.youtube.com/' target='blank'>
              <AiOutlineYoutube color='white' size={30} />
            </a>
          </motion.div>
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a href="mailto:jonaelghidey@hotmail.com">
              <AiOutlineMail color='white' size={30} />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      <div id="configcontainer">
        <motion.div
          className='neonContainer'
          variants={neonVariants}
          initial="hidden"
          animate={section === 1 ? "visible" : "hidden"}
        >
          <h1> AERO <br />
            武士
          </h1>
        </motion.div>
      </div>
      <motion.div
        id="Aboutdiv"
        variants={aboutVariants}
        initial="hidden"
        animate={section === 2 ? "visible" : "hidden"}
      >
        <h1>Collection</h1>
        <p>
          At Venturo Fashion, we are sculpting the nexus between timeless elegance and groundbreaking 3D innovation. Our collections, with their clean, realistic designs, are now envisioned in vivid 3D landscapes before becoming tangible masterpieces. As technology and tradition intertwine, Venturo stands at the forefront, pioneering an exhilarating blend of style and digital artistry. <br /> <br /> Venture into the world of Venturo, where the essence of fashion is reimagined for tomorrow's world.
        </p>
      </motion.div>

      <motion.div
        id="Contactdiv"
        initial='hidden'
        variants={aboutVariants}
        animate={section === 3 ? "visible" : "hidden"}>
        <h1>About us</h1>
        <p>
          We've blended the distinctiveness of fashion with the immersive 3D capabilities of Three.js (utilizing React Three Fiber) and Blender's intricate modeling. The outcome is a captivating 3D web experience that stands out. The dynamic visuals come alive with Three.js, complemented by the realism Blender adds to the fashion components. Merging these tools has been an exciting process.  For a deeper dive, you can check out our portfolios. Appreciate your interest!
        </p>
        <h2>ARIAN x FRONTENDJONI</h2>

        <div id="contactcontainer">
          <motion.div className='contacticons'>
            <h5>Frontendjoni:</h5>
            <a href="https://www.linkedin.com/in/jonael-ghidey-51a780239/" target="_blank">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <AiFillLinkedin className='contacticons' />
              </motion.div>
            </a>
            <a href="https://github.com/jonaelghid3y" target="_blank">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <AiFillGithub className='contacticons' />
              </motion.div>
            </a>
            <a href="https://frontendjoni.vercel.app/" target="_blank">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <BsFillBriefcaseFill className='contacticons' />
              </motion.div>
            </a>
          </motion.div>

          <motion.div className='contacticons'>
            <h5>Arian:</h5>
            <a href="https://www.linkedin.com/in/arian-moeini-50167b265" target="_blank">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <AiFillLinkedin className='contacticons' />
              </motion.div>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </>
  )
}
