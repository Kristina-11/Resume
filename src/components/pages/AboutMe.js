import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../../context/LanguageContext';
import AboutMeDetails from '../reusable/AboutMeDetails';
import { containerVariants } from "../Variants";

import src from '../../img/about.jpg';
import srcFull from '../../img/about-full.jpg';

const AboutMe = () => { 
    const { lang } = useContext(LanguageContext);

    const screenWidth = () => {
      let screenWidth = window.screen.width;
      return screenWidth;
    }
    
    const [ about ] = useState({
        id: 1,
        name: 'Kristina Jovanovic',
        position: 'Fullstack Web Developer',
        keywords: ['Observation', 'Deduction', 'Organization'],
        summary: 'Motivated web developer with a year of experience with .NET framework and many hours of experience as a freelancer. Diagnosed and solved some issues ( technical and personal :D), built a few websites as well as small projects. Open for work in office, remote or freelance. Determined to constantly learn and develop.',
        text: 'If you are in need of web developer you can contact me via Email or LinkedIn. And you can visit my GitHub profile. You can check out links below.',
        email: 'kristina.jovanovic.code@gmail.com',
    });

    const [ aboutSr ] = useState({
        id: 2,
        name: 'Kristina Jovanović',
        position: 'Fullstack Web Developer',
        keywords: ['Opservacija', 'Dedukcija', 'Organizacija'],
        summary: 'Motivisani web developer sa jednogodišnjim iskustvom u .NET-u i višemesečno iskustvo kao frilenser. Dijagnostikovala i rešila probleme ( tehničke i lične :D ), napravila nekoliko web sajtova kao i malih projekata. Otvorena za rad u firmi, na daljinu kao i frilens. Spremna na konstantno učenje i usavršavanje.',
        text: 'Potreban Vam je web developer? Možete me kontaktirati putem mejla ili LinkedIn-a. A moje projekte možete pogledati na GitHub-u. Linkovi ispod.',
        email: 'kristina.jovanovic.code@gmail.com',
    });

    return (
      <motion.div className="main-container is-widescreen is-fluid"
      variants={containerVariants} 
      initial="hidden"
      animate="visible">
        <div className="main height-container p-1">
          <div className="main-picture-div">
            <img src={src} className='main-picture' />
          {/* {
            screenWidth() <= 1023 ? 
            <img src={src} className='main-picture' /> : 
            <img src={srcFull} className='main-picture' /> 
          } */}
          </div>
          <div className="main-text">
            { lang === 'en' ? 
              <AboutMeDetails about={about} />
              : 
              <AboutMeDetails about={aboutSr} />
            }
          </div>
        </div>
      </motion.div>
    );
}
 
export default AboutMe;