import React from 'react';
import "./About.css";
import { Typography } from "@mui/material";
const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer"><Typography>Learning New 
          Things And
           Defeating
           My 
           Fear Is
            The 
            Reason Why I Wake Up At 5:00 AM</Typography></div>
        <div className="aboutContainer2">
            <div>
                <img src="https://avatars.githubusercontent.com/u/69232422?s=400&u=54a79873570d6cec2302b9dc2f44a2a2fe0a60fd&v=4"
                 alt="Ketan"
                 className="aboutAvatar"
                 />

                <Typography variant="h4"
                style={{ margin: "1vmax 0", color: "black" }}>KETAN</Typography>
                <Typography>Full Stack Developer</Typography>
                <Typography style={{ margin: "1vmax 0"}}>I am a Student</Typography>

            </div>
           <div>
           <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            I love to build efficient & logical Backend using Node.Js. I also design & code attractive frontend using React.
            Technologies I used are MongoDb as Database.
            Express & NodeJs as Backend & React for frontend. 
          </Typography>
           </div>
        </div>

    </div>
      );
};

export default About;

