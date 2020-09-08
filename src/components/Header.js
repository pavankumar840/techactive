import React from 'react'
import { useHistory } from "react-router-dom";


import './assets/css/header.css'
import './assets/css/button.css'
import pic from './assets/images/profilePic.png'
function Header() {
    const history = useHistory()
    const path = `contact`

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <span className=" d-flex align-items-center">
                    <div className="header_user"><img src={pic} /></div>
                    <div>
                        <h5 className="m-0"><b>Pavan Kumar</b></h5>
                        <p className="m-0">Devloper</p>
                    </div>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="burger"></div>
                    <div className="burger"></div>
                    <div className="burger"></div>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">WORK</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn" onClick={() => history.push(path)}>HIRE ME</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
