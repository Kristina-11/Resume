import { motion, useSpring } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import logo from "../img/code.png";
import serbianFlag from "../img/serbia.png";
import englandFlag from "../img/english.png";

import dropdownImg from "../img/dropdown.png";

const Nav = () => {
    const { lang, changeLanguage } = useContext(LanguageContext);

    const [ screen, setScreen ] = useState();
    const [ flag, setFlag ] = useState(false);

    // Mobile menu
    const handleDropdown = (e) => {
        const navbarMenu = document.querySelector('#nav-links');
        navbarMenu.classList.toggle('is-active');
    }

    const screenResolution = () => {
        let screenWidth = window.screen.width;
        setScreen(screenWidth)
        return screenWidth;
    }
    useEffect(() => {
        screenResolution();
    })
    
    // Language setting
    const handleLanguageChange = (e) => {
        if (lang === 'en') {
            changeLanguage('sr');
            setFlag(true);
         } else {
            changeLanguage('en');
            setFlag(false);
         }
        // if (e.target.innerText === 'SR') {
        //     changeLanguage('sr')
        //     e.target.innerText = 'EN'
        //     console.log(e.target)
        //     setFlag(true);
        // } else {
        //     changeLanguage('en')
        //     e.target.innerText = 'SR'
        //     console.log(e.target)
        //     setFlag(false);
        // }
    }

    return ( 
        <div className="navbar is-light has-shadow">
            <NavLink exact to='/'>
                <img src={logo} alt='Sites logo' style={{maxHeight: '80px'}} />
            </NavLink>

            <div className="navbar-brand">
                <a className="navbar-burger" id='burger' onClick={handleDropdown}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>

            <motion.div className="navbar-menu has-text-centered nav-active" id="nav-links"
            animate={ screen > 750 ?
             { opacity: [ 0.5, 1], duration: 0.5 } : 
             { }}>
            { lang === 'en' ? 
                <div className="navbar-start is-size-5">
                    <NavLink exact to='/' className='navbar-item' activeClassName='focused'>Home</NavLink>
                    <NavLink to='/skills' className='navbar-item' activeClassName='focused'>Skills</NavLink>
                    <NavLink to='/portfolio' className='navbar-item' activeClassName='focused'>Projects</NavLink>
                    <NavLink to='/work' className='navbar-item' activeClassName='focused'>Experience&Education</NavLink>
                    <NavLink to='/interests' className='navbar-item' activeClassName='focused'>Interests</NavLink>
                </div>
                 : 
                 <div className="navbar-start is-size-5">
                    <NavLink exact to='/' className='navbar-item' activeClassName='focused'>Home</NavLink>
                    <NavLink to='/skills' className='navbar-item' activeClassName='focused'>Veštine</NavLink>
                    <NavLink to='/portfolio' className='navbar-item' activeClassName='focused'>Projekti</NavLink>
                    <NavLink to='/work' className='navbar-item' activeClassName='focused'>Iskustvo&Edukacija</NavLink>
                    <NavLink to='/interests' className='navbar-item' activeClassName='focused'>Interesovanja</NavLink>
                </div>
            }
            </motion.div>

            <div className="navbar-start is-clickable" onClick={handleLanguageChange}>
                <motion.div className='navbar-item'
                whileTap={{ scale: 1.2, duration: 1.5 }}>
                    { flag ? <img src={englandFlag} /> : <img src={serbianFlag} /> }
                </motion.div>
            </div>
        </div>
     );
}
 
export default Nav;