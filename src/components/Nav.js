import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

import dropdownImg from "../img/dropdown.png";

const Nav = () => {
    const { lang, changeLanguage } = useContext(LanguageContext);

    const [ dropdown, setDropdown ] = useState(false);
    
    const handleDropdown = (e) => {
        setDropdown(!dropdown);
    }

    const handleLanguageChange = (e) => {
        if (e.target.innerText === 'EN') {
            changeLanguage('sr')
            e.target.innerText = 'SR'
        } else {
            changeLanguage('en')
            e.target.innerText = 'EN'
        }
    }


    // Effect that tracks changes for dropdown menu
    useEffect(() => {
        const dropdownElement = document.querySelector('.nav-left');

        if (dropdown) {
            dropdownElement.classList.add('nav-show')
            dropdownElement.classList.remove('nav-hide')
        } else {
            dropdownElement.classList.add('nav-hide')
            dropdownElement.classList.remove('nav-show')
        }

        window.onclick = (e) => {
            if (!e.target.matches('.nav-dropdown') && dropdown === true){
                setDropdown(false)
            }
        }

    },[dropdown])

    return ( 
        <div className="nav">
            <div className="nav-dropdown" onClick={handleDropdown} >
                <img src={dropdownImg} alt="Dropdown menu" />
            </div>
            { lang === 'en' ? 
                <div className="nav-left nav-hide">
                    <Link to='/'>About</Link>
                    <Link to='/skills'>Skills</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/work'>Experience&Education</Link>
                    <Link to='/interests'>Interests</Link>
                </div> : 
                <div className="nav-left nav-hide">
                    <Link to='/'>Info</Link>
                    <Link to='/skills'>Veštine</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/work'>Iskustvo&Edukacija</Link>
                    <Link to='/interests'>Interesovanja</Link>
                </div>
            }
            
            <div className="nav-right">
                <ul>
                    <li className='active-lang' onClick={handleLanguageChange}>EN</li>
                    {/* <li className='inactive-lang' onClick={handleLanguageChange}>SR</li> */}
                </ul>
            </div>
        </div>
     );
}
 
export default Nav;