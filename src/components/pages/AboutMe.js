import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import src from '../../img/about.jpg';
import Picture from '../reusable/Picture';
import AboutMeDetails from '../reusable/AboutMeDetails';

const AboutMe = () => { 
    const { lang } = useContext(LanguageContext);

    const [ about ] = useState({
        id: 1,
        name: 'Kristina Jovanovic',
        position: 'Fullstack Web Developer',
        keywords: ['Patience', 'Observation', 'Deduction', 'Perseverance', 'Organization'],
        summary: 'Motivated web developer with a year of experience with .NET framework and many moons experience as a freelancer. Diagnosed and solved some issues ( technical and personal :D), built a few websites as well as small projects. Open for work in office, remote or freelance. Determined to constantly learn and develop.',
        text: 'If you are in need of web developer you can contact me via Email or LinkedIn:',
    });

    const [ aboutSr ] = useState({
        id: 2,
        name: 'Kristina Jovanović',
        position: 'Fullstack Web Developer',
        keywords: ['Strpljenje', 'Opservacija', 'Dedukcija', 'Istrajnost', 'Organizacija'],
        summary: 'Motivisani web developer sa jednogodišnjim iskustvom u .NET-u i višemesečno iskustvo kao frilenser. Dijagnostikovala i rešila probleme ( tehničke i lične :D ), napravila nekoliko web sajtova kao i malih projekata. Otvorena za rad u firmi, na daljinu kao i frilens. Spremna na konstantno učenje i usavršavanje.',
        text: 'Potreban Vam je web developer? Možete me kontaktirati preko mejla ili LinkedIn profila:',
    })

    return (
        <div className="container">
            <Picture src={src} text='about' />
            { lang === 'en' ? 
                <AboutMeDetails about={about} />
                : 
                <AboutMeDetails about={aboutSr} />
            }
        </div>
     );
}
 
export default AboutMe;