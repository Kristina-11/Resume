import React from 'react'
import email from '../../img/email.png';
import linkedIn from '../../img/linedin.png';
import github from '../../img/github.png';
import resumeEn from '../../pdf/Resume.pdf';
import resumeSr from '../../pdf/ResumeSr.pdf';
import { motion } from 'framer-motion';
import { NameVariants, PositionVariants } from '../Variants';

const AboutMeDetails = ({ about }) => {
    const keywordsList = about.keywords;

    return (
        <motion.div className="about p-2 has-text-centered-tablet has-text-centered-mobile"
        initial={{opacity: 0}} 
        animate={{opacity: 1}}>
            <div className="">
                <motion.h1 
                className='is-size-1-tablet is-size-2-touch'
                initial="hidden" 
                animate="visible" 
                variants={NameVariants}>
                    { about.name }
                </motion.h1>
                <motion.h2
                className='is-size-4-tablet is-size-5-touch'
                initial="hidden" 
                animate="visible" 
                variants={PositionVariants}>
                    { about.position }
                </motion.h2>
                <span className='key-words'>
                    <ul className='is-inline p-2'>
                        { keywordsList.map((keyword) => {
                            return (
                                <li className='is-inline pr-3 is-block-tablet is-size-5' key={Math.random() * 10}>{ keyword }</li>
                            )
                        }) }
                    </ul>
                </span>
            </div>
            <div className="summary is-size-5 pt-5 pb-5">
                { about.summary }
            </div>
            <div className="links has-text-centered">
                <div className="p-4">
                    { about.text } <br/>
                    <strong>{ about.email }</strong>
                </div>
                <div className="is-inline">
                    <a href='kristina.jovanovic.code@gmail.com' onClick={(e) => {
                        e.preventDefault()
                        window.open('mailto:kristina.jovanovic.code@gmail.com')
                    }}>
                        <img src={email} alt='email icon' />
                    </a>
                </div>
                <div className="is-inline">
                    <a href='https://www.linkedin.com/in/kristina91jovanovic11'>
                        <img src={linkedIn} alt='linkedIn icon' />
                    </a>
                </div>
                <div className="is-inline">
                    <a href='https://github.com/Kristina-11/'>
                        <img src={github} alt='github icon' />
                    </a> 
                </div>
                <div className="has-text-centered">
                    { about.id === 1 ? 
                        <a href={resumeEn} target="_blank">Resume</a> 
                        :
                        <a href={resumeSr} target="_blank">Resume</a> 
                    } (PDF)
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMeDetails