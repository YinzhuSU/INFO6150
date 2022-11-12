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
    Footer,
} from "./components/indexingHelper.js"

const App = () => {
    return <>
        <Header />
        {/* Question: How to make it when I click "Education" then only Education related component shown and other components disappear? */}
        <Educations />
        <TechnicalSkills />
        <Projects />
        <WorkExperiences />
        <ContactInformation />
        <Footer />
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />);