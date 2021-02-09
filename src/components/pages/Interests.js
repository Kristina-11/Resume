import Picture from "../reusable/Picture";
import src from '../../img/interests.jpeg';
import beer from '../../img/interests/beer.png';
import journaling from '../../img/interests/journaling.png';
import pawlife from '../../img/interests/pawlife.png';
import pingpong from '../../img/interests/pingpong.png';
import sims from '../../img/interests/sims.png';
import swimming from '../../img/interests/swimming.png';
import trekking from '../../img/interests/trekking.png';
import { useState } from "react";

const Interests = () => {
    // Change this
    return ( 
        <div className="container interests-container">
            <Picture src={src} text='interests' from='interests'/>
            <div className="picture-show">
                <div className='pic-interests'>
                    <img src={beer} width='50px' />
                    <input type='range' className='range' min='0' max='10' value='8' disabled />
                </div>

                <div className='pic-interests'>
                    <img src={journaling} width='50px' />
                    <input type='range' className='range' min='0' max='10' value='8' disabled />
                </div>

                <div className='pic-interests'>
                    <img src={pawlife} width='50px' />
                    <input type='range' className='range' min='0' max='10' value='10' disabled />
                </div>
            </div>
        </div>
     );
}
 
export default Interests;