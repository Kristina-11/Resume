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
    const [ more, setMore ] = useState(true);

    useEffect(() => {
        const moreLinks = document.querySelectorAll('.more-link');
        
        moreLinks.forEach((link) => {
            link.onclick = (e) => {
                if (e.target.innerText === 'MORE') {
                    setMore(false);
                    e.target.nextElementSibling.style.display = 'block';
                    e.target.innerText = 'LESS'
                } else {
                    setMore(true);
                    e.target.nextElementSibling.style.display = 'none';
                    e.target.innerText = 'MORE'
                }
            }
        })
    }, [more])
    
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
                <Picture src={pic} from='projects' />
            </a>
            <div className="project-details">
                { info.details }
                <div className="more-link">MORE</div>
                <div className="project-details-more">
                    { info.more }
                </div>
            </div>                
        </div>
     );
}
 
export default ProjectDetails;