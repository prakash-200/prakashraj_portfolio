import React, { useState } from 'react'
import '../css/DashboardStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faYinYang } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import resume from '../assets/Prakashraj_J-Resume.pdf';
import { Link } from 'react-router-dom'
import avatar from '../assets/Avatar1.png'
import rope from '../assets/200.gif'

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

            {/* Dashboard Nav Bar */}
            <div className="row db-nav p-2">
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

            {/* Dashboard Content */}
            <div className="row db-content">
                <motion.div className="col col-2 text-start py-4" initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <Link to="/project" className={toggle ? 'font-sm db-vertical pt-5 px-3 font-lg text-decoration-none db-btn-hover db-text-style text-dark' : 'db-vertical3 py-3 px-3 font-lg text-decoration-none db-btn-hover db-text-style text-white'}>Projects</Link>
                </motion.div>

                <div className="col col-8 d-flex justify-content-center align-items-center">
                    {toggle ? 
                    <motion.button initial={{ y: 900, x: 300 }}
                        animate={{ y: 0, x: 0 }}
                        transition={{ duration: 1 }} className='border d-flex flex-column align-items-center border-0 bg-transparent db-spin-btn' onClick={handleToggle}>
                        <FontAwesomeIcon icon={faYinYang} spin />
                        <h3 className='pt-2 clk'>click here</h3>
                    </motion.button> : 
                    <motion.div className="div" initial={{ y: -900 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
                        <img className='db-rope' src={rope} />
                    <motion.div initial={{ y: -900 }}
                    animate={{ y: 0, rotate: [0, 15, -15, 15, -15, 0] }}
                    transition={{ y:{duration: 1}, rotate: {
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop"
                    } }} className="cd">
                        <div className="card-left p-4 ">
                            <h1>Hi,</h1>
                            <h3>I'm Prakashraj</h3>
                            <h6>Driven by a love for software development, keen to grow and eager to turn my passion into impactful full-time work.</h6>
                        </div>
                        <div className="card-right">
                            <img src={avatar} alt="" />
                        </div>
                    </motion.div>
                    </motion.div>}

                </div>

                <motion.div className="col col-2 d-flex justify-content-end align-items-start" initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                        <div className='h-100 d-flex flex-column justify-content-between'>
                    <Link to='/exp' className={toggle ? 'font-lg db-vertical2 font-lg db-btn-hover px-3 db-text-style text-dark text-decoration-none' : ' py-5 db-vertical2 font-sm db-btn-hover db-text-style px-3  text-decoration-none color'}>Career</Link>
                    <Link to='/' onClick={() => window.alert("Currently not available!")} className={toggle ? 'font-lg db-vertical2 font-lg db-btn-hover px-3 db-text-style text-dark text-decoration-none' : ' py-5 db-vertical2 font-sm db-btn-hover db-text-style px-3  text-decoration-none color'}>Feats</Link>
                        </div>
                </motion.div>
            </div>

            {/* Dashboard Footer */}
            <div className="row db-footer d-flex align-items-end">
                <motion.div className="col ps-3" initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}>
                    <motion.button className='border border-0 bg-transparent fs-2'
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
                    >
                        <a href="https://www.linkedin.com/in/prakashraj200/" className={toggle ? 'text-dark px-2' : 'color2 px-2'} target='_blank'><FaLinkedin className='db-btn-hover' /></a>

                    </motion.button><br />
                    <motion.button className='border border-0 bg-transparent fs-2'
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ delay: 2.0, duration: 1, ease: "easeInOut" }}
                    >
                        <a href="https://github.com/prakash-200" className={toggle ? 'text-dark px-2' : 'color2 px-2'} target='_blank'><FaGithub className='db-btn-hover' /></a>


                    </motion.button><br />
                    <motion.button className='border border-0 bg-transparent fs-2'
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
                    >
                        <a href="https://www.instagram.com/coding__luv/" className={toggle ? 'text-dark px-2' : 'color2 px-2'} target='_blank'><FaInstagramSquare className='db-btn-hover' /></a>
                    </motion.button>
                    <p className={toggle ? 'db-vertical text-dark line' : 'db-vertical color2 line'}>________________</p>
                </motion.div>

                <motion.div className="col db-bd p-4 fs-4" initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <Link to="/about" className={toggle ? 'font-lg text-decoration-none db-text-style text-dark db-hover' : 'db-hover font-sm text-decoration-none db-text-style color2'}><p>About</p></Link>
                </motion.div>

                <motion.div className="col db-bd p-4 fs-4" initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>


                    <Link to="/skill" className='font-sm text-decoration-none db-text-style text-dark db-hover'><p>Skills</p></Link>
                </motion.div>

                <div className="col p-2">
                    {toggle ? "" : <motion.div className='db-back' initial={{ y: 900, x: 300 }}
                        animate={{ y: 0, x: 0 }} transition={{ duration: 1 }} ><FontAwesomeIcon icon={faYinYang} spin className='db-spin' onClick={handleToggle} /></motion.div>}
                </div>
            </div>
        </div>
    )
}

export default Dashboard