import React from "react";
import Skilldata from "../content.json";
import { Fade } from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "about_me": {
    "section": {
      "enable_section": true,
      "title": "~/About",
      "navbar_name": "/About",
      "description": "Brief information about me and some of my interests."
    },


    * "enable_section": <true or false> to enable/disable section
    * "title": "Is what is displayed on the h3 tag to distinguish the section"
    * "navbar_name": "Is what is displayed on the navbar"
    * "description": "subtitle below the title element to distinguish the section"


    "headShotUrl": "../assets/portrait.png",
    "bio": [
      "I am currently studying computer science at St. Mary's University with a focus in computer science with a minor in mathematics. Recently, I was an undergrad research intern at the McNair Research Program of STMU, a Post-Baccalaureate Achievement Program. Some of my current goals are to build experience and to acquire meaningful connections for personal development.",
      "I have a profound interest in numerous types of software development such as machine learning, operating systems, and especially in full-stack development. I'm a huge desk setup and PC enthusiast. In my free time, I enjoy playing/analyzing chess games, online window shopping, thrifting, and playing Minecraft multiplayer servers."
    ],
    "skills_caption": "Some technologies I've worked with:",
    "skills": [
      "JavaScript ES6+",
      "React.js",
      "Node.js",
      "HTML & CSS",
      "Python 3",
      "Ubuntu LTS & Git"
    ]
  },

    * "headShotUrl": "link to your portrait/headshot"
    * "bio": ["bio paragraph 1", "bio paragraph 2"]
    * "skills_caption": "Skills caption"
    * "skills": ["Language 1", "Language 2", "Language 3", ...]

*/

const AboutMe = () => {
  const skills = Skilldata.skills;

  const firstHalf = skills.skills.slice(0, skills.skills.length / 2);
  const secondHalf = skills.skills.slice(skills.skills.length / 2);

  return (
    <Fade triggerOnce={true}>
      <section id="skills">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
              <div className="line-mf" />
                <h3 className="title-a">
                  {skills.section.title} 
                </h3>
                <p className="subtitle-a">{skills.section.description}</p>
              </div>
              <div>
                <div className="col-md-6">
                  <p className="about-me-desc">{skills.skills_caption}</p>
                  <div className="languages-list">
                    <ul>
                      {firstHalf.map((skill, index) => (
                        <Fade
                          delay={index * 200}
                          cascade={false}
                          triggerOnce={true}
                        >
                          <li key={index}>{skill}</li>
                        </Fade>
                      ))}
                    </ul>
                    <ul>
                      {secondHalf.map((skill, index) => (
                        <Fade
                          delay={index * 200}
                          cascade={false}
                          triggerOnce={true}
                        >
                          <li key={index}>{skill}</li>
                        </Fade>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default AboutMe;
