import React, { useState } from "react";
import { createRoot } from "react-dom/client"
import "./style.css"
import {
    Header,
    Educations,
    TechnicalSkills,
    Projects,
    WorkExperiences,
    ContactInformation,
    // Footer,
} from "./components/indexingHelper.js"

const App = () => {
    const [darkMode, setDarkMode] = useState("lightMode")
    console.log(darkMode)
    const darkModeHelper = () => {
        setDarkMode(darkMode === "" ? "darkModeActivite" : "")
    }
    console.log(darkMode)
    return <>
    
        <Header />
        <ContactInformation />
        {/* Question: How to make it when I click "Education" then only Education related component shown and other components disappear? */}
        <Educations />
        <TechnicalSkills />
        {/* <button onClick={darkModeHelper}>Dark Mode</button> But how can I pass this darkMode into other modules??? */}
        <Projects />
        <WorkExperiences />
        {/* <Footer /> */}
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />);