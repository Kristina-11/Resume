import src from '../../img/contact.jpg';
import Picture from '../reusable/Picture';

const Contact = () => {
    return ( 
        <div className="contact">
            <Picture src={src} text='contact' />
        </div>
     );
}
 
export default Contact;