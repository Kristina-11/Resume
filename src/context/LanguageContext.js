import { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
    const [lang, setLang] = useState('en');

    const changeLanguage = (chosenLang) => {
        chosenLang !== 'en' ? setLang('sr') : setLang('en');
    }

    return ( 
        <LanguageContext.Provider value={{ lang, changeLanguage }}>
            { props.children }
        </LanguageContext.Provider>
     );
}
 
export default LanguageContextProvider;