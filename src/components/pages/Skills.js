import Picture from "../reusable/Picture";
import SkillsList from "../reusable/SkillsList";
import src from '../../img/skills.jpg';
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Skills = () => {
    const { lang } = useContext(LanguageContext);

    const [ techSkills ] = useState({
        frontend: ['HTML5&CSS3', 'JavaScript', 'React.js'],
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

    const [ language ] = useState({
        lan: ['Serbian - Native', 'English - Advanced'],
        lanSr: ['Srpski - Maternji', 'Engleski - Napredni']
    });

    const [ titles ] = useState({
        en: {
            technical: 'Technical skills',
            usedTools: 'Tools',
            menagment: 'Soft skills',
            language: 'Language'
        },
        sr: {
            technical: 'Tehničke veštine',
            usedTools: 'Alati',
            menagment: 'Organizacija',
            language: 'Jezik'
        }
    });

    return ( 
        <div className="container">
            <Picture src={src} text='skills' />
            { lang === 'en' ? 
                <SkillsList tech={techSkills} tools={tools} org={org} language={language.lan} lang={titles.en} />
            :
                <SkillsList tech={techSkills} tools={tools} org={org} language={language.lanSr} lang={titles.sr} />
            }
        </div>
     );
}
 
export default Skills;