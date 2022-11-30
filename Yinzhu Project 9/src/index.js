import React, { useState } from "react";
import selfie from "./images/IMG_1123.JPG"
import { createRoot } from "react-dom/client"
import "./style.css"
import {
    Home,
    Educations,
    TechnicalSkills,
    Projects,
    WorkExperiences,
    ContactInformation,
} from "./components/indexingHelper.js"

const App = () => {

    const [page, setPage] = useState("Home")
    const pageHelper = (pageName) => {
        setPage(pageName);
    }

    return <>
        <h1> Yinzhu Su </h1>
        <img src={selfie} alt="Yinzhu Su's Image" className="homeImage" />

        <div className="navigitorBar">
            <h4 className="indexButton" onClick={() => pageHelper("Home")}>Home</h4>
            <h4 className="indexButton" onClick={() => pageHelper("Educations")}>Education</h4>
            <h4 className="indexButton" onClick={() => pageHelper("Technical Skills")}>Technical Skills</h4>
            <h4 className="indexButton" onClick={() => pageHelper("Projects")}>Projects</h4>
            <h4 className="indexButton" onClick={() => pageHelper("Work Experiences")}>Work Experience</h4>
            <h4 className="indexButton" onClick={() => pageHelper("Contact Information")}> Contact Information </h4>
            <a href="https://drive.google.com/file/d/1UJj32YOu1_wrwBjwSe6QgeiFBBbsHTFU/view?usp=sharing" target="_blank"><h4 className="indexButton"> Download My Resume</h4></a>
        </div>

        {(page === "Home") && <Home />}
        {(page === "Contact Information") && <ContactInformation />}
        {(page === "Educations") && <Educations />}
        {(page === "Technical Skills") && <TechnicalSkills />}
        {(page === "Projects") && <Projects />}
        {(page === "Work Experiences") && <WorkExperiences />}
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />);