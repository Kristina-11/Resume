import { useContext, useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "../reusable/ProjectDetails";
import { LanguageContext } from "../../context/LanguageContext";
import { containerVariants } from "../Variants";
import github from '../../img/github.png';

const Portfolio = () => {
    const { lang } = useContext(LanguageContext);

    const [ links ] = useState([
        // {title: 'Inspirational Blog', name: 'blog', details: 'C# - .NET Core', link: 'http://kristina91119-001-site1.itempurl.com/', more: 'admin, password & testing@test, testing' },
        {title: 'Rent A Car', name: 'rent', details: 'React.js & Firebase', link: 'https://kristina-11.github.io/RentACar/', more: 'admin@test.com, test12345'},
        {title: 'Project Managment', name: 'managment', details: 'React.js, Redux & Firebase', link: 'https://projectmanagment-28660.web.app/', more: 'kakashi@test.com, testing12345'},
        {title: 'Weather App', name: 'weather', details: 'React.js & WeatherApp API', link: 'https://kristina-11.github.io/WeatherApp/', more: 'Made with React and APIs :D'},
        {title: 'Library App', name: 'library', details: 'Vanilla JavaScript + LocalStorage', link: 'https://kristina-11.github.io/Library/', more: ''},
        {title: 'Planets', name: 'planets', details: 'Vanilla JavaScript', link: 'https://kristina-11.github.io/WeightInUniverse/', more: ''},
        {title: 'Rock Paper Scissors', name: 'gameRPS', details: 'Vanilla JavaScript + Grid', link: 'https://kristina-11.github.io/Rock-Paper-Scissors/', more: ''},
        {title: 'Calculator', name: 'calculator', details: 'Vanilla JavaScript + Grid', link: 'https://kristina-11.github.io/Calculator/', more: ''},
        {title: 'Apartments Info Page', name: 'dimitrijala', details: 'CMS - Google Sites', link: 'https://www.dimitrijatucovica30.co.rs/', more: ''},
    ]);

    return ( 
        <motion.div className="portfolio-container" 
        variants={containerVariants}
        initial="hidden"
        animate="visible">
            {
                lang === 'en' ?
                    <div className="portfolio">
                        <div className="">
                            All the code of my projects can be found on my GitHub account. <br/>
                            There you will also find documentation for projects. <br/>
                            <b>NOTE: Projects can be viewed by clicking icon below or clicking on project picture.</b>
                        </div>
                    </div> :
                    <div className="portfolio">
                        <div className="">
                            Kod svih projekata možete pogledati na mom GitHub profilu.  <br/>
                            Tamo ćete naći i dokumentaciju projekata. <br/>
                            <b>NOTE: Projekte možete pogledati klikom na ikonu ispod ili klikom na sliku projekta.</b>
                        </div>
                    </div>
            }
            <div className="portfolio">
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
        </motion.div>
     );
}
 
export default Portfolio;