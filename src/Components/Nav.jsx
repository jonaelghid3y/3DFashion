import { motion } from 'framer-motion';
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3, staggerChildren: 1} }
};

const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hover: { scale: 1.3 },
    tapped: { scale: 0.9 }
};

const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

function Nav({ section }) {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div id="Logodiv" variants={navVariants}>
                <motion.h1 variants={logoVariants}>Global.</motion.h1>
                <motion.img 
                    style={{width: '50px', height: '50px'}}
                    src='/Globeicon.pg.png'
                    variants={logoVariants}
                />
            </motion.div>
            
            <motion.div variants={navVariants}>
                <motion.a href="" variants={linkVariants} whileHover="hover" whileTap="tapped">Customize</motion.a>
                <motion.a href="" variants={linkVariants} whileHover="hover" whileTap="tapped">Collection</motion.a>
                <motion.a href="" variants={linkVariants} whileHover="hover" whileTap="tapped">Contact</motion.a>
            </motion.div>
        </motion.nav>
    )
}

export default Nav;
