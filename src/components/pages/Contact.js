import src from '../../img/contact.jpg';
import Picture from '../reusable/Picture';

const Contact = () => {
    return ( 
        <div className="container">
            <Picture src={src} text='contact' />
        </div>
     );
}
 
export default Contact;