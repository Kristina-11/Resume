import Picture from "../reusable/Picture";
import src from '../../img/work.jpg';

const Experience = () => {
    return ( 
        <div className="container">
            <Picture src={src} text='experience' />
        </div>
     );
}
 
export default Experience;