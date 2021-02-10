import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

import dropdownImg from "../img/dropdown.png";

const Nav = () => {
    const { lang, changeLanguage } = useContext(LanguageContext);

    const [ dropdown, setDropdown ] = useState(false);
    const [ change, setChange ] = useState(false);
    
    const handleDropdown = (e) => {
        setDropdown(!dropdown);
    }

    const handleLanguageChange = (e) => {
        if (e.target.innerText === 'EN') {
            changeLanguage('sr')
            setChange(true)
            e.target.innerText = 'SR'
        } else {
            changeLanguage('en')
            setChange(false)
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
            <div className="nav-dropdown" onClick={handleDropdown}>
                <img src={dropdownImg} alt="Dropdown menu" />
            </div>
            { lang === 'en' ? 
                <motion.div className="nav-left nav-hide" animate={{ opacity: [ 0.5, 1], duration: 1 }}>
                    <NavLink exact to='/' activeClassName='focused'>About</NavLink>
                    <NavLink to='/skills' activeClassName='focused'>Skills</NavLink>
                    <NavLink to='/portfolio' activeClassName='focused'>Portfolio</NavLink>
                    <NavLink to='/work' activeClassName='focused'>Experience&Education</NavLink>
                    <NavLink to='/interests' activeClassName='focused'>Interests</NavLink>
                </motion.div> : 
                <motion.div className="nav-left nav-hide" animate={{ opacity: [ 0.5, 1], duration: 1 }}>
                    <NavLink exact to='/' activeClassName='focused'>Info</NavLink>
                    <NavLink to='/skills' activeClassName='focused'>Veštine</NavLink>
                    <NavLink to='/portfolio' activeClassName='focused'>Portfolio</NavLink>
                    <NavLink to='/work' activeClassName='focused'>Iskustvo&Edukacija</NavLink>
                    <NavLink to='/interests' activeClassName='focused'>Interesovanja</NavLink>
                </motion.div>
            }
            
            <div className="nav-right">
                <ul>
                    <motion.li className='active-lang' onClick={handleLanguageChange}
                    whileTap={{ scale: 1.2, duration: 1.5 }}>
                        EN
                    </motion.li>
                </ul>
            </div>
        </div>
     );
}
 
export default Nav;