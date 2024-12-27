import React, { useEffect } from "react";
import "../css/AboutStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
        overflow: "hidden",
      }}
    >
      <div className="abt d-flex flex-column">
        <div className="row abt-header">
          <div className="col">
            <p className="text-light abt-name p-3">JP</p>
          </div>
          <div className="col text-start p-4">
            <Link to="/" className="abt-arrow text-dark p-2 rounded-5 bg-white">
              <FontAwesomeIcon className="abt-arrow" icon={faArrowLeft} />
            </Link>
          </div>
        </div>

        <div className="row abt-content">
          <p className="abt-about text-start">ABOUT</p>
        </div>

        <div className="row abt-footer">
          <div className="col col-2 align-self-end">
            <motion.div
              className="col"
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.button
                className="border border-0 bg-transparent fs-2 abt-icn"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
              >
                <a
                  href="https://www.linkedin.com/in/prakashraj200/"
                  className="text-light px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </motion.button>
              <br />
              <motion.button
                className="border border-0 bg-transparent fs-2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ delay: 2.0, duration: 1, ease: "easeInOut" }}
              >
                <a
                  href="https://github.com/prakash-200"
                  className="text-light px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </motion.button>
              <br />
              <motion.button
                className="border border-0 bg-transparent fs-2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
              >
                <a
                  href="https://www.instagram.com/coding__luv/"
                  className="text-light px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare />
                </a>
              </motion.button>
              <p className="db-vertical px-3 text-light">
                ______________________
              </p>
            </motion.div>
          </div>
          <div className="col col-10 align-self-start ">
            <p
              className="text-light para-div fade-in "
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              Hello! I’m <strong> Prakashraj J</strong>, a passionate software developer dedicated
              to crafting efficient and innovative solutions for real-world
              challenges. I specialize in full-stack development and have a keen
              interest in automation, focusing on projects that streamline
              workflows and optimize performance. My current work involves
              developing cutting-edge automation solutions to drive efficiency
              in dynamic environments.
              <br />
              <br />
              I thrive on problem-solving and enjoy exploring new technologies
              to expand my skill set. Whether it's coding a robust backend,
              creating user-friendly interfaces, or automating complex tasks, I
              approach every project with precision and creativity. My
              experience has equipped me with the ability to think critically,
              adapt quickly, and deliver impactful results that align with
              business goals.
              <br />
              <br />
              As someone who loves to learn, I’m always seeking opportunities to
              grow and innovate. I believe in staying ahead by embracing
              emerging trends and applying them to create meaningful solutions.
              Through this portfolio, I aim to showcase my journey, skills, and
              the projects I’ve undertaken. Let’s connect and collaborate to
              turn ideas into reality!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
