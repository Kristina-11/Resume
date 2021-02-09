import Picture from "../reusable/Picture";
import src from '../../img/interests.jpeg';
import beer from '../../img/interests/beer.png';
import journaling from '../../img/interests/journaling.png';
import pawlife from '../../img/interests/pawlife.png';
import pingpong from '../../img/interests/pingpong.png';
import sims from '../../img/interests/sims.png';
import swimming from '../../img/interests/swimming.png';
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Interests = () => {
    const { lang } = useContext(LanguageContext);

    return ( 
        <div className="container interests-container">
            {
                lang === 'en' ? 
                <h1>Page in construction</h1> :
                <h1>Strana u pripremi</h1>
            }
            <div className="picture-show">
                {/* <img src={beer} width='50px' />
                <img src={journaling} width='50px' />
                <img src={pawlife} width='50px' />
                <img src={pingpong} width='50px' />
                <img src={sims} width='50px' />
                <img src={swimming} width='50px' /> */}
            </div>
            <div className="game">
                {/* Make a game here */}
            </div>
        </div>
     );
}
 
export default Interests;