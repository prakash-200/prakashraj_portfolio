import React, { useEffect, useRef } from "react";
import "../css/SkillStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPalette } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagramSquare, FaLaptopCode } from "react-icons/fa";

function Skill() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
      constructor(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
        this.draw();
      }
    }

    function initParticles() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 5 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = "#0f9976";
        const speedX = (Math.random() - 0.5) * 2;
        const speedY = (Math.random() - 0.5) * 2;
        particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => particle.update());
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // Resize canvas on window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          background: "#333",
          width: "100%",
          height: "100%",
        }}
      ></canvas>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          height: "100vh"
        }}
      >
        <div className="skl" style={{ position: "relative", zIndex: 1 }}>
        <div className="row skl-header">
          <div className="col">
            <p className="skl-name p-3 " style={{ color: "#fcf6f4" }}>JP</p>
          </div>
          <div className="col text-start p-4">
            <Link to="/" className="abt-arrow text-dark p-2 rounded-5 bg-white skl-btn">
              <FontAwesomeIcon className="abt-arrow" icon={faArrowLeft} />
            </Link>
          </div>
        </div>
        <div className="row skl-content">
          <div className="col col-1 col-md-1 skl-link align-self-end"></div>
          <div className="col col-10 skl-card">
            <motion.div
              className="c1"
              initial={{ y: 900 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <p>
                <FaLaptopCode className="skl-icon" />
                <span className="px-3">Software Developer</span>
              </p>
              <p className="skl-ff">
                I enjoy writing clean code and creating useful products.
              </p>
              <p className="skl-ff2">I LIKE TO CODE IN</p>
              <p className="skl-ff">Java, Javascript, MySQL, C, C++</p>
              <p className="skl-ff2">TOOLS</p>
              <ol>
                <li className="skl-ff">VS Code, Eclipse, Postman</li>
              </ol>
            </motion.div>
            <motion.div
              className="c2"
              initial={{ y: -900 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <p>
                <FontAwesomeIcon className="skl-icon" icon={faPalette} />
                <span className="px-3">Frontend Developer</span>
              </p>
              <p className="skl-ff">
                It's fun for me to bring new concepts to life. I consider myself
                fortunate to be a frontend developer because my work has a
                direct impact on the user's life.
              </p>
              <p className="skl-ff2">SKILLS</p>
              <p className="skl-ff">
                Html, Css, Js, React, Angular, Tailwind CSS, Bootstrap, Firebase
              </p>
              <p className="skl-ff2">TOOLS</p>
              <p className="skl-ff">VS Code, GitHub</p>
            </motion.div>
          </div>
        </div>
        <div className="row skl-footer">
          <motion.div
            className="col"
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
                className="text-dark px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="scale-on-hover"  style={{ color: "#fcf6f4" }} />
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
                className="text-dark px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="abt-arrow"  style={{ color: "#fcf6f4" }} />
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
                className="text-dark px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="abt-arrow"  style={{ color: "#fcf6f4" }} />
              </a>
            </motion.button>
            <p className="db-vertical px-3" style={{ color: "#fcf6f4" }}>______________________</p>
          </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Skill;
