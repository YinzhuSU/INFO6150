import React, { useState } from "react";
import skills from "./jsons/technicalSkills.json";

const TechnicalSkills = () => {
    const [darkMode, setDarkMode] = useState("lightMode")
    console.log(darkMode)
    const darkModeHelper = () => {
        setDarkMode(darkMode === "" ? "darkModeActivite" : "")
    }

    return <>
        <button onClick={darkModeHelper}>Dark Mode2</button>
        {
            skills.map((skill, index) => (
                <div key={index} className={`individualEducation ${darkMode}`}>
                    <h4> {skill["Programming Languages"]} </h4>
                    <h4>{skill["Frameworks and Libraries"]}</h4>
                    <h4>{skill["Database, IDE, and Tools"]}</h4>
                </div>
            ))

        }
    </>
}

export default TechnicalSkills

