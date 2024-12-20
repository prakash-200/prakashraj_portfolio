import React, { useEffect } from "react";
import '../css/AboutStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function About() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 6, direction: "none" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
        },
        retina_detect: true,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden"
      }}
    >
      <div className="abt d-flex flex-column">

<div className="row abt-header">
  <div className='col'>
    <p className="text-light abt-name p-3">JP</p>
  </div>
  <div className="col text-start p-4">

    <Link to="/" className='abt-arrow text-dark p-2 rounded-5 bg-white'>
      <FontAwesomeIcon className='abt-arrow' icon={faArrowLeft} />
    </Link>
  </div>
</div>

<div className="row abt-content">
  <p className='abt-about text-start'>ABOUT</p>
</div>

<div className="row abt-footer">
  <div className="col col-2 align-self-end">
    <motion.div className="col" initial={{ y: 300 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}>
      <motion.button className='border border-0 bg-transparent fs-2 abt-icn'
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
      >
        <a href="https://www.linkedin.com/in/prakashraj200/" className='text-light px-4' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
      </motion.button><br />
      <motion.button className='border border-0 bg-transparent fs-2'
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ delay: 2.0, duration: 1, ease: "easeInOut" }}
      >
        <a href="https://github.com/prakash-200" className='text-light px-4' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
      </motion.button><br />
      <motion.button className='border border-0 bg-transparent fs-2'
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
      >
        <a href="https://www.instagram.com/coding__luv/" className='text-light px-4' target='_blank' rel="noopener noreferrer"><FaInstagramSquare /></a>
      </motion.button>
      <p className='db-vertical px-3 text-light'>______________________</p>
    </motion.div>
  </div>
  <div className="col col-10 align-self-start">
    <p className='text-light para-div fade-in' style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>I'm a recent graduate with a BTech in Information Technology. Throughout my academic journey, I have developed a deep passion for coding and have acquired proficiency in web development. My hands-on experience extends to developing several projects.<br /><br />
      My enthusiasm for technology drives me to continuously learn and adapt to new advancements in the field. I enjoy exploring innovative solutions and tackling complex problems, which has fostered a strong problem-solving mindset.<br /><br />
      With a strong foundation in information technology and a relentless passion for coding, I am ready to embark on a rewarding career and make meaningful contributions to the tech industry.</p>
  </div>
</div>

</div>
    </div>
  );
}

export default About;
