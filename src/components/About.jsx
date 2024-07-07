import React from 'react'
import '../css/AboutStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {

  const [hideAbout,setHideAbout] = useState(false);

  useEffect(() => {
    // Introduce a delay of 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setHideAbout(true);
    }, 2000);

    // Clear the timeout if the component unmounts
    return () => {
      console.log("returned");
      clearTimeout(timer)};
  }, []);

  return (
    <div className='About'>

      <div className="row about-row">
        <div className="col-6">
          <h1 className='db-name2'>JP</h1>
        </div>
        <div className="col-6">
          <Link to="/" className='db-arrow-btn2'  style={{ textDecoration: "none", color: "black", paddingTop: "10px" }}>
            <FontAwesomeIcon className='db-arrow' icon={faArrowLeft} />
          </Link>
        </div>
      </div>

      <div className="row">
        <p className='about-text'>ABOUT</p>
      </div>

      <div className="row">
      <motion.div className='col db-link2'
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <motion.button className='db-link-btn2'
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
        >
          <FaLinkedin style={{ color: "#ffff" }} />
        </motion.button><br />
        <motion.button className='db-link-btn2'
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ delay: 2.0, duration: 1, ease: "easeInOut" }}
        >
          <FaGithub style={{ color: "#ffff" }} />
        </motion.button><br />
        <motion.button className='db-link-btn2'
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
        >
          <FaInstagramSquare style={{ color: "#ffff" }} />
        </motion.button>
        <p className='db-line2' >_______________________</p>
      </motion.div>
      <motion.div className="col-8"
         initial={{ delay: .2, opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: .2, stiffness: 300 }}
      >
      
      {
          hideAbout && <div className="card">
          <p>I'm a recent graduate with a BTech in Information Technology, 
            Throughout my academic journey, I have developed a deep passion for coding 
            and have acquired proficiency in web developemnt.
            My hands-on experience extends to developing several projects.<br /><br />
            My enthusiasm for technology drives me to continuously learn and adapt to new advancements in the field. 
            I enjoy exploring innovative solutions and tackling complex problems, which has fostered a strong problem-solving mindset.<br /><br />
            With a strong foundation in information technology and a relentless passion for coding, I am ready to embark on a rewarding career and make meaningful contributions to the tech industry.


            </p>
        </div>
        }
      </motion.div>
      </div>

    </div>
  )
}

export default About