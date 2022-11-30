import React, { userState } from "react";
import github from "../images/GitHub.png"
import linkedin from "../images/LinkedIn.png"

const ContactInformation = () => {
    return <>{
        <div className="contactInformation">
            <a href="https://github.com/YinzhuSU" target="_blank"><img src={github} id="githubLogo"></img></a>
            <b> <p> (408)802-9843 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; yinzhusu@gmail.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sillicon Valley - Bay Area </p> </b>
            {/* how to make this email address clickable? */}
            <a href="https://www.linkedin.com/in/yinzhu-su-200513159" target="_blank"><img src={linkedin} id="linkedinLogo"></img></a>

        </div>
    }
    </>
}

export default ContactInformation