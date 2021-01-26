import Picture from "./Picture";
import blog from '../../img/projects/blog.PNG';
import managment from '../../img/projects/managment.PNG';
import weather from '../../img/projects/weather.PNG';
import dimitrijala from '../../img/projects/dimitrijala.PNG';
import { useEffect, useState } from "react";

const ProjectDetails = ({ info }) => {
    const [ pic, setPic ] = useState('');
    
    useEffect(() => {
        switch(info.name) {
            case 'blog':
                setPic(blog);
                break;

            case 'managment':
                setPic(managment);
                break;

            case 'weather':
                setPic(weather);
                break;

            case 'dimitrijala':
                setPic(dimitrijala);
                break;
        }
    }, [info])

    return ( 
        <div className="project">
            <a href={info.link} target='_blank'>
                <Picture src={pic} />
            </a>
            <div className="project-details">
                { info.details }
            </div>                
        </div>
     );
}
 
export default ProjectDetails;