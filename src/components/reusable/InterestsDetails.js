import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import beer from '../../img/interests/beer.png';
import journaling from '../../img/interests/journaling.png';
import pawlife from '../../img/interests/pawlife.png';
import pingpong from '../../img/interests/pingpong.png';
import sims from '../../img/interests/sims.png';
import swimming from '../../img/interests/swimming.png';

const InterestsDetails = ({interests}) => {
    console.log(interests)
    return ( 
        <div className="picture-show">
            <div className='icon'>
                <img src={pingpong} width='100px' className='intersts-icon'/>
                <div>{ interests[0].pingpong }</div>
            </div>
            <div className='icon'>
                <img src={swimming} width='100px' className='intersts-icon'/>
                <div>{ interests[0].swimming }</div>
            </div>
            <div className='icon'>
                <img src={pawlife} width='100px' className='intersts-icon' />
                <div>{ interests[0].pawlife }</div>
            </div>
            <div className='icon'>
                <img src={beer} width='100px' className='intersts-icon'/>
                <div>{ interests[0].beer }</div>
            </div>
            <div className='icon'>
                <img src={sims} width='100px' className='intersts-icon'/>
                <div>{ interests[0].sims }</div>
            </div>
            <div className='icon'>
                <img src={journaling} width='100px' className='intersts-icon' />
                <div>{ interests[0].journaling }</div>
            </div>
        </div>
     );
}
 
export default InterestsDetails;