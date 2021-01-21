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
                <div className="info">
                    <h1>Kristina Jovanovic</h1>
                    <h2>Web developer</h2>
                </div> : 
                <div className="info">
                    <h1>Kristina Jovanović</h1>
                    <h2>Web developer</h2>
                </div>
            }
        </div>
     );
}
 
export default AboutMe;