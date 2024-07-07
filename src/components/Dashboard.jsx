import React from 'react'
import '../css/DashboardStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faYinYang } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import resume from '../assets/Prakashraj_J_Resume.pdf';
import avt1 from '../assets/Avatar1.png'

import { useState } from 'react'

function Dashboard() {

    const [isToggle, setIsToggle] = useState(false);

    const changeTheme = () => {
        setIsToggle(!isToggle);

        console.log(isToggle);
    }

    const handleDownload = () => {
        window.open(resume, '_blank');
        const link = document.createElement('a');
        link.href = resume; // Path to your resume in the public folder
        link.target = '_blank'; // Open in new tab
        link.download = 'Prakashraj_Resume.pdf'; // The name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const email = 'prakashrajrko1@gmail.com';
    const handleEmail = () => {
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className={isToggle ? "db-page2 db-page3" : "db-page"}>
            <div className='db-content'>
                <div className='row'>
                    <div className='col-3'>
                        <h1 className={isToggle ? 'db-name2' : 'db-name'} >JP</h1>
                    </div>
                    <motion.div className='col-3'
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 30, delay: .3 }}
                    >
                        <button onClick={handleDownload} className={isToggle ? 'db-resume-btn clr db-size' : 'db-resume-btn'}>
                            Resume
                        </button>
                    </motion.div>
                    <div className='col-3'>
                        <button className='db-arrow-btn'>
                            <FontAwesomeIcon className='db-arrow' icon={faArrowLeft} />
                        </button>
                    </div>
                    <motion.div className='col-2 d-flex justify-content-end'
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 30, delay: .3 }}
                    >
                        <button onClick={handleEmail} className={isToggle ? 'db-resume-btn clr2 clr3 db-size' : 'db-resume-btn'}>
                            Say hi..
                        </button>
                    </motion.div>
                </div>

                <div>
                    <div className='row bg-secondary'>
                        <div className='col-3'>
                            <motion.div className='col-3'
                                initial={{ opacity: .0 }}
                                animate={{ opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 30, delay: .4 }}
                            >
                                <Link to="/project" style={{ textDecoration: "none" }} className={isToggle ? 'db-project clr db-size' : 'db-project black'}>Projects</Link>
                            </motion.div>
                            <motion.div className={isToggle ? 'col db-link db-links' : 'col db-link'}
                                initial={{ y: 300 }}
                                animate={{ y: 0 }}
                                transition={{ type: 'spring', stiffness: 100 }}
                            >
                                <motion.button className='db-link-btn'
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
                                >
                                    <FaLinkedin className={isToggle ? 'db-black2' : 'db-black'} />
                                </motion.button><br />
                                <motion.button className='db-link-btn'
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ delay: 2.0, duration: 1, ease: "easeInOut" }}
                                >
                                    <FaGithub className={isToggle ? 'db-black2' : 'db-black'} />
                                </motion.button><br />
                                <motion.button className='db-link-btn'
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
                                >
                                    <FaInstagramSquare className={isToggle ? 'db-black2' : 'db-black'} />
                                </motion.button>
                                <p className={isToggle ? 'db-line2 db-line' : 'db-line'}>_______________________</p>
                            </motion.div>
                        </div>
                        <div className='col-3 db-rot'>
                        <button className={ isToggle?'db-rot-btn':''} style={{border: 'none'}} onClick={changeTheme}>
                    <FontAwesomeIcon className='db-rot-icon' icon={faYinYang} spin />
                    <center className='mt-3'><p>click here!</p></center>
                        </button>
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <button onClick={changeTheme} className={isToggle ? 'db-back-icon2' : 'db-back-icon'}>

                            <FontAwesomeIcon icon={faYinYang} spin />
                            <center style={{ fontSize: "small" }}>click here!</center>
                        </button>
                    </div>
                </div>

                <motion.div className='row db-down align-content-between flex-wrap'
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}
                >
                    <div className='col-6 db-down-btn'>
                        <center><Link to="/about" className={isToggle ? 'db-black2 db-size3' : 'black'} style={{ textDecoration: "none" }} >About</Link></center>
                    </div>
                    <div className='col-6 db-down-btn'>
                        <center><button className={isToggle ? 'db-size3' : 'black'}>My Skills</button></center>
                    </div>
                </motion.div>

                <div className="db-info">
                    { isToggle?<div className="cd">
                        <div className="cd-left">
                            <p>Hi,</p>
                            <p>I'm Prakash.</p>
                            <p>Aspiring Full Stack Developer with a strong passion for coding and software development.
                                Proficient in Core Java and front-end technologies, and actively expanding my skills in back-end development.
                                Eager to apply my knowledge and enthusiasm in a full-time software development role to contribute to innovative projects and solutions.
                               Always ready to learn and grow in a collaborative environment.</p>
                        </div>
                        <div className="cd-right">
                            <img src={avt1} alt="Avatar" />
                        </div>
                    </div>:'' }
                </div>
            </div>
        </div>
    )
}

export default Dashboard