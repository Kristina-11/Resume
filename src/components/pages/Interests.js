import Picture from "../reusable/Picture";
import src from '../../img/interests.jpeg';
import beer from '../../img/interests/beer.png';
import journaling from '../../img/interests/journaling.png';
import pawlife from '../../img/interests/pawlife.png';
import pingpong from '../../img/interests/pingpong.png';
import sims from '../../img/interests/sims.png';
import swimming from '../../img/interests/swimming.png';
import { useState } from "react";

const Interests = () => {
    return ( 
        <div className="container interests-container">
            <div className="picture-show">
                <img src={beer} width='50px' />
                <img src={journaling} width='50px' />
                <img src={pawlife} width='50px' />
                <img src={pingpong} width='50px' />
                <img src={sims} width='50px' />
                <img src={swimming} width='50px' />
            </div>
            <div className="game">
                {/* Make a game here */}
            </div>
        </div>
     );
}
 
export default Interests;