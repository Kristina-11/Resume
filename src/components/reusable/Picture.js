import { useEffect, useState } from "react";

const Picture = ({ src, text, from }) => {
    const [ alt, setAlt ] = useState('');
    const [ style, setStyle ] = useState('');

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

            case 'interests': 
            setAlt('Interests picture web development technology');
            break;
        }

        switch(from) {
            case 'main':
            setStyle('main-pic');
            break;

            case 'skills':
            setStyle('skills-pic');
            break;

            case 'projects':
            setStyle('projects-pic');
            break;

            case 'portfolio':
            setStyle('portfolio-pic');
            break;
        }
    }, [text, from])

    return ( 
        <div className={style}>
            <img src={src} 
            alt={alt} />
        </div>
     );
}
 
export default Picture;