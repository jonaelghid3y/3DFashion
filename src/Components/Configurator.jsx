import {  useCostumize } from "../Context/Costumize";

const Configurator = () => {
    const {
      
        model,
        setModel
    }
     = useCostumize()


    return <div className="configurator">


        <section className="configuratorSection">
            <div className="configuratorSectionTitle">
                Hat
            </div>
            <div className="configuratorSectionValues">
                <div  className={`item ${model === 1 ? "item--active" : ""}`} onClick={()=> setModel(1)}>
                    <div className="itemLabel">
                        Ichi
                    </div>
                </div>
                <div  className={`item ${model === 2? "item--active" : ""}`} onClick={()=> setModel(2)} >
                    <div className="itemLabel">
                        Nii
                    </div>
                </div>
                <div  className={`item ${model === 3 ? "item--active" : ""}`} onClick={()=> setModel(3)}>
                    <div className="itemLabel">
                        San
                    </div>
                </div>
                <div  className={`item ${model === 4? "item--active" : ""}`} onClick={()=> setModel(4)} >
                    <div className="itemLabel">
                        Chi
                    </div>
                </div>
            </div>
        </section>
        <section className="configuratorSection">
            <div className="configuratorSectionTitle">
                Jacket
            </div>
            <div className="configuratorSectionValues">
                <div  className={`item ${model === 1 ? "item--active" : ""}`} onClick={()=> setModel(1)}>
                    <div className="itemLabel">
                        Ichi
                    </div>
                </div>
                <div  className={`item ${model === 2? "item--active" : ""}`} onClick={()=> setModel(2)} >
                    <div className="itemLabel">
                        Nii
                    </div>
                </div>
                <div  className={`item ${model === 3 ? "item--active" : ""}`} onClick={()=> setModel(3)}>
                    <div className="itemLabel">
                        San
                    </div>
                </div>
                <div  className={`item ${model === 4? "item--active" : ""}`} onClick={()=> setModel(4)} >
                    <div className="itemLabel">
                        Chi
                    </div>
                </div>
            </div>
        </section>
        <section className="configuratorSection">
            <div className="configuratorSectionTitle">
                Pants
            </div>
            <div className="configuratorSectionValues">
                <div  className={`item ${model === 1 ? "item--active" : ""}`} onClick={()=> setModel(1)}>
                    <div className="itemLabel">
                        Ichi
                    </div>
                </div>
                <div  className={`item ${model === 2? "item--active" : ""}`} onClick={()=> setModel(2)} >
                    <div className="itemLabel">
                        Nii
                    </div>
                </div>
                <div  className={`item ${model === 3 ? "item--active" : ""}`} onClick={()=> setModel(3)}>
                    <div className="itemLabel">
                        San
                    </div>
                </div>
                <div  className={`item ${model === 4? "item--active" : ""}`} onClick={()=> setModel(4)} >
                    <div className="itemLabel">
                        Chi
                    </div>
                </div>
            </div>
        </section>
        <section className="configuratorSection">
            <div className="configuratorSectionTitle">
                Shoes
            </div>
            <div className="configuratorSectionValues">
                <div  className={`item ${model === 1 ? "item--active" : ""}`} onClick={()=> setModel(1)}>
                    <div className="itemLabel">
                        Ichi
                    </div>
                </div>
                <div  className={`item ${model === 2? "item--active" : ""}`} onClick={()=> setModel(2)} >
                    <div className="itemLabel">
                        Nii
                    </div>
                </div>
                <div  className={`item ${model === 3 ? "item--active" : ""}`} onClick={()=> setModel(3)}>
                    <div className="itemLabel">
                        San
                    </div>
                </div>
                <div  className={`item ${model === 4? "item--active" : ""}`} onClick={()=> setModel(4)} >
                    <div className="itemLabel">
                        Chi
                    </div>
                </div>
            </div>
        </section>
        
      



    </div>;

};
export default Configurator;