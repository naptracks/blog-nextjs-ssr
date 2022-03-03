import {createContext, useContext, useState} from "react";
import {db} from "../data/db";


//Contexts
const LangContext = createContext('en-US');
const LangUpdateContext = createContext();
const DataContext = createContext();

//Hooks
export const useData = () => {
    return useContext(DataContext)
}
export const useLangUpdate = () => {
    return useContext(LangUpdateContext)
}


//Provider
export const LangProvider = ({children}) => {

    const [lang, setLang] = useState('en-US');
    const updateLang = (locale) => {
        setLang(locale);
    }
    const data = lang === 'en-US' ? db.en : db.fr

    return (
        <LangContext.Provider value={lang}>
            <DataContext.Provider value={data}>
                <LangUpdateContext.Provider value={updateLang}>
                    {children}
                </LangUpdateContext.Provider>
            </DataContext.Provider>
        </LangContext.Provider>
    )
}



