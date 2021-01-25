import Picture from "../reusable/Picture";
import SkillsList from "../reusable/SkillsList";
import src from '../../img/skills.jpg';
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Skills = () => {
    const { lang } = useContext(LanguageContext);

    const [ techSkills ] = useState({
        frontend: ['HTML5&CSS3', 'JavaScript - React.js'],
        backend: ['C# - .NET, .NET Core'],
        servers: ['MSSQL Server', 'Firebase']
    });

    const [ tools ] = useState({
        collab: ['Git', 'GitHub', 'Bitbucket'],
        editors: ['Visual Studio IDE', 'VS Code']
    });

    const [ org ] = useState({
        org: ['Agile methodologies - SCRUM', 'Jira']
    });

    const [ speaking ] = useState({
        lan: ['Serbian - Native', 'English - Advanced']
    });

    return ( 
        <div className="container">
            <Picture src={src} text='skills' />
            { lang === 'en' ? 
                <SkillsList tech={techSkills} tools={tools} org={org} speaking={speaking} lang={lang} />
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