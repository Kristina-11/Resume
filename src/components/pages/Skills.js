import Picture from "../reusable/Picture";
import src from '../../img/skills.jpg';

const Skills = () => {
    return ( 
        <div className="container">
            <Picture src={src} text='skills' />
        </div>
     );
}
 
export default Skills;