import React from "react";
import Header from "./Header";
import { MdWork } from "react-icons/md";
import "../css/ExperienceStyles.css";
import eka from "../assets/ExperienceImages/eka.webp";
import qantler from "../assets/ExperienceImages/qantler.webp";
import itkrish from "../assets/ExperienceImages/itkrish.webp";
import mahendra from "../assets/ExperienceImages/mahendra.webp";
import govt from "../assets/ExperienceImages/govt.webp";

import { HiBuildingOffice2 } from "react-icons/hi2";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  const experienceData = [
    {
      type: "work",
      date: "Oct 2024 - present",
      title: "Web Developer",
      company: "EKA Hr Consulting Pvt Ltd",
      subtitle: "Tiruchengode, Tamil Nadu",
      description: [
        "Currently engaged in <strong> automation projects, optimizing workflows and improving operational efficiency </strong> by implementing advanced technological solutions.",
        "Creating web solutions using <strong> HTML, CSS, JavaScript, and frameworks,</strong> while also building responsive WordPress sites with builders like<strong> Divi, Elementor, and Oxygen. </strong>",
      ],
      iconStyle: { background: "rgb(12, 248, 0)", color: "#000" },
      img: eka,
    },
    {
      type: "work",
      date: "Sep 2024 - Oct 2024",
      title: "Software Engineer Intern",
      company: "Qantler Technologies",
      subtitle: "Namakkal, Tamil Nadu",
      description: [
        "Worked on a <strong> POS, Kanban Board project </strong> using React, enhancing user interface and functionality through modern web development practices.",
        "Gained proficiency in <strong> jQuery, React </strong> contributing to various tasks and optimizing web components for better performance and user experience."
      ],
      img: qantler,
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    },
    {
      type: "work",
      date: "Apr 2022 - Jul 2022",
      title: "Full Stack Web Developer Intern",
      subtitle: "Tiruchengode, Tamil Nadu",
      company: "ITKrish Technologies",
      description: [
        "Developed front-end features using <strong> HTML, CSS, JavaScript, and Bootstrap, </strong> and contributed to the creation and optimization of user interfaces for client projects.",
        "Gained hands-on experience with the <strong> Laravel framework, assisting in database management, testing, and collaborating on client-facing projects </strong> to improve web application functionality and performance."
      ],
      img: itkrish,
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    },
    {
      type: "work",
      date: "Aug 2020 - June 2024",
      title: "B.Tech Information Technology",
      subtitle: "Mallasamudhiram, Tamil Nadu",
      company:"Mahendra Engineering College",
      description: [
        "Completed BTech with a <strong> CGPA of 7.98 </strong>, focusing on core <strong> IT subjects, problem-solving, and practical application </strong> of concepts in various technologies.",
        "Led a <strong> final year mini and major project, earning the best performance team award. Actively participated in seminars and technical events, </strong> showcasing leadership and team coordination skills."
      ],
      img: mahendra,
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    },
    {
      type: "work",
      date: "June 2018 - Apr 2020",
      title: "HSC",
      subtitle: "Tiruchengode, Tamil Nadu",
      company: "Govt Boys Hr Sec School",
      img: govt,
      description: ["Completed with a score of <strong> 69.5%, specializing in Computer Science,</strong> where I developed a strong foundation in programming and technical concepts."],
      iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
    },
    {
      type: "work",
      date: "June 2017 - Apr 2018",
      title: "SSLC",
      subtitle: "Tiruchengode, Tamil Nadu",
      company: "Govt Boys Hr Sec School",
      img: govt,
      description: ["Completed with a <strong>score of 74.2%,</strong> laying the groundwork for my academic and technical skills development."],
      iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
    },
  ];

  return (
    <div className="exp bg-dark">
      <Header />
      <div className="content">
        <VerticalTimeline>
          {experienceData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element`}
              contentStyle={{
                background:
                  item.type === "work" ? "#FCF6F4" : "rgb(233, 30, 99)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${
                  item.type === "work" ? "#FCF6F4" : "rgb(233, 30, 99)"
                }`,
              }}
              date={item.date}
              iconStyle={item.iconStyle}
              lineColor={""}
              icon={<MdWork />}
            >
              <div className="row">
                <div className="col">
                  <h3 className="vertical-timeline-element-title text-dark">
                    {item.title}
                  </h3>
                </div>
                <div className="col">
                  <h6 className="vertical-timeline-element-title text-dark place">
                    {item.subtitle}
                  </h6>
                </div>
              </div>
              <h6 className="vertical-timeline-element-subtitle d-flex text-dark company">
                <HiBuildingOffice2 />
                &nbsp;
                <span>{item.company}</span>
              </h6>
              <ul className="text-dark mb-2">
                {item.description.map((desc, index) => (
                  <li
                    key={index}
                    className="list-unstyled points pt-1 pb-1"
                    dangerouslySetInnerHTML={{ __html: `🎯&nbsp;${desc}` }}
                  ></li>
                ))}
              </ul>

              <img
                src={item.img}
                alt="work"
                className="rounded-4"
                style={{
                  width: "100%",
                  height: "300px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px",
                }}
              />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
