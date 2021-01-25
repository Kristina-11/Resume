const SkillsList = (props) => {
    console.log(props)
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
            {/* <div className="tech">
                <h1>Technical skills</h1>
                <ul>
                    <h3>Frontend</h3>
                    <SkillsList skills={techSkills.frontend} />

                    <h3>Backend</h3>
                    <SkillsList skills={techSkills.backend} />
                    
                    <h3>Servers</h3>
                    <SkillsList skills={techSkills.servers} />
                </ul>
            </div>
            <div className="tools">
                <h1>Tools</h1>
                <ul>
                    <SkillsList skills={tools.collab} />

                    <h3>Editors</h3>
                    <SkillsList skills={tools.editors} />
                </ul>
            </div>
            <div className="soft">
                <h1>Management skills</h1>
                <ul>
                    <li>Agile methodologies - SCRUM</li>
                    <li>Jira</li>
                </ul>
            </div>
            <div className="lang">
                <h1>Language</h1>
                <ul>
                    <li>Serbian - Native</li>
                    <li>English - Advanced</li>
                </ul>
            </div> */}
        </div>
     );
}
 
export default SkillsList;