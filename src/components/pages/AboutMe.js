import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import src from '../../img/about.jpg';
import srcFull from '../../img/about-full.jpg';
import Picture from '../reusable/Picture';
import AboutMeDetails from '../reusable/AboutMeDetails';
import { animate, AnimatePresence, motion } from 'framer-motion';
import { containerVariants } from "../Variants";

const AboutMe = () => { 
    const { lang } = useContext(LanguageContext);
    
    const [ about ] = useState({
        id: 1,
        name: 'Kristina Jovanovic',
        position: 'Fullstack Web Developer',
        keywords: ['Patience', 'Observation', 'Deduction', 'Perseverance', 'Organization'],
        summary: 'Motivated web developer with a year of experience with .NET framework and many hours of experience as a freelancer. Diagnosed and solved some issues ( technical and personal :D), built a few websites as well as small projects. Open for work in office, remote or freelance. Determined to constantly learn and develop.',
        text: 'If you are in need of web developer you can contact me via Email, LinkedIn or GitHub. You can check out links below.',
        email: 'kristina.jovanovic.code@gmail.com',
    });

    const [ aboutSr ] = useState({
        id: 2,
        name: 'Kristina Jovanović',
        position: 'Fullstack Web Developer',
        keywords: ['Strpljenje', 'Opservacija', 'Dedukcija', 'Istrajnost', 'Organizacija'],
        summary: 'Motivisani web developer sa jednogodišnjim iskustvom u .NET-u i višemesečno iskustvo kao frilenser. Dijagnostikovala i rešila probleme ( tehničke i lične :D ), napravila nekoliko web sajtova kao i malih projekata. Otvorena za rad u firmi, na daljinu kao i frilens. Spremna na konstantno učenje i usavršavanje.',
        text: 'Potreban Vam je web developer? Možete me kontaktirati putem mejla, LinkedIn-a ili GitHub-a. Linkovi ispod.',
        email: 'kristina.jovanovic.code@gmail.com',
    });

    const screenResolution = () => {
        let screenWidth = window.screen.width;
        return screenWidth;
    }

    return (
        <motion.div className="container about-container"
        variants={containerVariants} exit={{ x: '-200vw', transition: { duration: 3 } }}>
            { screenResolution() > 1000 ? 
                <Picture src={srcFull} text='about' from='main' /> : 
                <Picture src={src} text='about' from='main' />
            }
            { lang === 'en' ? 
                <AboutMeDetails about={about} />
                : 
                <AboutMeDetails about={aboutSr} />
            }
        </motion.div>
     );
}
 
export default AboutMe;