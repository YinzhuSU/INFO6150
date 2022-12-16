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

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



const App = () => {

    // const [page, setPage] = useState("Home")
    // const pageHelper = (pageName) => {
    //     setPage(pageName);
    // }

    return <>
        <h1> Yinzhu Su </h1>
        <img src={selfie} alt="Yinzhu Su's Image" className="homeImage" />

        {/* <div className="navigitorBar">
            <h4 className="indexButton" onClick={() => pageHelper("Home")}>Home</h4>
            <h4 className="indexButton" onClick={() => pageHelper("Educations")}>Educations</h4>
            <h4 className="indexButton" onClick={() => pageHelper("Technical Skills")}>Technical Skills</h4>
            <h4 className="indexButton" onClick={() => pageHelper("Projects")}>Projects</h4>
            <h4 className="indexButton" onClick={() => pageHelper("Work Experiences")}>Work Experiences</h4>
            <h4 className="indexButton" onClick={() => pageHelper("Contact Information")}> Contact Information </h4>
            <a href="https://drive.google.com/file/d/1UJj32YOu1_wrwBjwSe6QgeiFBBbsHTFU/view?usp=sharing" target="_blank"><h4 className="indexButton"> Download My Resume</h4></a>
        </div> */}
        {/* 
        {(page === "Home") && <Home />}
        {(page === "Contact Information") && <ContactInformation />}
        {(page === "Educations") && <Educations />}
        {(page === "Technical Skills") && <TechnicalSkills />}
        {(page === "Projects") && <Projects />}
        {(page === "Work Experiences") && <WorkExperiences />} */}

        <div className="navigitorBar">
            <Link to="/home"><h4 className="indexButton"> Home </h4></Link>
            <Link to="/educations"><h4 className="indexButton"> Educations </h4></Link>
            <Link to="/skills"><h4 className="indexButton"> Technical Skills </h4></Link>
            <Link to="/projects"><h4 className="indexButton"> Projects </h4></Link>
            <Link to="/workexperiences"><h4 className="indexButton"> Work Experiences </h4></Link>
            <Link to="/contact"> <h4 className="indexButton"> Contact Information </h4> </Link>
            <a href="https://drive.google.com/file/d/1UJj32YOu1_wrwBjwSe6QgeiFBBbsHTFU/view?usp=sharing" target="_blank"><h4 className="indexButton"> Download My Resume</h4></a>
        </div>

        <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="educations" element={<Educations />} />
            <Route path="skills" element={<TechnicalSkills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="workexperiences" element={<WorkExperiences />} />
            <Route path="contact" element={<ContactInformation />} />
        </Routes>
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);