import React, { useState } from "react";
import skills from "./jsons/technicalSkills.json";

const TechnicalSkills = () => {

    return <>
        {
            skills.map((skill, index) => (
                <div className="individualSkill" key={index}>
                    <h4> {skill["Programming Languages"]} </h4>
                    <h4>{skill["Frameworks and Libraries"]}</h4>
                    <h4>{skill["Database, IDE, and Tools"]}</h4>
                </div>
            ))

        }
    </>
}

export default TechnicalSkills

