import React, { userState } from "react";
import workings from "./jsons/workExperiences.json"

const WorkExperiences = () => {
    return <>{
        workings.map((work, index) => (
            <div className="individualWorkExperiences" key={index}>
                <h4>{work.company}</h4>
                <h5>{work.title}</h5>
                <p>{work["date-range"]}</p>
                <p>{work.location}</p>
                <p>{work.description}</p>
                <p>{work.skills}</p>
            </div>
        ))
    }
    </>
}

export default WorkExperiences