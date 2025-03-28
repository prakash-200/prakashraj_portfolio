import React, { useRef, useState } from "react";
import "../css/ProjectStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import SlideCard from "./SlideCard";
import images from "../ProjectImg";
import { Link } from "react-router-dom";
import Header from "./Header";

const cards = [
  {
    frontContent: (
      <div>
        <h1>WhatsApp Automation</h1>
        <p>
        Automating WhatsApp responses using Python involves fetching unread emails via Selenium, generating replies with OpenAI, and sending automated responses. This streamlines email handling and enhances efficiency.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[15]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#Python &nbsp; #Selenium &nbsp; #OpenAI &nbsp;</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open("https://github.com/prakash-200/WhatsAppAutomation", "_blank")
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/WhatsAppAutomation"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Zoho Mail Automation</h1>
        <p>
        Automating Zoho Mail responses using Python involves fetching unread emails via IMAP, generating replies with OpenAI, and sending automated responses. This streamlines email handling and enhances efficiency.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[14]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#Python &nbsp; #IMAP &nbsp; #OpenAI &nbsp;</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open("https://github.com/prakash-200/ZohoMailAutomation", "_blank")
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/ZohoMailAutomation"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Web Scrape</h1>
        <p>
        Web scraping across multiple sites using Selenium automates browsers for dynamic content, while BeautifulSoup and Requests extract and parse data efficiently.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[13]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#Python &nbsp; #BeautifulSoup &nbsp; #Selenium &nbsp; #Requests &nbsp; #Automa</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open("https://github.com/prakash-200/WebScrape", "_blank")
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/WebScrape"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Kanban Board</h1>
        <p>
          Kanban board using React JS with the DND package, allowing CRUD
          operations and task management. The board includes features like drop
          and draggable tasks.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[12]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>React &nbsp; #Bootstrap</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open("https://kanbandb.netlify.app/", "_blank")
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/OPPO-ECommerce"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>POS</h1>
        <p>
          POS project using React, featuring item management, inventory
          tracking, and a billing page with stock checks and sales record.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[11]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#React &nbsp; #Redux-persist &nbsp; #Bootstrap</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open("https://pos-react.netlify.app", "_blank")
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/OPPO-ECommerce"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Google Clone</h1>
        <p>
          Developed a Google search engine clone using React and integrated with
          the Google API.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[10]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#React &nbsp; #Tailwind CSS &nbsp; #Google API</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open("https://prakashrajgc.web.app/", "_blank")
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/OPPO-ECommerce"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Oppo E-Store</h1>
        <p>
          The Oppo e-commerce application is a sophisticated platform developed
          to facilitate the purchase of Oppo brand mobile phones. Built using
          the MERN stack (MongoDB, Express.js, React, and Node.js)
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[9]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#MERN &nbsp; #Bootstrap</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open(
                "https://github.com/prakash-200/OPPO-ECommerce",
                "_blank"
              )
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/OPPO-ECommerce"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Portfolio</h1>
        <p>
          My portfolio website is a comprehensive showcase of my professional
          journey and expertise, meticulously crafted using HTML, CSS,
          Bootstrap, and JavaScript.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[8]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#HTML &nbsp; #CSS &nbsp; #Bootstrap &nbsp; #Javascript</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open(
                "https://prakash-200.github.io/My-Portfolio/",
                "_blank"
              )
            }
          >
            Visit
          </button>
          <a href="https://github.com/prakash-200/My-Portfolio" target="_blank">
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Java Problems</h1>
        <p>
          I have solved various Java problems focusing on strings, arrays,
          collections, and more. These exercises have enhanced my
          problem-solving skills.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[3]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>
          #Java &nbsp; #Problem Solving &nbsp; #String &nbsp; #Array &nbsp;
          #Collections
        </p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open(
                "https://github.com/prakash-200/Java_programs",
                "_blank"
              )
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/Java_programs"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Day Cycle Animation</h1>
        <p>
          I created an animation depicting a day cycle, featuring sunrise,
          sunset, moonrise, and moonset effects using HTML and CSS animations.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[2]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#HTML &nbsp; #CSS </p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open(
                "https://prakash-200.github.io/Day-Lifecycle/",
                "_blank"
              )
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/Day-Lifecycle"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Firebase API Integration</h1>
        <p>
          I successfully integrated Firebase API to enable seamless user login
          and registration functionalities.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[4]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#Firease API &nbsp; #HTML &nbsp; #CSS &nbsp; #TypeScript</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open(
                "https://github.com/prakash-200/loginRegister",
                "_blank"
              )
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/loginRegister"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Netflix Clone</h1>
        <p>
          I developed a Netflix clone web application using Angular and
          integrated Firebase API for user authentication and session
          management.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[5]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#Angular &nbsp; #Firebase API &nbsp; #Bootstrap</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open(
                "https://github.com/prakash-200/NETFLIX-CLONE1",
                "_blank"
              )
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/NETFLIX-CLONE1"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Calculator</h1>
        <p>
          I developed a calculator app using HTML, CSS, JavaScript, and
          Bootstrap. This app provides a user-friendly interface with responsive
          design.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[0]} loading="lazy" />
        <center>
          <hr />
        </center>
        <p>#HTML &nbsp; #CSS &nbsp; #JavaScript</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open("https://prakash-200.github.io/Calculator/", "_blank")
            }
          >
            Visit
          </button>
          <a href="https://github.com/prakash-200/Calculator" target="_blank">
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Laravel CRUD App</h1>
        <p>
          I developed a project to perform CRUD operations using the Laravel
          framework. This project demonstrates my ability to create, read,
          update, and delete records efficiently.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[1]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>
          #Laravel &nbsp; #HTML &nbsp; #CSS &nbsp; #Bootstrap &nbsp; #JavaScript
        </p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open(
                "https://github.com/prakash-200/LARAVEL-CRUD",
                "_blank"
              )
            }
          >
            Visit
          </button>
          <a href="https://github.com/prakash-200/LARAVEL-CRUD" target="_blank">
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Yamaha Resposive Site</h1>
        <p>
          I developed a responsive site to advertise Yamaha brand bikes using
          HTML, CSS, JavaScript, and Bootstrap. The site is designed to be
          visually appealing and user-friendly across all devices.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[7]} loading="lazy"/>
        <center>
          <hr />
        </center>
        <p>#HTML &nbsp; #CSS &nbsp; #Bootstrap &nbsp; #JavaScript </p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open(
                "https://prakash-200.github.io/Yamaha_Site/",
                "_blank"
              )
            }
          >
            Visit
          </button>
          <a href="https://github.com/prakash-200/Yamaha_Site" target="_blank">
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },

  {
    frontContent: (
      <div>
        <h1>Static Resume</h1>
        <p>
          I have developed a static resume to showcase my skills, academic
          background, projects, and more. This resume is built using HTML for
          structure and CSS for styling, ensuring a clean and professional
          presentation.
        </p>
      </div>
    ),
    backContent: (
      <div>
        <img src={images[6]} loading="lazy"/>
        <center>
          <hr style={{ color: "white" }} />
        </center>
        <p>#HTML &nbsp; #CSS &nbsp; #Responsive</p>
        <div className="pjt-card-btn">
          <button
            onClick={() =>
              window.open(
                "https://prakash-200.github.io/Resume_using_HTML_CSS/",
                "_blank"
              )
            }
          >
            Visit
          </button>
          <a
            href="https://github.com/prakash-200/Resume_using_HTML_CSS"
            target="_blank"
          >
            <FaGithub style={{ color: "#ffff", fontSize: "200%" }} />
          </a>
        </div>
      </div>
    ),
  },
  
];

function Project() {
  const carouselRef = useRef(null);

  const onMouseDown = (e) => {
    carouselRef.current.isDown = true;
    carouselRef.current.startX = e.pageX - carouselRef.current.offsetLeft;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    carouselRef.current.isDown = false;
  };

  const onMouseUp = () => {
    carouselRef.current.isDown = false;
  };

  const onMouseMove = (e) => {
    if (!carouselRef.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - carouselRef.current.startX) * 0.1; // Adjust this multiplier for slower drag
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - walk;
  };

  return (
    <div className="pjt">

      <Header />

      <div className="row h-50 pjt-content">
        <div
          className="carousel-container"
          ref={carouselRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {cards.map((card, index) => (
            <SlideCard
              key={index}
              frontContent={card.frontContent}
              backContent={card.backContent}
            />
          ))}
        </div>
        <p className="d-flex justify-content-end justify-content-md-center pe-5 pjt-swipe">
          Swipe...
        </p>
      </div>

      <div className="row pjt-footer-container">
        <div className="pjt-footer">
          <motion.div
            className=""
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.button
              className="border border-0 bg-transparent fs-2"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
            >
              <a
                href="https://www.linkedin.com/in/prakashraj200/"
                className="text-light px-4"
                target="_blank"
              >
                <FaLinkedin className="db-btn-hover" />
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
              >
                <FaGithub className="db-btn-hover" />
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
              >
                <FaInstagramSquare className="db-btn-hover" />
              </a>
            </motion.button>
            <p className="db-vertical px-3">________________________________</p>
          </motion.div>
        </div>
        {/* <div className="col col-sm-8 bg-secondary">
          <p className="d-flex justify-content-end pjt-swipe">Swipe...</p>
        </div> */}
      </div>
     </div>
  );
}

export default Project;
