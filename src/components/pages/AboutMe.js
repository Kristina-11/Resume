import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import src from '../../img/about.jpg';
import Picture from '../reusable/Picture';

const AboutMe = () => { 
    const { lang } = useContext(LanguageContext);
    console.log(lang)

    return (
        <div className="container">
            <Picture src={src} text='about' />
            { lang === 'en' ? 
                <div className="about">
                    <h1>Kristina Jovanovic</h1>
                    <h2>Fullstack Web Developer</h2>
                    <span>
                        Patience
                        &bull; Observation
                        &bull; Deduction
                        &bull; Perseverance
                        &bull; Intuition
                    </span>
                    <div className="summary">
                        
                    </div>
                </div> : 
                <div className="about">
                    <h1>Kristina Jovanović</h1>
                    <h2>Fullstack Web Developer</h2>
                    <span>
                        Strpljenje
                        &bull; Opservacija
                        &bull; Dedukcija
                        &bull; Istrajnost
                        &bull; Intuicija
                    </span>
                </div>
            }
        </div>
     );
}
 
export default AboutMe;