import src from '../../img/about.jpg';
import Picture from '../reusable/Picture';

const AboutMe = () => {    
    return (
        <div className="about">
            <Picture src={src} text='about' />
        </div>
     );
}
 
export default AboutMe;