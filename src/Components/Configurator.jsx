import React from 'react';
import { useCostumize } from '../Context/Costumize';
import { motion } from 'framer-motion';

const Configurator = ({section}) => {

    const slideInVariants = {
        hidden: {x: '200%', opacity:0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { x: { duration: 1 }, opacity: { duration: 3 } } 
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

    const generateConfigSection = (titleIconId, items, activeItem, setItem, ) => {
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
        <motion.div 
        className="configurator" 
        variants={slideInVariants} 
        initial="hidden" 
        animate={section === 1 ? "visible" : "hidden"}
    >
            <section className="configuratorSection">
            <div className="configuratorSectionTitle">
                Model
            </div>
            <div className="configuratorSectionValues">
                <div  className={`item ${model === 1 ? "item--active" : ""}`} onClick={()=> setModel(1)}>
                    <div className="itemDot" id="femaleIcon">
                    
                    </div>
                </div>
                <div  className={`item ${model === 2? "item--active" : ""}`} onClick={()=> setModel(2)} >
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
    );
};

export default Configurator;