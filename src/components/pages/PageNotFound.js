import { motion } from 'framer-motion';
import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext';
import { containerVariants } from "../Variants";

export default function PageNotFound() {
    const { lang } = useContext(LanguageContext);

    return (
        <motion.div className='page-not-found' variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
            {
                lang === 'en' ? 
                    <h1>Page doesn't exists!</h1>
                    :
                    <h1>Strana ne postoji!</h1>
            }
        </motion.div>
    )
}
