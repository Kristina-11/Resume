import React from 'react'
import email from '../../img/email.png';
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
                    <a href='kristina.jovanovic.code@gmail.com' onClick={() => window.open('mailto:kristina.jovanovic.code@gmail.com')}>
                        <img src={email} alt='email icon' />
                    </a>
                </div>
                <div className="linked-in">
                    <a href='https://www.linkedin.com/in/kristina91jovanovic11'>
                        <img src={linkedIn} alt='linkedIn icon' />
                    </a>
                    {/* <span>www.linkedin.com/in/kristina91jovanovic11</span> */}
                </div>
                <div className="github">
                    <a href='https://github.com/Kristina-11/'>
                        <img src={github} alt='github icon' />
                    </a> 
                    {/* <span>https://github.com/Kristina-11/</span> */}
                </div>
                <div className="resume">
                    { about.id === 1 ? 
                        <a href={resumeEn} target="_blank">Resume</a> 
                        :
                        <a href={resumeSr} target="_blank">Resume</a> 
                    } (PDF)
                </div>
            </div>
        </div>
    )
}

export default AboutMeDetails