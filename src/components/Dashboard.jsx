import React, { useState } from 'react'
import '../css/DashboardStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faYinYang } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import resume from '../assets/Prakashraj_J_Resume.pdf';
import { Link } from 'react-router-dom'
import avatar from '../assets/Avatar1.png'

function Dashboard() {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle)
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
        <div className={toggle ? "db-page" : "db-page2 db-page3"}>

            <div className="row p-2">
                <div className='col'>
                    <p className={toggle ? "col db-name text-dark" : "col db-name text-white"}>JP</p>
                </div>

                <motion.div className="col" initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <button className='border border-0 bg-transparent' onClick={handleDownload} >
                        <p className={toggle ? 'font-lg db-btn-hover db-text-style text-dark' : 'font-lg db-btn-hover db-text-style text-white'}>Resume</p>
                    </button>
                </motion.div>

                <div className="col">
                    <button className='db-arrow-btn p-1 rounded-5 bg-white'>
                        <FontAwesomeIcon className='db-arrow' icon={faArrowLeft} />
                    </button>
                </div>

                <motion.div className="col" initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}><button onClick={handleEmail} className={toggle ? 'font-lg border border-0 bg-transparent db-btn-hover db-text-style text-dark' : 'font-lg border border-0 bg-transparent db-btn-hover db-text-style color color'}>Say Hi..</button></motion.div>
            </div>

            <div className="row h-50">
                <motion.div className="col text-start" initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <Link to="/project" className={toggle ? 'font-sm db-vertical pt-5 px-3 font-lg text-decoration-none db-btn-hover db-text-style text-dark' : 'db-vertical pt-5 px-3 font-lg text-decoration-none db-btn-hover db-text-style text-white'}>Projects</Link>
                </motion.div>

                <div className="col-8 d-flex justify-content-center align-items-center">
                    {toggle ? <motion.button initial={{ y: 900, x: 300 }}
                        animate={{ y: 0, x: 0 }}
                        transition={{ duration: 1 }} className='border border-0 bg-transparent db-spin-btn' onClick={handleToggle}>
                        <FontAwesomeIcon icon={faYinYang} spin />
                        <p className='fs-6 m-auto'>click here</p>
                    </motion.button> : <motion.div initial={{ y: -900 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }} className="card bg-transparent">
                        <div className="card-left p-4">
                            <h1>Hi,</h1>
                            <h3>I'm Prakashraj</h3>
                            <h6>Driven by a love for software development, keen to grow and eager to turn my passion into impactful full-time work.</h6>
                        </div>
                        <div className="card-right">
                            <img src={avatar} alt="" />
                        </div>
                    </motion.div>}

                </div>

                <motion.div className="col d-flex justify-content-end align-items-center" initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <p className={toggle ? 'font-lg db-vertical font-lg db-btn-hover px-3 db-text-style text-dark' : 'db-vertical font-sm db-btn-hover db-text-style px-3 color'}>Feats</p>
                </motion.div>
            </div>

            <div className="row p-3 d-flex align-items-end db-footer">
                <motion.div className="col" initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}>
                    <motion.button className='border border-0 bg-transparent fs-2'
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
                    >
                        <a href="https://www.linkedin.com/in/prakashraj200/" className={toggle ? 'text-dark' : 'color2'} target='_blank'><FaLinkedin className='db-btn-hover' /></a>

                    </motion.button><br />
                    <motion.button className='border border-0 bg-transparent fs-2'
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ delay: 2.0, duration: 1, ease: "easeInOut" }}
                    >
                        <a href="https://github.com/prakash-200" className={toggle ? 'text-dark' : 'color2'} target='_blank'><FaGithub className='db-btn-hover' /></a>


                    </motion.button><br />
                    <motion.button className='border border-0 bg-transparent fs-2'
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
                    >
                        <a href="https://www.linkedin.com/in/prakashraj200/" className={toggle ? 'text-dark' : 'color2'} target='_blank'><FaInstagramSquare className='db-btn-hover' /></a>
                    </motion.button>
                    <p className={toggle ? 'db-vertical px-2 text-dark' : 'db-vertical px-2 color2'}>________________</p>
                </motion.div>

                <motion.div className="col p-4 fs-4" initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <Link to="/about" className={toggle ? 'font-lg text-decoration-none db-text-style db-btn-hover text-dark' : 'font-sm text-decoration-none db-text-style db-btn-hover color2'}>About</Link>
                </motion.div>

                <motion.div className="col p-4 fs-4" initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    

                    <Link to="/skill" className='font-sm text-decoration-none db-text-style db-btn-hover text-dark'>My Skills</Link>
                </motion.div>

                <div className="col p-2">
                {toggle ? "" : <motion.div className='db-back' initial={{ y: 900, x: 300 }}
                    animate={{ y: 0, x: 0 }} transition={{ duration: 1 }} ><FontAwesomeIcon icon={faYinYang} spin className='db-spin' onClick={handleToggle} /></motion.div> }
                </div>
            </div>
        </div>
    )
}

export default Dashboard