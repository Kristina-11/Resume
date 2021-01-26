const SkillsList = ({ tech, tools, org, language, lang }) => {
    console.log(language)
    const mapSkills = (skills) => {
        let list = skills.map((skill) => {
            return (
                <li key={Math.random() * 10}>{ skill }</li>
            )
        })

        return list;
    }

    return ( 
        <div className="skills">
            <div className="tech">
                <h1>{ lang.technical }</h1>
                <ul>
                    <h3>Frontend</h3>
                    { mapSkills(tech.frontend) }

                    <h3>Backend</h3>
                    { mapSkills(tech.backend) }
                    
                    <h3>Servers</h3>
                    { mapSkills(tech.servers) } 
                </ul>
            </div>
            <div className="tools">
                <h1>{ lang.usedTools }</h1>
                <ul>
                    { mapSkills(tools.collab) }

                    <h3>Editors</h3>
                    { mapSkills(tools.editors) }
                </ul>
            </div>
            <div className="soft">
                <h1>{ lang.menagment }</h1>
                <ul>
                    { mapSkills(org.org) }
                </ul>
            </div>
            <div className="lang">
                <h1>{ lang.language }</h1>
                <ul>
                    { mapSkills(language) }
                </ul>
            </div>
        </div>
     );
}
 
export default SkillsList;