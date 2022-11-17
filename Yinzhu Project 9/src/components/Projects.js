import React, { useState } from "react";
import projects from "./jsons/projects.json";

const Projects = () => {

    return <>
    {/* <h3> My Projects </h3> */}
        {
            projects.map((project, index) => (
                <div className="individualProject" key={index}>
                    <h4> {project.title} </h4>
                    <p> {project["date-range"]}</p>
                    {/* How to add a bullet head and new row for earch row of description in JSON? <br> or \n does not work!*/}
                    <p> {project.description}</p>
                </div>
            ))

        }
    </>
}

export default Projects

