import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import src from '../../img/about.jpg';
import email from '../../img/email.svg';
import linkedIn from '../../img/linedin.png';
import Picture from '../reusable/Picture';
import resume from '../../pdf/Resume.pdf';

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
                        <p>Motivated web developer with a year of experience with .NET framework and many moons experience as a freelancer. Diagnosed and solved some issues ( technical and personal :D), built a few websites as well as small projects.</p>
                        <p>Determined to constantly learn and develop.</p>
                    </div>
                    <div className="links">
                        <div className="links-text">
                            If you are in need of web developer you can contact me via Email or LinkedIn:
                        </div>
                        <div className="email">
                            <img src={email} width='20px' alt='email icon' />
                            <span>kristina.jovanovic.code@gmail.com</span>
                        </div>
                        <div className="linked-in">
                            <a href='www.linkedin.com/in/kristina91jovanovic11'>
                                <img src={linkedIn} width='20px' alt='linkedIn icon' />
                            </a>
                            <span>www.linkedin.com/in/kristina91jovanovic11</span>
                        </div>
                        <div className="resume">
                            <a href={resume} target="_blank">Resume</a>
                            <p>PDF version resume</p>
                        </div>
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
                    <div className="summary">
                        <p>Motivated web developer with a year of experience with .NET framework and many moons experience as a freelancer. Diagnosed and solved some issues ( technical and personal :D), built a few websites as well as small projects.</p>
                        <p>Determined to constantly learn and develop.</p>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default AboutMe;