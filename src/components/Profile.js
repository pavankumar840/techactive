import React from 'react'
import { useHistory } from "react-router-dom";

import pic from './assets/images/profilePic.png';
import './assets/css/mediaIcons.css';
import './assets/css/button.css';

function Profile() {
    const history = useHistory();
    const resumePath = `resume`
    const hirePath = `contact`

    var main_block = {
        borderBottom: '1px solid #d6d6d6'
    }
    var user_pic = {
        width: '100%'
    }
    return (
        <div className="container">
            <div className="row d-flex align-items-center" style={main_block}>
                <div className="col-md-6 col-12">
                    <h1 className=""><small>Hello, I'm</small></h1>
                    <h1>Pavan Kumar</h1>
                    <p>Developer</p>
                    <div className="media_icons mt-5">
                        <span className="fa fa-facebook"></span>
                        <span className="fa fa-twitter"></span>
                        <span className="fa fa-google"></span>
                        <span className="fa fa-linkedin"></span>
                        <span className="fa fa-youtube"></span>
                        <span className="fa fa-instagram"></span>
                    </div>
                    <div className="mt-4">
                    <button className="btn mr-3" onClick={() => history.push(hirePath)}>HIRE ME</button>
                        <button className="btn" onClick={() => history.push(resumePath)}>SEE MY RESUME</button>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <img src={pic} alt="sample img" style={user_pic} />
                </div>
            </div>
        </div>
    )
}

export default Profile
