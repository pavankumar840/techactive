import React from 'react'
import { useHistory } from "react-router-dom";

import selfiPic from './assets/images/profilepic2.png'
function AboutMe() {
    const history = useHistory();
    const resumePath = `resume`
    const hirePath = `contact`
    
    var user_pic = {
        width: '100%'
    }

    const l_text = {
        fontSize: "90px",
        color: "#b3b1b1",
        lineHeight: "1"
    }
    return (
        <div className="container">
            <div className="row d-flex align-items-center mt-5">
                <div className="col-sm-6 col-12">
                    <img src={selfiPic} style={user_pic} />
                </div>
                <div className="col-sm-6 col-12">
                    <h1>ABOUT ME</h1>
                    <span style={l_text}><b>WHO AM I</b></span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="mt-5">
                        <button className="btn mr-3" onClick={() => history.push(hirePath)}>HIRE ME</button>
                        <button className="btn" onClick={() => history.push(resumePath)}>SEE MY RESUME</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
