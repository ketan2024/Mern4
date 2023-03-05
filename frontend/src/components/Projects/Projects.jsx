import React from 'react';
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import "./Projects.css";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    
  }) => {
    
    return (
      <>
        <a href={url} className="projectCard" target="black">
          <div>
            <img src={projectImage} alt="Project" />
            <Typography variant="h5">{projectTitle}</Typography>
          </div>
          <div>
            <Typography variant="h4"> About Project</Typography>
            <Typography>{description}</Typography>
            <Typography variant="h6">Tech Stack: {technologies}</Typography>
          </div>
        </a>
  
        {isAdmin && (
          <Button
            style={{ color: "rgba(40,40,40,0.7)" }}
            > 
            <Delete />
          </Button>
        )}
      </>
    );
  };

const Projects = () => {

    const projects = [1];
  return (
    <div className="projects">
      <Typography variant="h3">Projects <AiOutlineProject /></Typography>

      <div className="projectsWrapper">
           {projects.map((project, index) => (
            <ProjectCard
   
    
    url="https://nextjs-crypto-api-dun.vercel.app/"
    projectImage="https://www.codavilla.com/static/1f9d142a9f66768e24870b9c9cd93115/db955/crypto-1.png"
    projectTitle="Bitcoin Cryptocurrency Finance Price Tracker App"
    description="Developed a Bitcoin Cryptocurrency Finance Price Tracker App in which we used Crypto API to 
    get the data.Users can search different bitcoin name and track there price using NextJS and ReactJs"
    technologies="NextJs, ReactJS, Crypto API"
  />

  
))}

{projects.map((project, index) => (
            <ProjectCard
   
    
    url="https://mern-portfolio4.onrender.com"
    projectImage="https://tse3.mm.bing.net/th?id=OIP.YhDJGxhx4HcypOCs5A5sLwHaE8&pid=Api&P=0"
    projectTitle="A Full Stack Portfolio Website Using MERN Stack "
    description="Developed an Portfolio Website in which I have shown my Work, Skills, Projects and Coding Profile"
    technologies="MongoDB, Express, React JS, Node JS, Three JS "
  />
  
))}
    
    </div>
    
    

    <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>


  );
};

export default Projects;