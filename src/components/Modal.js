import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


import Modal from 'react-modal'
import './assets/css/modal.css'
Modal.setAppElement('#root')

function Modals() {
    const history = useHistory(); 
    const [modalOpen, setModalOpen] = useState(true)

    const  closeModal = () =>{
        setModalOpen(false)
        history.push('/')
    }
    return (
        <div>
            <Modal isOpen={modalOpen}
                style={{
                    overlay: {
                        backgroundColor: 'gray'
                    },
                    content: {
                        display: 'flex',
                        top: '60px',
                        left: '120px',
                        right: '120px',
                        bottom: '60px',
                        border: '0',
                        padding: '0px'
                    }
                }}
                onRequestClose={closeModal}
            >
                <button className="close_btn" onClick={closeModal}>X</button>
                <div className="row">
                    <div className="col-md-8 col-12 bg-dark project-img">

                    </div>
                    <div className="col-md-4 col-12 project_block">
                        <div>
                            <h1 className="mb-0">PROJECT TITLE</h1>
                            <div className="mb-3"><span>CATGEORY | 2018</span></div>
                            <p className="m-0"><b>client:</b></p>
                            <p><i>creative agency</i></p>
                            <p className="project_decp">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus.
                                Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum
                                consequat est consequat eu. Quisque aliquet a ipsum nec tincidunt. Nulla vitae rhoncus leo. Praesent dui
                                sapien, bibendum quis tempus dictum, auctor ac dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                et ultrices posuere cubilia Curae; Donec at mauris porta, ullamcorper sem quis, lobortis sem. Donec sit amet
                                aliquet dui, at varius est. Phasellus porttitor finibus neque vel vehicula. Duis in nulla egestas, dignissim elit at,
                                imperdiet eros. Integer tristique posuere purus. Suspendisse placerat, quam vitae ullamcorper sollicitudin, dui ligula molestie massa,
                    </p>
                        </div>
                        <div className="nav_buttons">
                            <button className="float-left">&#8249; Previous</button>
                            <button className="float-right">Next &#8250;</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Modals
