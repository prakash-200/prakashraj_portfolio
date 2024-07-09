import React, { useRef } from 'react'
import '../css/ProjectStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import SlideCard from './SlideCard';
import images from '../ProjectImg';
import { Link } from 'react-router-dom';


const cards = [
  { frontContent: <div><h1>Static Resume</h1><p>I have developed a static resume to showcase my skills, academic background, projects, and more. This resume is built using HTML for structure and CSS for styling, ensuring a clean and professional presentation.</p></div>, 
    backContent: <div><img src={images[6]} /><center><hr /></center><p>#HTML &nbsp; #CSS &nbsp; #Responsive</p><div className='pjt-card-btn'><button><a href='https://prakash-200.github.io/Resume_using_HTML_CSS/' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/Resume_using_HTML_CSS' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },
  
    { frontContent: <div><h1>Yamaha Resposive Site</h1><p>I developed a responsive site to advertise Yamaha brand bikes using HTML, CSS, JavaScript, and Bootstrap. The site is designed to be visually appealing and user-friendly across all devices.</p></div>, 
      backContent: <div><img src={images[7]} /><center><hr /></center><p>#HTML &nbsp; #CSS &nbsp; #Bootstrap &nbsp; #JavaScript </p><div className='pjt-card-btn'><button><a href='https://prakash-200.github.io/Yamaha_Site/' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/Yamaha_Site' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },
 
    { frontContent: <div><h1>Laravel CRUD App</h1><p>I developed a project to perform CRUD operations using the Laravel framework. This project demonstrates my ability to create, read, update, and delete records efficiently.</p></div>, 
      backContent: <div><img src={images[1]} /><center><hr /></center><p>#Laravel &nbsp; #HTML &nbsp; #CSS &nbsp; #Bootstrap &nbsp; #JavaScript</p><div className='pjt-card-btn'><button><a href='https://github.com/prakash-200/LARAVEL-CRUD' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/LARAVEL-CRUD' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },
 
    { frontContent: <div><h1>Calculator</h1><p>I developed a calculator app using HTML, CSS, JavaScript, and Bootstrap. This app provides a user-friendly interface with responsive design, enabling seamless calculation operations across all devices.</p></div>, 
      backContent: <div><img src={images[0]} /><center><hr /></center><p>#HTML &nbsp; #CSS &nbsp; #JavaScript</p><div className='pjt-card-btn'><button><a href='https://prakash-200.github.io/Calculator/' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/Calculator' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },

    { frontContent: <div><h1>Netflix Clone</h1><p>I developed a Netflix clone web application using Angular and integrated Firebase API for user authentication and session management. The app replicates key features of Netflix with a responsive design.</p></div>, 
      backContent: <div><img src={images[5]} /><center><hr /></center><p>#Angular &nbsp; #Firebase API &nbsp; #Bootstrap</p><div className='pjt-card-btn'><button><a href='https://github.com/prakash-200/NETFLIX-CLONE1' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/NETFLIX-CLONE1' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },
 
    { frontContent: <div><h1>Firebase API Integration</h1><p>I successfully integrated Firebase API to enable seamless user login and registration functionalities. This integration enhances security and user experience by leveraging Firebase's authentication services.</p></div>, 
      backContent: <div><img src={images[4]} /><center><hr /></center><p>#Firease API &nbsp; #HTML &nbsp; #CSS &nbsp; #TypeScript</p><div className='pjt-card-btn'><button><a href='https://github.com/prakash-200/loginRegister' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/loginRegister' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },
 
    { frontContent: <div><h1>Day Cycle Animation</h1><p>I created an animation depicting a day cycle, featuring sunrise, sunset, moonrise, and moonset effects using HTML and CSS animations. This project demonstrates showcasing a visually dynamic representation of natural phenomena.</p></div>, 
      backContent: <div><img src={images[2]} /><center><hr /></center><p>#HTML &nbsp; #CSS </p><div className='pjt-card-btn'><button><a href='https://prakash-200.github.io/Day-Lifecycle/' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/Day-Lifecycle' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },
 
    { frontContent: <div><h1>Java Problems</h1><p>I have solved various Java problems focusing on strings, arrays, collections, and more. These exercises have enhanced my problem-solving skills and deepened my understanding of Java programming concepts.</p></div>, 
      backContent: <div><img src={images[3]} /><center><hr /></center><p>#Java &nbsp; #Problem Solving &nbsp; #String &nbsp; #Array &nbsp; #Collections</p><div className='pjt-card-btn'><button><a href='https://github.com/prakash-200/Java_programs' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/Java_programs' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },
 
    { frontContent: <div><h1>Portfolio</h1><p>My portfolio website is a comprehensive showcase of my professional journey and expertise, meticulously crafted using HTML, CSS, Bootstrap, and JavaScript.</p></div>, 
      backContent: <div><img src={images[8]} /><center><hr /></center><p>#HTML &nbsp; #CSS &nbsp; #Bootstrap &nbsp; #Javascript</p><div className='pjt-card-btn'><button><a href='https://prakash-200.github.io/My-Portfolio/' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/My-Portfolio' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },
 
    { frontContent: <div><h1>Oppo E-Store</h1><p>The Oppo e-commerce application is a sophisticated platform developed to facilitate the purchase of Oppo brand mobile phones. Built using the MERN stack (MongoDB, Express.js, React, and Node.js)</p></div>, 
      backContent: <div><img src={images[9]} /><center><hr /></center><p>#MERN &nbsp; #Bootstrap</p><div className='pjt-card-btn'><button><a href='https://github.com/prakash-200/OPPO-ECommerce' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/OPPO-ECommerce' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },
 
    { frontContent: <div><h1>Google Clone</h1><p>Developed a Google search engine clone using React and integrated with the Google API.</p></div>, 
      backContent: <div><img src={images[10]} /><center><hr /></center><p>React &nbsp; #Tailwind CSS &nbsp; #Google API</p><div className='pjt-card-btn'><button><a href='https://prakashrajgc.web.app/' target='_blank' style={{ textDecoration: "none", color: "black" }}>Visit</a></button><a href='https://github.com/prakash-200/OPPO-ECommerce' target='_blank'><FaGithub style={{ color: "#ffff", fontSize: "200%" }} /></a></div></div> },
 
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
      <div className="row">
        <div className="col-6 pjt-name">JP</div>
        <div className="col-6 db-btn">
          <Link to="/" className='db-arrow-btn' style={{color: "black", backgroundColor: "white", padding: 5, borderRadius: 50}}>
            <FontAwesomeIcon className='db-arrow fs-3' icon={faArrowLeft} />
          </Link>
        </div>
      </div>
      <div className="row">
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
      </div>
      <div className="row">
        <div className="col-3">
          <motion.div className='col db-link2'
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <motion.button className='db-link-btn2'
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
            >
              <a href="https://www.linkedin.com/in/prakashraj200/" target='_blank'><FaInstagramSquare className='db-btn-hover' style={{ color: "#ffff" }}/></a>
            </motion.button><br />
            <motion.button className='db-link-btn2'
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 2.0, duration: 1, ease: "easeInOut" }}
            >
              <a href="https://github.com/prakash-200" target='_blank'><FaGithub className='db-btn-hover' style={{ color: "#ffff" }}/></a>

            </motion.button><br />
            <motion.button className='db-link-btn2'
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
            >
              <FaInstagramSquare style={{ color: "#ffff" }} />
            </motion.button>
            <p className='db-line2 px-2' >_______________________</p>
          </motion.div>
        </div>
      </div>
     <div className="row abt-swipe">
      <div className="col abt-col">
      <p>Swipe . . .</p>
      </div>
     </div>
    </div>
  )
}

export default Project