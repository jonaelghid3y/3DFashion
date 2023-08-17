import React from 'react';
import { useCostumize } from '../Context/Costumize';

const Configurator = () => {
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

    const generateConfigSection = (title, items, activeItem, setItem) => {
        return (
            <section className="configuratorSection">
                <div className="configuratorSectionTitle">{title}</div>
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
        <div className="configurator">
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
                    {generateConfigSection("Hat", [{ label: "None" }, { label: "Scarf" }], hatFemale, setHatFemale)}
                    {generateConfigSection("Jacket", [{ label: "Broly Sweater" }, { label: "Jeans vest" }], jacketFemale, setJacketFemale)}
                    {generateConfigSection("Pants", [{ label: "Cargo pants" }, { label: "Jeans" }], pantsFemale, setPantsFemale)}
                    {generateConfigSection("Shoe", [{ label: "Nike Airforce" }, { label: "Nike Dunks" }], shoeFemale, setShoeFemale)}
                </>
            )}

            {model === 2 && (
                <>
                    {generateConfigSection("Hat", [{ label: "None" }, { label: "Beenie" }], hatMale, setHatMale)}
                    {generateConfigSection("Jacket", [{ label: "Hoodie" }, { label: "Sweater" }], jacketMale, setJacketMale)}
                    {generateConfigSection("Pants", [{ label: "Byxa 1" }, { label: "Cargo" }], pantsMale, setPantsMale)}
                    {generateConfigSection("Shoe", [{ label: "Boots" }, { label: "Dr.Martin" }], shoeMale, setShoeMale)}
                </>
            )}
        </div>
    );
};

export default Configurator;