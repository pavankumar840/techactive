import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


import Modal from 'react-modal'
import './assets/css/modal.css'

function ContactModal() {
    const history = useHistory()
    const  closeModal = () =>{
        setModalOpen(false)
        history.push('/')
    }

    const label_block = {
        width: '100%',
        fontSize: '14px'
    }
    const input_block = {
        borderRadius: '27px',
        padding: '10px',
        border: '1px solid #707070',
        width: '100%'
    }
    const text_block = {
        borderRadius: '27px',
        padding: '10px',
        border: '1px solid #707070',
        width: '100%',
        height: '100px'
    }
    const [modalOpen, setModalOpen] = useState(true)

    return (
        <div>
            <Modal isOpen={modalOpen}
                style={{
                    overlay: {
                        backgroundColor: 'gray',
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
                    <div className="col-md-6 col-12 p-5">
                        <h1 className="m-0"><b>LET'S TALK!</b></h1>
                        <h5 className="mb-4"><small>CALL ME OR SEND ME A REQUEST</small></h5>
                        <p className="m-0"><i className="fa fa-phone"></i> (200) 100 3000</p>
                        <p className="mb-4"><i className="fa fa-envelope"></i> (200) 100 3000</p>
                        <form>
                            <label style={label_block}><b>Adress e-mail</b></label>
                            <input type="email" placeholder="Adress e-mail" style={input_block} />
                            <label style={label_block}><b>Request</b></label>
                            <textarea placeholder="Type your request..." style={text_block}></textarea>
                            <div className="text-right mt-4"> <button className="btn">send</button></div>
                        </form>
                    </div>
                    <div className="col-md-6 col-12 bg-dark"></div>
                </div>

            </Modal>
        </div>
    )
}

export default ContactModal
