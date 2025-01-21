import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import SideProjects from "./components/SideProjects";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/style.css";
import content from "./content.json";

// Note that the section.enable_section has to equal true in
// order for that specific component to load in the app.js

function App() {
  const { about_me, skills, academics, experience, projects } = content;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {about_me.section.enable_section && <About />}
              {skills.section.enable_section && <Skills />}
              {academics.section.enable_section && <Education />}
              {experience.section.enable_section && <WorkExperience />}
              {projects.section.enable_section && <SideProjects />}
              <Footer />
            </div>
          }
        ></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
