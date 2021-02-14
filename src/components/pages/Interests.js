import Picture from "../reusable/Picture";
import src from '../../img/interests.jpeg';
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { containerVariants } from "../Variants";
import { motion } from "framer-motion";
import InterestsDetails from "../reusable/InterestsDetails";

const Interests = () => {
    const { lang } = useContext(LanguageContext);
    const [ clicked, setClicked ] = useState(false);

    const interests = useState({
        pingpong: 'This is my game :D',
        swimming: 'More like floating...',
        beer: 'On a sunny day or winter day...or any day :D',
        pawlife: 'Life with a dog. Or any animal. <3',
        journaling: 'Keeping things neat and making time for everything.',
        sims: 'The Sims - not only killing sims :D'
    })

    const interesovanja = useState({
        pingpong: 'Moja igra :D',
        swimming: 'Više kao plutanje...',
        beer: 'Po toplom danu ili hladnom danu... bilo kom danu :D',
        pawlife: 'Život sa psom je ispunjen život. Sa bilo kojom životinjom. <3',
        journaling: 'Organizacija i pravljenje vremena za sve.',
        sims: 'The Sims - nije zbog ubijanja simova :D'
    })

    useEffect(() => {
        const icons = document.querySelectorAll('.intersts-icon');

        icons.forEach((icon) => {
            icon.onclick = (e) => {
                setClicked(!clicked);
            }
        })
    }, [clicked])

    return ( 
        <motion.div className="container interests-container" variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
            {
                lang === 'en' ?
                <InterestsDetails interests={interests} /> :
                <InterestsDetails interests={interesovanja} />
            }
        </motion.div>
     );
}
 
export default Interests;