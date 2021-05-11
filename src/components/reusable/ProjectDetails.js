import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Picture from "./Picture";
import blog from '../../img/projects/blog.PNG';
import managment from '../../img/projects/managment.PNG';
import weather from '../../img/projects/weather.PNG';
import dimitrijala from '../../img/projects/dimitrijala.PNG';
import library from '../../img/projects/library.PNG';
import calculator from '../../img/projects/calculator.PNG';
import gameRPS from '../../img/projects/game-rps.PNG';
import planets from '../../img/projects/planets.PNG';
import rent from '../../img/projects/rent.PNG';
import dream from '../../img/projects/dream.PNG';

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

            case 'rent':
                setPic(rent);
                break;

            case 'dream':
                setPic(dream);
                break;
        }
    }, [info])

    return ( 
        <div className="project">
          <h1 className='is-size-4 project-title'>{ info.title }</h1>
          <a href={info.link} target='_blank'>
              <Picture src={pic} from='projects' />
          </a>
          <div className="project-details">
              { info.details } <br/>
              { info.more }
          </div>                
        </div>
     );
}
 
export default ProjectDetails;