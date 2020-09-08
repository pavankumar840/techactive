import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import Modal from 'react-modal'
import './assets/css/button.css'
import './assets/css/resumemodal.css'
function ResumeModal() {
    const history = useHistory()
    const  closeModal = () =>{
        setModalOpen(false)
        history.push('/')
    }

    const skills_level = {
        borderRadius: '0',
        height: '10px',
        alignItems: 'center'

    }
    const [modalOpen, setModalOpen] = useState(true)

    return (
        <div>
            <Modal isOpen={modalOpen}
                style={{
                    overlay: {
                        backgroundColor: 'gray',
                        overflow: 'auto'
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        top: '60px',
                        left: '120px',
                        right: '120px',
                        bottom: '60px',
                        border: '0',
                        padding: '25px',
                        height: 'fit-content'
                    }
                }}
                onRequestClose={closeModal}
            >
                <button className="close_btn" onClick={closeModal}>X</button>
                <h1 className="text-center pt-5">RESUME</h1>
                <div className="text-center p-5">
                    <button className="btn mr-3">Download PDF</button>
                    <button className="btn">Print</button>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-12 text-right add_border">
                        <h6>EXPERIENCE</h6>
                        <p>2017 - Present</p>
                        <p className="m-0"><b>Freelancer</b></p>
                        <p>Art Director</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis felis non tempor ullamcorper. Pellentesque cursus lectus a pulvinar dapibus. Nullam blandit aliquam ligula ut condimentum.
                        </p>
                        <p>2016 - 2017</p>
                        <p className="m-0"><b>The Best Agency</b></p>
                        <p>Art Director</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis felis non tempor ullamcorper. Pellentesque cursus lectus a pulvinar dapibus. Nullam blandit aliquam ligula ut condimentum.
                        </p>
                        <p>2016 - 2017</p>
                        <p className="m-0"><b>Better Agency</b></p>
                        <p>Art Director</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis felis non tempor ullamcorper. Pellentesque cursus lectus a pulvinar dapibus. Nullam blandit aliquam ligula ut condimentum.
                        </p>
                        <p>2016 - 2017</p>
                        <p className="m-0"><b>Good Agency</b></p>
                        <p>Art Director</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis felis non tempor ullamcorper. Pellentesque cursus lectus a pulvinar dapibus. Nullam blandit aliquam ligula ut condimentum.
                        </p>
                    </div>
                    <div className="col-sm-6 col-12 text-left">
                        <h6>EDUCATION</h6>
                        <p>2005 - 2010</p>
                        <p className="m-0"><b>UI/UX Design</b></p>
                        <p>LA University, USA</p>
                        <p><b>2002 - 2005</b></p>
                        <p className="m-0"><b>UI/UX Design</b></p>
                        <p>LA Collage of Art, USA</p>
                        <p><b>SKILLS</b></p>
                        <p>
                            <div className="row align-items-center">
                                <div className="col-sm-5 col-6 p-0">
                                    UI/UX Design
                                </div>
                                <div className="col-sm-7 col-6 p-0">
                                    <div class="progress" style={skills_level}>
                                        <div class="progress-bar bg-info pbr-1" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" role="progressbar"></div>
                                    </div>
                                </div>
                            </div>
                        </p>
                        <p>
                            <div className="row align-items-center">
                                <div className="col-sm-5 col-6 p-0">
                                    Illustrator
                                </div>
                                <div className="col-sm-7 col-6 p-0">
                                    <div class="progress" style={skills_level}>
                                        <div class="progress-bar pbr-2" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </p>
                        <p>
                            <div className="row align-items-center">
                                <div className="col-sm-5 col-6 p-0">
                                    Photoshop
                                </div>
                                <div className="col-sm-7 col-6 p-0">
                                    <div class="progress" style={skills_level}>
                                        <div class="progress-bar pbr-3" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </p>
                        <p>
                            <div className="row align-items-center">
                                <div className="col-sm-5 col-6 p-0">
                                    Sketch
                                </div>
                                <div className="col-sm-7 col-6 p-0">
                                    <div class="progress" style={skills_level}>
                                        <div class="progress-bar pbr-4" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </p>
                        <p><b>AWARDS</b></p>
                        <p>2016 <b>THE BEST APP INTERFACE</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis felis non tempor ullamcorper. Pellentesque cursus lectus a pulvinar dapibus. Nullam blandit aliquam ligula ut condimentum.</p>
                        <p>2016 <b>THE BEST APP INTERFACE</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis felis non tempor ullamcorper. Pellentesque cursus lectus a pulvinar dapibus. Nullam blandit aliquam ligula ut condimentum.</p>
                    </div>
                </div>
                <div className="text-center p-5">
                    <button className="btn">hire me</button>
                </div>
            </Modal>
        </div>
    )
}

export default ResumeModal
