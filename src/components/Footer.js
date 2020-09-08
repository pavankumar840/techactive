import React from 'react'
import './assets/css/footer.css'

function Footer() {
    return (
        <footer>
           <div className="container">
           <div className="row">
                <div className="col-6 p-0">
                    <div className="row">
                        <div className="col-sm-5 col-12 p-0 d-flex align-items-center">
                            © 2018 UI43 - Free Templates
                </div>
                        <div className="col-sm-6 col-12 p-0 d-flex align-items-center">
                            <span className="fa fa-facebook"></span>
                            <span className="fa fa-twitter"></span>
                            <span className="fa fa-google"></span>
                            <span className="fa fa-linkedin"></span>
                            <span className="fa fa-youtube"></span>
                            <span className="fa fa-instagram"></span>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex  justify-content-center">
                    <ul className="f_nav mb-0">
                        <li >
                            <a >WORK</a>
                        </li>
                        <li >
                            <a >ABOUT ME</a>
                        </li>
                        <li >
                            <a >BLOG</a>
                        </li>
                        <li >
                            <a  >CONTACT</a>
                        </li>
                        <li >
                            <button className="btn">HIRE ME</button>
                        </li>
                    </ul>
                </div>
            </div>
           </div>
        </footer>

    )
}

export default Footer
