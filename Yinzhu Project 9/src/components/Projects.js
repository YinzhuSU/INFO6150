import React, { useState } from "react";
import projects from "./jsons/projects.json";

const Projects = () => {

    return <>
        {
            projects.map((project, index) => (
                <div className="individualProject" key={index}>
                    <h4> {project.title} </h4>
                    <p> {project["date-range"]}</p>
                    {/* How to add a bullet head for earch row of description? */}
                    <p> {project.description}</p>
                </div>
            ))

        }
    </>
}

export default Projects

