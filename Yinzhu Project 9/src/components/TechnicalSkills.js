import React, { useState } from "react";
import skills from "./jsons/technicalSkills.json";
import cassandra from "../images/icons/cassandra.png"
import firebase from "../images/icons/firebase.png"
import flask from "../images/icons/flask.png"
import HJC from "../images/icons/HJC.png"
import java from "../images/icons/java.png"
import matlab from "../images/icons/matlab.png"
import mongodb from "../images/icons/mongodb.png"
import node from "../images/icons/node.png"
import opencv from "../images/icons/opencv.png"
import python from "../images/icons/python.png"
import qt from "../images/icons/qt.png"
import react from "../images/icons/react.png"
import scikitlearn from "../images/icons/scikitlearn.png"
import sqlite from "../images/icons/sqlite.png"
import swift from "../images/icons/swift.png"


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
        <div className="icons">
            <img src={firebase} alt="firebase" className="icon"></img>
            <img src={flask} alt="flask" className="icon"></img>
            <img src={HJC} alt="HJC" className="icon"></img>
            <img src={java} alt="java" className="icon"></img>
            <img src={matlab} alt="matlab" className="icon"></img>
            <img src={mongodb} alt="mongodb" className="icon"></img>
            <img src={cassandra} alt="cassandra" className="icon"></img>
            <img src={node} alt="node" className="icon"></img>
            <img src={opencv} alt="opencv" className="icon"></img>
            <img src={python} alt="python" className="icon"></img>
            <img src={qt} alt="qt" className="icon"></img>
            <img src={react} alt="react" className="icon"></img>
            <img src={scikitlearn} alt="scikitlearn" className="icon"></img>
            <img src={sqlite} alt="sqlite" className="icon"></img>
            <img src={swift} alt="swift" className="icon"></img>
        </div>

    </>
}

export default TechnicalSkills

