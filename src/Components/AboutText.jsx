import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillBriefcaseFill } from 'react-icons/bs';

import { useInView } from 'react-intersection-observer';

export default function AboutText() {

  const text = "VENTURO";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
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
        delay: 3.5
      }
    }
  };
  return (
    <div id='textDiv'>
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
              class="hero glitch layers"
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
          <motion.div variants={iconVariants}>
            <AiOutlineInstagram color='white' size={40} />
          </motion.div>
          <motion.div variants={iconVariants}>
            <AiOutlineYoutube color='white' size={40} />
          </motion.div>
          <motion.div variants={iconVariants}>
            <AiOutlineMail color='white' size={40} />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className='neonContainer'>
        <h1> AERO <br />
          武士</h1>

      </div>
      <div id="Aboutdiv">
        <h1>Venturo</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, fugit accusamus aliquam a architecto natus distinctio quasi ipsum. Exercitationem modi suscipit rem tempore libero, consequatur asperiores eius aspernatur soluta a?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, fugit accusamus aliquam a architecto natus distinctio quasi ipsum. Exercitationem modi suscipit rem tempore libero, consequatur asperiores eius aspernatur soluta a?
        </p>
        <button className="button">Read more</button>
      </div>

      <div id="Contactdiv" initial='hidden'   >
        <h1>About us</h1>
        <p>
          We fused fashion with the 3D magic of Three.js (via React Three Fiber) and Blender's modeling prowess to craft this immersive experience. Three.js brought the dynamic visuals, while Blender added depth and realism to our fashion elements. It's been a ride meshing these technologies to give you a fresh, multi-dimensional look at fashion.
          <br /><br />
          Curious for more? Dive into our portfolios to see our digital design adventures. Thanks for stopping by and exploring our world!
        </p>

        <h2 style={{ marginTop: "40px" }}>Arian X Frontendjoni</h2>
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

        </div>
      </div>
    </div>

  )
}
