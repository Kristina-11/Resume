import Picture from "../reusable/Picture";
import src from '../../img/interests.jpeg';

const Interests = () => {
    return ( 
        <div className="container">
            <Picture src={src} text='interests' from='main'/>
        </div>
     );
}
 
export default Interests;