import React from 'react'
import '../css/AboutStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

function About() {
  return (
    <div className="abt d-flex flex-column">

      <div className="row">
        <div className='col'>
          <p className="text-light abt-name p-3">JP</p>
        </div>
        <div className="col text-start">
          <button className='m-3 p-2 rounded-5 bg-white'>
            <Link to="/" className='text-dark'>
              <FontAwesomeIcon className='db-arrow' icon={faArrowLeft} />
            </Link>
          </button>
        </div>
      </div>

      <div className="row">
        <p className='abt-about'>ABOUT</p>
      </div>

      <div className="row d-flex abt-footer">
        <div className="col-3 align-self-end abt-link">
          <motion.div className="col" initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}>
            <motion.button className='border border-0 bg-transparent fs-2'
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
            >
              <a href="https://www.linkedin.com/in/prakashraj200/" className='text-light px-4' target='_blank' rel="noopener noreferrer"><FaLinkedin className='db-btn-hover' /></a>
            </motion.button><br />
            <motion.button className='border border-0 bg-transparent fs-2'
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 2.0, duration: 1, ease: "easeInOut" }}
            >
              <a href="https://github.com/prakash-200" className='text-light px-4' target='_blank' rel="noopener noreferrer"><FaGithub className='db-btn-hover' /></a>
            </motion.button><br />
            <motion.button className='border border-0 bg-transparent fs-2'
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
            >
              <a href="https://www.instagram.com/prakashraj200/" className='text-light px-4' target='_blank' rel="noopener noreferrer"><FaInstagramSquare className='db-btn-hover' /></a>
            </motion.button>
            <p className='db-vertical px-3 text-light'>______________________</p>
          </motion.div>
        </div>
        <div className="col-9 abt-para">
          <p className='fade-in'>I'm a recent graduate with a BTech in Information Technology. Throughout my academic journey, I have developed a deep passion for coding and have acquired proficiency in web development. My hands-on experience extends to developing several projects.<br /><br />
            My enthusiasm for technology drives me to continuously learn and adapt to new advancements in the field. I enjoy exploring innovative solutions and tackling complex problems, which has fostered a strong problem-solving mindset.<br /><br />
            With a strong foundation in information technology and a relentless passion for coding, I am ready to embark on a rewarding career and make meaningful contributions to the tech industry.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
