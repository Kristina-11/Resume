import { useEffect, useState } from "react";

const Picture = ({ src, text }) => {
    const [ alt, setAlt ] = useState('');

    useEffect(() => {
        switch(text) {
            case 'about':
            setAlt('Profile picture web developer Kristina Jovanovic');
            break;

            case 'skills':
            setAlt('Picture that represents skills in web dev');
            break;

            case 'experience':
            setAlt('Picture for web developers experience');
            break;

            case 'portfolio':
            setAlt('Picture of web developer portfolio');
            break;

            case 'contact': 
            setAlt('Contact me funny picture web development technology');
            break;
        }
    }, [alt])

    return ( 
        <div className="pic">
            <img src={src} 
            alt={alt}
            width='300px' />
        </div>
     );
}
 
export default Picture;