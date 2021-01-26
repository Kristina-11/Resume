import Picture from "../reusable/Picture";
import src from '../../img/portfolio.jpg';
import blog from '../../img/projects/blog.PNG';
import managment from '../../img/projects/managment.PNG';
import weather from '../../img/projects/weather.PNG';
import dimitrijala from '../../img/projects/dimitrijala.PNG';
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import github from '../../img/github.png';

const Portfolio = () => {
    const { lang } = useContext(LanguageContext);

    return ( 
        <div className="container">
            <Picture src={src} text='portfolio' />
            {
                lang === 'en' ?
                    <div className="portfolio">
                        <h1>Projects</h1>
                        <div className="summary">
                            All the code of my projects can be found on my GitHub account.  <br/>
                        </div>
                    </div> :
                    <div className="portfolio">
                        <h1>Projekti</h1>
                        <div className="summary">
                            Kod svih projekata možete pogledati na mom GitHub profilu.  <br/>
                        </div>
                    </div>
            }
            <div className="links">
                <a href='https://github.com/Kristina-11?tab=projects'>
                    <img src={github} width='30px' alt='github icon' />
                </a> 
            </div>
            <span className="projects">
                <div className="project">
                    <a href='http://kristina91119-001-site1.itempurl.com/' target='_blank'>
                        <Picture src={blog} />
                    </a>
                    <div className="project-details">
                        Made with C# - .NET Core 
                        <div className="project-details-more">
                            For testing site use credidentals: <br/>
                            ADMIN: admin, password <br/>
                            USER: testing@test, testing <br/>

                            <i>Or feel free to registar and test that part, it does not include activation link.</i>
                        </div> 
                    </div>                
                </div>

                <div className="project">
                    <a href='https://projectmanagment-28660.web.app/' target='_blank'>
                        <Picture src={managment} />
                    </a>
                    <div className="project-details">
                        Made with React.js & Firebase
                        <div className="project-details-more">
                        You can test it as a user: <br/>
                        - kakashi@test.com <br/>
                        - testing12345 <br/>
                        <b>NOTE: Only logged in users can see all projects.</b> 
                        </div> 
                    </div>                
                </div>

                <div className="project">
                    <a href='https://kristina-11.github.io/WeatherApp/' target='_blank'>
                        <Picture src={weather} />
                    </a>
                    <div className="project-details">
                        Made with React.js & WeatherApp API
                    </div>                
                </div>

                <div className="project">
                    <a href='https://www.dimitrijatucovica30.co.rs/' target='_blank'>
                        <Picture src={dimitrijala} />
                    </a>
                    <div className="project-details">
                        Made with CMS
                    </div>                
                </div>
            </span>
        </div>
     );
}
 
export default Portfolio;