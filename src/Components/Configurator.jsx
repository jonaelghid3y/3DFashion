import React, { useState } from 'react';
import { useCostumize } from '../Context/Costumize';
import { motion, AnimatePresence } from 'framer-motion';

const Configurator = ({ section }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isConfiguratorVisible, setConfiguratorVisible] = useState(true);

    const slideInVariantsMobile = {
        hidden: { x: '100%', opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { x: { duration: 1 }, opacity: { duration: 0.5 } }
        },
        exit: { x: '100%', opacity: 0 }
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

    const generateConfigSection = (titleIconId, items, activeItem, setItem) => {
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
        <div className={`configuratorContainer ${isMobileMenuOpen ? 'open' : ''}`}>
            
            {/* Button to toggle configurator visibility, only on mobile and when section is 1 */}
            {section === 1 && (
                <button className="toggle-configurator-btn" onClick={() => setConfiguratorVisible(!isConfiguratorVisible)}>
                    {isConfiguratorVisible ? 'Hide Configurator' : 'Costumize'}
                </button>
            )}

            <AnimatePresence>
                {isConfiguratorVisible && section === 1 && (
                    <motion.div
                        className="configurator"
                        variants={slideInVariantsMobile}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <section className="configuratorSection">
                            <div className="configuratorSectionTitle">Model</div>
                            <div className="configuratorSectionValues">
                                <div className={`item ${model === 1 ? "item--active" : ""}`} onClick={() => setModel(1)}>
                                    <div className="itemDot" id="femaleIcon"></div>
                                </div>
                                <div className={`item ${model === 2 ? "item--active" : ""}`} onClick={() => setModel(2)}>
                                    <div className="itemDot" id="maleIcon"></div>
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
                )}
            </AnimatePresence>
        </div>
    );
};

export default Configurator;
