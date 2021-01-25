import Picture from "../reusable/Picture";
import src from '../../img/skills.jpg';
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Skills = () => {
    const { lang } = useContext(LanguageContext);

    return ( 
        <div className="container">
            <Picture src={src} text='skills' />
            { lang === 'en' ? 
                <div className="skills">
                    <div className="tech">
                        <h1>Technical skills</h1>
                        <ul>
                            
                        </ul>
                    </div>
                    <div className="soft">
                        <h1>Management skills</h1>
                    </div>
                    <div className="tools">
                        <h1>Tools</h1>
                    </div>
                    <div className="lang">
                        <h1>Language</h1>
                    </div>
                </div>
            :
                <div className="skills">
                    <div className="tech">
                        <h1>Tehničke veštine</h1>
                    </div>
                    <div className="soft">
                        <h1>Menadzment</h1>
                    </div>
                    <div className="tools">
                        <h1>Alati</h1>
                    </div>
                    <div className="lang">
                        <h1>Jezik</h1>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default Skills;