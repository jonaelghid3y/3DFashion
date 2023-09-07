import { motion } from 'framer-motion';
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'




function Nav({ section, onSectionChange }) {

    const handleNavClick = (targetSection) => {
        onSectionChange(targetSection);
    };

    const navVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 3 } }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hover: { scale: 1.3, transition: { duration: 0.3 } },
        tap: { scale: 0.9, transition: { duration: 0.1 } }
    };


    const logoVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    };
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div id="Logodiv" variants={navVariants}>
                <motion.h1 variants={logoVariants}>Global.</motion.h1>
                <motion.img
                    style={{ width: '50px', height: '50px' }}
                    src='/Globeicon.pg.png'
                    variants={logoVariants}
                />
            </motion.div>

            <div id="länkContainer" >
                <motion.p
                    onClick={() => handleNavClick(1)}
                    className='navLänkar'
                    href="#"
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                >
                    Customize
                </motion.p>

                <motion.p
                    className='navLänkar'
                    href="#"
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => handleNavClick(2)}
                >
                    Collection
                </motion.p>

                <motion.p
                    className='navLänkar'
                    href="/https://www.youtube.com/"
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => handleNavClick(3)}
                >
                    Contact

                </motion.p>
            </div>
        </motion.nav>
    )
}

export default Nav;
