import React from 'react';
import { useCostumize } from '../Context/Costumize';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Configurator = ({ section }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            // Cleanup the event listener on component unmount
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const slideInVariantsDesktop = {
        hidden: { x: '200%', opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { x: { duration: 1 }, opacity: { duration: 3 } }
        },
        exit: {
            x: '200%',
            opacity: 0,
            transition: { x: { duration: 1 }, opacity: { duration: 3 } }
        }
    };
    const slideInVariantsMobile = {
        hidden: { y: '100%', opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { y: { duration: 1 }, opacity: { duration: 2 } }
        },
        exit: {
            y: '100%',
            opacity: 0,
            transition: { y: { duration: 1 }, opacity: { duration: 2 } }
        }
    };

    const {
        model,
        setModel,
        hatMale, setHatMale,
        jacketMale, setJacketMale,
        pantsMale, setPantsMale,
        shoeMale, setShoeMale,
        hatFemale, setHatFemale,
        jacketFemale, setJacketFemale,
        pantsFemale, setPantsFemale,
        shoeFemale, setShoeFemale,
    } = useCostumize();

    const generateConfigSection = (titleIconId, items, activeItem, setItem,) => {
        return (
            <section className="configuratorSection">
                <div className="configuratorSectionTitle" id={titleIconId}></div>
                <div className="configuratorSectionValues">
                    {items.map((item, index) => (
                        <div key={index} className={`item ${activeItem === index + 1 ? "item--active" : ""}`} onClick={() => setItem(index + 1)}>
                            <div className="itemLabel">{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        );
    };

    return (
        <div className="configuratorContainer">
            {section === 1 && (
                <button className="customize-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    Customize
                </button>
            )}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            className="configurator"
                            variants={isMobile ? slideInVariantsMobile : slideInVariantsDesktop}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <section className="configuratorSection">
                                <div className="configuratorSectionTitle">
                                    Model
                                </div>
                                <div className="configuratorSectionValues">
                                    <div className={`item ${model === 1 ? "item--active" : ""}`} onClick={() => setModel(1)}>
                                        <div className="itemDot" id="femaleIcon">
                                        </div>
                                    </div>
                                    <div className={`item ${model === 2 ? "item--active" : ""}`} onClick={() => setModel(2)} >
                                        <div className="itemDot" id="maleIcon">
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {model === 1 && (
                                <>
                                    {generateConfigSection("hatTitle", [{ label: "None" }, { label: "Scarf" }], hatFemale, setHatFemale)}
                                    {generateConfigSection("jackaTitle", [{ label: "Compression" }, { label: "Bomber" }], jacketFemale, setJacketFemale)}
                                    {generateConfigSection("byxTitle", [{ label: "Cargo pants" }, { label: "Jeans" }], pantsFemale, setPantsFemale)}
                                    {generateConfigSection("skoTitle", [{ label: "Airforce" }, { label: "Dunks" }], shoeFemale, setShoeFemale)}
                                </>
                            )}

                            {model === 2 && (
                                <>
                                    {generateConfigSection("hatTitle", [{ label: "None" }, { label: "Beenie" }], hatMale, setHatMale)}
                                    {generateConfigSection("jackaTitle", [{ label: "Hoodie" }, { label: "Sweater" }], jacketMale, setJacketMale)}
                                    {generateConfigSection("byxTitle", [{ label: "Leather" }, { label: "Cargo" }], pantsMale, setPantsMale)}
                                    {generateConfigSection("skoTitle", [{ label: "Boots" }, { label: "Dr.Martin" }], shoeMale, setShoeMale)}
                                </>
                            )}
                        </motion.div>

                    )
                }
            </AnimatePresence>
        </div>

    );
};

export default Configurator;