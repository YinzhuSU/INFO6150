import React from "react"
import backgroundPic from "../images/IMG_1118.JPG"

const Header = () => {
    return <>
        <h1> Portfolio of Yinzhu Su </h1>
        <div className="navigitorBar">
            <h4 className="indexButton">Education</h4>
            <h4 className="indexButton">Technical Skills</h4>
            <h4 className="indexButton">Projects</h4>
            <h4 className="indexButton">Work Experience</h4>
            <h4 className="indexButton"> Contact Information </h4> 
            <a href="https://drive.google.com/file/d/1UJj32YOu1_wrwBjwSe6QgeiFBBbsHTFU/view?usp=sharing" target="_blank"><button> Download My Resume</button></a> 
        </div>
        {/* <img src={backgroundPic}></img> */}
    </>
}

export default Header;