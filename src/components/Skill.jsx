import React from 'react'
import '../css/SkillStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";


function Skill() {
  return (
    <div className="skl">
      <div className="row skl-header">
        <div className='col'>
          <p className="text-dark skl-name p-3">JP</p>
        </div>
        <div className="col text-start p-4">

          <Link to="/" className='abt-arrow text-dark p-2 rounded-5 bg-white skl-btn'>
            <FontAwesomeIcon className='abt-arrow' icon={faArrowLeft} />
          </Link>
        </div>
      </div>
      <div className="row skl-content">
        <div className="col col-1 col-md-1 skl-link align-self-end">
          
        </div>
        <div className="col col-10 skl-card">
          <motion.div className="c1" initial={{ y: 900 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}>
            <p><FaLaptopCode className='skl-icon' /><span className='px-3'>Software Developer</span>
            </p>
            <p className='skl-ff'>I enjoy writing clean code and creating useful products.</p>
            <p className='skl-ff2'>I LIKE TO CODE IN</p>
            <p className='skl-ff'>Java, Javascript, MySQL, C, C++</p>
            <p className='skl-ff2'>TOOLS</p>
            <ol>
              <li className='skl-ff'>VS Code, Eclipse, Postman</li>
            </ol>
          </motion.div>
          <motion.div className="c2" initial={{ y: -900 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}>
            <p><FontAwesomeIcon className='skl-icon' icon={faPalette} />
            <span className='px-3'>Frontend Developer</span>
            </p>
            <p className='skl-ff'>It's fun for me to bring new concepts to life. I consider myself fortunate to be a frontend developer because my work has a direct impact on the user's life.</p>
            <p className='skl-ff2'>SKILLS</p>
            <p className='skl-ff'>Html, Css, Js,  React, Angular, Tailwind CSS, Bootstrap, Firebase</p>
            <p className='skl-ff2'>TOOLS</p>
            <p className='skl-ff'>VS Code, GitHub</p>
          </motion.div>
          
        </div>
      </div>
      <div className="row skl-footer">
      <motion.div className="col" initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}>
            <motion.button className='border border-0 bg-transparent fs-2'
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
            >
              <a href="https://www.linkedin.com/in/prakashraj200/" className='text-dark px-4' target='_blank'><FaLinkedin className='scale-on-hover' /></a>
            </motion.button><br />
            <motion.button className='border border-0 bg-transparent fs-2'
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 2.0, duration: 1, ease: "easeInOut" }}
            >
              <a href="https://github.com/prakash-200" className='text-dark px-4' target='_blank'><FaGithub className='abt-arrow' /></a>
            </motion.button><br />
            <motion.button className='border border-0 bg-transparent fs-2'
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
            >
              <a href="https://www.instagram.com/coding__luv/" className='text-dark px-4' target='_blank' rel="noopener noreferrer"><FaInstagramSquare className='abt-arrow' /></a>
            </motion.button>
            <p className='db-vertical px-3 text-dark'>______________________</p>
          </motion.div>
      </div>
    </div>
  )
}

export default Skill

