import { createContext, useContext } from "react";
import { useState } from "react";
const CostumizeContext = createContext({});

export const CostumizeProvider = (props) => {

   
    const [model, setModel] = useState(1)
    const[hatMale, setHatMale] = useState(1)
    const[jacketMale, setJacketMale] = useState(1)
    const[shoeMale, setShoeMale] = useState(1)
    const[pantsMale, setPantsMale] =useState(1)
    const[hatFemale, setHatFemale] = useState(1)
    const[jacketFemale, setJacketFemale] = useState(1)
    const[pantsFemale, setPantsFemale] =useState(1)
    const[shoeFemale, setShoeFemale] = useState(1)

    return <CostumizeContext.Provider 
    
    value={{
        model,
        setModel,
        hatMale,
        setHatMale,
        hatFemale,
        setHatFemale,
        jacketMale,
        setJacketMale,
        shoeMale,
        setShoeMale,
        pantsMale,
        setPantsMale,
        jacketFemale,
        setJacketFemale,
        pantsFemale,
        setPantsFemale,
        shoeFemale,
        setShoeFemale
        
    }}>
        {props.children}
    </CostumizeContext.Provider>

}
export const useCostumize = () => {
    const context = useContext(CostumizeContext)
    return context;
}