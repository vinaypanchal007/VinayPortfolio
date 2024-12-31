import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaLinkedin, FaPhoneAlt, FaBootstrap, FaBookOpen, FaGraduationCap } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";
import { MdEmail } from 'react-icons/md';
import { BiCertification } from "react-icons/bi";
import '../Styles/Home.css';
import image from '../Images/Vinay.png';
import Resume from '../File/Vinay Panchal.pdf';

function Home() {

  const resumeDownload = () => {
    const link = document.createElement('a'); 
    link.href = '/path-to-resume/Vinay_Panchal.pdf'; 
    link.download = 'Vinay_Panchal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  const projects = [
    { title: "Airline Website", description: "MERN stack website for user to book flight tickets", link: "https://github.com/vinaypanchal007/Voyager--Full-Stack-Airline-Website-" },
    { title: "Live Weather Website", description: "Front End Website made using ReactJS for searching live weather", link: "https://github.com/vinaypanchal007/Live_Weather_Website" },
    { title: "News Website", description: "Front End Website made using ReactJS for searching news", link: "https://github.com/vinaypanchal007/News_Website" },
  ];

  return (
    <div id="home">

      <div id='nav'>
        <div id="nav-left">
          <h1>VP</h1>
        </div>
        <div id="nav-right">
          <a href="https://github.com/vinaypanchal007" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/vinaypanchal1206" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>

      <div id="box">
        <div id="pic">
          <img src={image} alt="Vinay Panchal" />
        </div>
        <div id="intro">
          <p id="name">Hi, I'm Vinay Panchal</p>
          <p>
            I'm a Full Stack Developer from Mumbai, with a focus on building modern and
            efficient web applications. I work with technologies like React,
            Node.js, Express, and MongoDB to create solutions that are both
            user-friendly and scalable. I enjoy tackling both front-end and
            back-end challenges, and I'm always looking for ways to improve my
            skills and stay up-to-date with the latest tech. Check out my
            projects below to see what I’ve been working on!
          </p>
          <a href={Resume} download="Vinay_Panchal_Resume.pdf" id='download-cv'>
            Download Resume
          </a>
        </div>
      </div>

      <div id="skill">
        <h1>Skills</h1>
        <div id="skills-container">
          <div className="skill">
            <div className="skillone"> 
              <FaHtml5 className="skill-icon html" />
              <p>HTML</p>
            </div>
            <progress value="100" max="100"></progress>
          </div>
          <div className="skill">
            <div className="skillone">
              <FaCss3Alt className="skill-icon css" />
              <p>CSS</p>
            </div>
            <progress value="90" max="100"></progress>
          </div>
          <div className="skill">
            <div className="skillone"> 
              <FaJsSquare className="skill-icon js" />
              <p>JavaScript</p>
            </div>
            <progress value="80" max="100"></progress>
          </div>
          <div className="skill">
            <div className="skillone"> 
              <FaReact className="skill-icon react" />
              <p>React</p>
            </div>
            <progress value="85" max="100"></progress>
          </div>
          <div className="skill">
            <div className="skillone"> 
              <FaNodeJs className="skill-icon node" />
              <p>Node.js</p>
            </div>
            <progress value="75" max="100"></progress>
          </div>
          <div className="skill">
            <div className="skillone"> 
              <SiExpress className="skill-icon express" />
              <p>Express</p>
            </div>
            <progress value="70" max="100"></progress>
          </div>
          <div className="skill">
            <div className="skillone"> 
              <SiMongodb className="skill-icon mongo" />
              <p>MongoDB</p>
            </div>
            <progress value="75" max="100"></progress>
          </div>
          <div className="skill">
            <div className="skillone"> 
              <RiTailwindCssFill className="skill-icon node" />
              <p>Tailwind</p>
            </div>
            <progress value="85" max="100"></progress>
          </div>
          <div className="skill">
            <div className="skillone"> 
              <FaBootstrap className="skill-icon node" />
              <p>Bootstrap</p>
            </div>
            <progress value="75" max="100"></progress>
          </div>
        </div>
      </div>

      <div id="education">
        <h1>Education</h1>
        <div id="skills-container">
          <div className="skill">
            <div className="skillone"> 
              <BiCertification className="skill-icon html" />
              <p>Full Stack Developer Certification (MERN)</p>
            </div>
            <p>Imarticus Learning Institute</p>
          </div>
          <div className="skill">
            <div className="skillone"> 
              <FaGraduationCap className="skill-icon html" />
              <p>Bachelor's of Science (Information Technology)</p>
            </div>
            <p>Mumbai University</p>
          </div>
          <div className="skill">
            <div className="skillone"> 
              <FaBookOpen className="skill-icon html" />
              <p>Higher Secondary School (H.S.C)</p>
            </div>
            <p>Maharashtra Board</p>
          </div>
          <div className="skill">
            <div className="skillone"> 
              <FaBookOpen className="skill-icon html" />
              <p>Secondary School (S.S.C)</p>
            </div>
            <p>Maharashtra Board</p>
          </div>
        </div>
      </div>

      <div id="projects">
        <h1>Projects</h1>
        <div id="project-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Github Link</a>
            </div>
          ))}
        </div>
      </div>

      <div id="contact">
        <h1>Contact Me</h1>
        <div id="contactdetail">
          <p>
            <MdEmail className="contact-icon" />
          </p>
          <p>
            vinayp.12601@gmail.com
          </p>
        </div>
        <div id="contactdetail">
          <p>
            <FaPhoneAlt className="contact-icon" />
          </p>
          <p>
            +91-8291411142
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
