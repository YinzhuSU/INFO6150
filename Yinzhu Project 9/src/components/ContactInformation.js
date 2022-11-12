import React, { userState } from "react";

const ContactInformation = () => {
    return <>{
        <div className="contactInformation">
            <p>Phone: (408)802-9843</p>
            {/* <p>Email: yinzhusu@gmail.com</p> */}
            <a href="yinzhusu@gmail.com" target="_blank"><p>yinzhusu@gmail.com</p></a>
            <p>Location: Sillicon Valley Bay Area</p>
            <a href="https://github.com/YinzhuSU" target="_blank"><p>GitHub: https://github.com/YinzhuSU</p></a>
            <a href="https://www.linkedin.com/in/yinzhu-su-200513159" target="_blank"><p>Linkedin: https://www.linkedin.com/in/yinzhu-su-200513159</p></a>
        </div>
    }
    </>
}

export default ContactInformation