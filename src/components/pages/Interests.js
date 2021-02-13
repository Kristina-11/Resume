import Picture from "../reusable/Picture";
import src from '../../img/interests.jpeg';
import beer from '../../img/interests/beer.png';
import journaling from '../../img/interests/journaling.png';
import pawlife from '../../img/interests/pawlife.png';
import pingpong from '../../img/interests/pingpong.png';
import sims from '../../img/interests/sims.png';
import swimming from '../../img/interests/swimming.png';
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { containerVariants } from "../Variants";
import { motion } from "framer-motion";

const Interests = () => {
    const { lang } = useContext(LanguageContext);

    const interestsVariants = {
        hidden: {
            x: '-200vw'
        },
        visible: {
            x: '0',
            transition: {
                duration: 2,
                type: 'spring'
            }
        },
        exit: {
            x: '1000wv',
            transition: {
                duration: 2,
                type: 'spring'
            }
        }
    }

    return ( 
        <motion.div className="container interests-container" variants={containerVariants}
        initial="hidden"
        animate="visible">
            <div className="picture-show">
                {
                    lang === 'en' ?
                    <h1>Page in construction</h1> :
                    <h1>Strana u pripremi</h1>
                }
            </div>
        </motion.div>
     );
}
 
export default Interests;