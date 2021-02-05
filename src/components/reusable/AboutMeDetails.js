import React from 'react'
import email from '../../img/email.svg';
import linkedIn from '../../img/linedin.png';
import github from '../../img/github.png';
import resumeEn from '../../pdf/Resume.pdf';
import resumeSr from '../../pdf/ResumeSr.pdf';

const AboutMeDetails = ({ about }) => {
    const keywordsList = about.keywords;
    
    return (
        <div className="about">
            <div className="intro">
                <h1>{ about.name }</h1>
                <h2>{ about.position }</h2>
                <span>
                    <ul>
                        { keywordsList.map((keyword) => {
                            return (
                                <li key={Math.random() * 10}>{ keyword }</li>
                            )
                        }) }
                    </ul>
                </span>
            </div>
            <div className="summary">
                { about.summary }
            </div>
            <div className="links">
                <div className="links-text">
                    { about.text }
                </div>
                <div className="email">
                    <img src={email} width='20px' alt='email icon' />
                    <span>kristina.jovanovic.code@gmail.com</span>
                </div>
                <div className="linked-in">
                    <a href='www.linkedin.com/in/kristina91jovanovic11'>
                        <img src={linkedIn} width='20px' alt='linkedIn icon' />
                    </a>
                    <span>www.linkedin.com/in/kristina91jovanovic11</span>
                </div>
                <div className="github">
                    <a href='https://github.com/Kristina-11/'>
                        <img src={github} width='20px' alt='github icon' />
                    </a> 
                    <span>https://github.com/Kristina-11/</span>
                </div>
                <div className="resume">
                    { about.id === 1 ? 
                        <a href={resumeEn} target="_blank">Resume</a> 
                        :
                        <a href={resumeSr} target="_blank">Resume</a> 
                    }

                    <p>PDF Resume</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMeDetails