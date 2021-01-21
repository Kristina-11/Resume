import Picture from "../reusable/Picture";
import src from '../../img/portfolio.jpg';

const Portfolio = () => {
    return ( 
        <div className="portfolio">
            <Picture src={src} text='portfolio' />
        </div>
     );
}
 
export default Portfolio;