import {createContext, useContext, useState} from "react";
import {db} from "../data/db";


//Contexts
const LangContext = createContext('en-US');
const LangUpdateContext = createContext();


//Hooks
export const useData = () => {
    return useContext(LangContext)
}
export const useLangUpdate = () => {
    return useContext(LangUpdateContext)
}


//Provider
export const LangProvider = ({children}) => {

    const [lang, setLang] = useState('en-US');

    const updateLang = () => {
        setLang(lang => lang === 'en-US' ? 'fr' : 'en-US');
    }

    const data = lang === 'en-US' ? db.en : db.fr

    return (
        <LangContext.Provider value={data}>
            <LangUpdateContext.Provider value={updateLang}>
                {children}
            </LangUpdateContext.Provider>
        </LangContext.Provider>
    )
}



