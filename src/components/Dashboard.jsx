import React from 'react'
import '../css/DashboardStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faYinYang } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";


function Dashboard() {

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
        <div className="container-fluid db-page bg-primary">

            <div className="row pt-4 bg-danger">
                <div className="col db-name"><p>JP</p></div>

                <motion.div className="col" initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <button className='border border-0 bg-transparent' onClick={handleDownload} >
                        <p className='font-lg font-sm'>Resume</p>
                    </button>
                </motion.div>

                <div className="col">
                    <button className='p-1 rounded-5 bg-white'>
                        <FontAwesomeIcon className='db-arrow' icon={faArrowLeft} />
                    </button>
                </div>

                <motion.div className="col" initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}><p className='font-lg font-sm'>Say Hi..</p></motion.div>
            </div>

            <div className="row h-50 bg-warning">
                <motion.div className="col text-start" initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <p className='db-vertical pt-5 font-lg font-sm'>Projects</p>
                </motion.div>
                <div className="col d-flex justify-content-center align-items-center">
                    <button className='border border-0 bg-transparent db-spin-btn'>
                        <FontAwesomeIcon icon={faYinYang} spin />
                        <p className='fs-6 m-auto'>click here</p>
                    </button>
                </div>
                <motion.div className="col d-flex justify-content-end align-items-center" initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <p className='db-vertical font-lg font-sm'>Feats</p>
                </motion.div>
            </div>

            <div className="row d-flex align-items-end db-footer bg-info">
                <motion.div className="col" initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}>
                    <motion.button className='border border-0 bg-transparent fs-2'
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
                    >
                        <FaLinkedin />
                    </motion.button><br />
                    <motion.button className='border border-0 bg-transparent fs-2'
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ delay: 2.0, duration: 1, ease: "easeInOut" }}
                    >
                        <FaGithub />
                    </motion.button><br />
                    <motion.button className='border border-0 bg-transparent fs-2'
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
                    >
                        <FaInstagramSquare />
                    </motion.button>
                    <p className='db-vertical px-2'>________________</p>
                </motion.div>

                <motion.div className="col p-4 fs-4" initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <p className='font-sm'>About</p>
                </motion.div>

                <motion.div className="col p-4 fs-4" initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }}>
                    <p className='font-sm'>My Skills</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Dashboard