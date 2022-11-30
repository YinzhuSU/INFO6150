import React, { useState } from "react";
import educations from "./jsons/educations.json";


const Educations = () => {
    return <>
        {
            educations.map((education, index) => (
                <div key={index} className="individualEducation">
                    {/* What is this key={index} used for??? */}
                    <h3> {education.institution} </h3>
                    <h4>{education.degree}</h4>
                    <h4>{education.major}</h4>
                    <h4>{education.location}</h4>
                    <h4>{education["date-range"]}</h4>
                    <img src={education.image} alt="University Logo" className="universityLogos"></img>
                </div>
            )) //!!! It has to be (()), not({})!!

        }
    </>
}

export default Educations

