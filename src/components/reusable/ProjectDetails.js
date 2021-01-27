import Picture from "./Picture";
import blog from '../../img/projects/blog.PNG';
import managment from '../../img/projects/managment.PNG';
import weather from '../../img/projects/weather.PNG';
import dimitrijala from '../../img/projects/dimitrijala.PNG';
import library from '../../img/projects/library.PNG';
import calculator from '../../img/projects/calculator.PNG';
import gameRPS from '../../img/projects/game-rps.PNG';
import planets from '../../img/projects/planets.PNG';
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

            case 'library':
                setPic(library);
                break;

            case 'planets':
                setPic(planets);
                break;
            
            case 'gameRPS':
                setPic(gameRPS);
                break;
            
            case 'calculator':
                setPic(calculator);
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