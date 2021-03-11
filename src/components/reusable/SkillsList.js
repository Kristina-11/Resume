const SkillsList = ({ tech, tools, org, language, lang }) => {
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
            <div className="skill tech">
                <h1 className='is-size-2'>{ lang.technical }</h1>
                <ul>
                    <h3 className='is-size-3'>Frontend</h3>
                    { mapSkills(tech.frontend) }

                    <h3 className='is-size-3'>Backend</h3>
                    { mapSkills(tech.backend) }
                    
                    <h3 className='is-size-3'>Servers</h3>
                    { mapSkills(tech.servers) } 
                </ul>
            </div>
            <div className="skill tools">
                <h1 className='is-size-2'>{ lang.usedTools }</h1>
                <ul>
                    { mapSkills(tools.collab) }

                    <h3 className='is-size-3'>Editors</h3>
                    { mapSkills(tools.editors) }
                </ul>
            </div>
            <div className="skill soft">
                <h1 className='is-size-2'>{ lang.menagment }</h1>
                <ul>
                    { mapSkills(org.org) }
                </ul>
            </div>
            <div className="skill lang">
                <h1 className='is-size-2'>{ lang.language }</h1>
                <ul>
                    { mapSkills(language) }
                </ul>
            </div>
        </div>
     );
}
 
export default SkillsList;