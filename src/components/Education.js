import React from "react";
import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "academics": {
    "section": {
      "enable_section": true,
      "title": "Education",
      "navbar_name": "/Academics",
      "description": "Courses that I have completed or am on track to complete. Current GPA: 3.24"
    },

    * "enable_section": <true or false> to enable/disable section
    * "title": "Is what is displayed on the h3 tag to distinguish the section"
    * "navbar_name": "Is what is displayed on the navbar"
    * "description": "subtitle below the title element to distinguish the section"

    "general": {
      "school": "St. Mary's University",
      "degree": "Bachelor of Science in Computer Science",
      "start_year": 2021,
      "end_year": 2025
    },

    * "school": "The name of your school/university"
    * "degree": "Name of the degree your obtaining"
    * "start_year": "School start year"
    * "end_year": "school end year"

    "years": [
      {
        "year": 2021,
        "semester": "Fall",
        "courses": [
          {
            "abbreviation": "CS 1310",
            "name": "C Programming I",
            "credits": 3.0
          },
          {
            "abbreviation": "MT 1411",
            "name": "Pre Calculus",
            "credits": 4.0
          },
          {
            "abbreviation": "EN 1311",
            "name": "Rhetoric and Composition",
            "credits": 3.0
          },
          {
            "abbreviation": "PL 1301",
            "name": "Introduction to Philosophy",
            "credits": 3.0
          }
        ]
      },

    * "years": [{semester 1}, {semester 2}, ...]
    * "year": "Year of that semester"
    * "semester": "Name of the semester Fall/Spring/Summer"
    * "courses": [{course 1}, {course 2}, ...]
    * Each course has a course prefix/abreviation, full name, and credits

*/

const Education = () => {
  // Extract the education data from the contentData file
  const education = contentData.academics;
  const educationItem = education.general;

  // Calculate the total credits for each year
  // const totalCreditsPerYear = education.years.map((year) => {
  //   return parseFloat(
  //     year.courses.reduce((total, course) => {
  //       return total + course.credits;
  //     }, 0)
  //   );
  // });

  // Render the education section
  return (
    <Fade triggerOnce={true}>
      <section id="education">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
              <div className="line-mf" />
                <h3 className="title-a">
                  {education.section.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="wrapper">
            <div className="content">
              <h1>
                {educationItem.school} @{" "}
                {educationItem.degree}
              </h1>
              <h4>
                {educationItem.start_date} -{" "}
                {educationItem.end_date}
              </h4>
              <Fade damping={0.1} triggerOnce={true}>
                <ul>
                  {educationItem.description.map(
                    (paragraph, paraIndex) => (
                      <li className="active" key={paraIndex}>
                        {paragraph}
                      </li>
                    )
                  )}
                </ul>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Education;
