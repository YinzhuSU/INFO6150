import React, { userState } from "react";
import workings from "./jsons/workExperiences.json"
import tencentLogo from "../images/Tencent.png"
// how to import local images from JSON?


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
                <img src={work.image} alt="Company Logo" className="companyImage"></img>
                {/* How to switch to a new line for each bullet? */}
            </div>
        ))

    }

    </>
}

export default WorkExperiences