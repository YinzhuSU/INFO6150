import React, { useState } from "react";
import educations from "./jsons/educations.json";

const Educations = () => {
    const [darkMode, setDarkMode] = useState("lightMode")
    console.log(darkMode)
    const darkModeHelper = () => {
        setDarkMode(darkMode === "" ? "darkModeActivite" : "")
    }

    return <>
        <button onClick={darkModeHelper}>Dark Mode</button>
        {
            educations.map((education, index) => (
                <div key={index} className={`individualEducation ${darkMode}`}>
                    {/* What is this key={index} used for??? */}
                    <h3> {education.institution} </h3>
                    <h4>{education.degree}</h4>
                    <h4>{education.major}</h4>
                    <h4>{education.location}</h4>
                    <h4>{education["date-range"]}</h4>
                </div>
            )) //!!! It has to be (()), not({})!!

        }
    </>
}

export default Educations

