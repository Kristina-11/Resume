import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

const Nav = () => {
    const { lang, changeLanguage } = useContext(LanguageContext);

    return ( 
        <div className="nav">
            { lang === 'en' ? 
                <div className="nav-left">
                    <Link to='/'>About</Link>
                    <Link to='/skills'>Skills</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/work'>Experience&Education</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/interests'>Interests</Link>
                </div> : 
                <div className="nav-left">
                    <Link to='/'>Info</Link>
                    <Link to='/skills'>Veštine</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/work'>Iskustvo&Edukacija</Link>
                    <Link to='/contact'>Kontakt</Link>
                    <Link to='/interests'>Interesovanja</Link>
                </div>
            }
            
            <div className="nav-right">
                <ul>
                    <li onClick={() => changeLanguage('en')}>EN</li>
                    <li onClick={() => changeLanguage('sr')}>SR</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Nav;