import Picture from "../reusable/Picture";
import src from '../../img/portfolio.jpg';
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import github from '../../img/github.png';
import ProjectDetails from "../reusable/ProjectDetails";

// Add tooltip for info about sites that require login details
const Portfolio = () => {
    const { lang } = useContext(LanguageContext);

    const [ links ] = useState([
        { name: 'blog', details: 'C# - .NET Core', link: 'http://kristina91119-001-site1.itempurl.com/' },
        { name: 'managment', details: 'React.js & Firebase', link: 'https://projectmanagment-28660.web.app/'},
        { name: 'weather', details: 'React.js & WeatherApp API', link: 'https://kristina-11.github.io/WeatherApp/'},
        { name: 'dimitrijala', details: 'CMS - Google Sites', link: 'https://www.dimitrijatucovica30.co.rs/'},
        { name: 'library', details: 'Vanilla JavaScript + LocalStorage', link: 'https://kristina-11.github.io/Library/'},
        { name: 'planets', details: 'Vanilla JavaScript', link: 'https://kristina-11.github.io/WeightInUniverse/'},
        { name: 'gameRPS', details: 'Vanilla JavaScript + Grid', link: 'https://kristina-11.github.io/Rock-Paper-Scissors/'},
        { name: 'calculator', details: 'Vanilla JavaScript + Grid', link: 'https://kristina-11.github.io/Calculator/'},
    ]);

    return ( 
        <div className="container">
            <Picture src={src} text='portfolio' />
            {
                lang === 'en' ?
                    <div className="portfolio">
                        <h1>Projects</h1>
                        <div className="summary">
                            All the code of my projects can be found on my GitHub account. <br/>
                            There you will also find documentation for projects. <br/>
                            Projects can be viewed by clicking icon below.
                        </div>
                    </div> :
                    <div className="portfolio">
                        <h1>Projekti</h1>
                        <div className="summary">
                            Kod svih projekata možete pogledati na mom GitHub profilu.  <br/>
                            Tamo ćete naći i dokumentaciju projekata. <br/>
                            Projekte možete pogledati klikom na sliku ispod.
                        </div>
                    </div>
            }
            <div className="links github">
                <a href='https://github.com/Kristina-11?tab=projects'>
                    <img src={github} width='30px' alt='github icon' />
                </a> 
            </div>
            <span className="projects">
                {
                    links && links.map((link) => {
                        return <ProjectDetails info={link} key={Math.random() * 10} />
                    })
                }
            </span>
        </div>
     );
}
 
export default Portfolio;