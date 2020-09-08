import React from 'react'
import { useHistory } from "react-router-dom";

import './assets/css/button.css'
function Projects() {
    const history = useHistory();
    const projectDetails = `project-details`
    let carWidth = {
        padding: '0px'
    }
    let card_img = {
        height: '250px',
        background: '#6A696B',
        padding: '0px'
    }

    const projects = [
        {
            projectName: 'project 1',
            year: '2018',
            category: 'ecommerce'
        },
        {
            projectName: 'project 2',
            year: '2018',
            category: 'ecommerce'
        },
        {
            projectName: 'project 3',
            year: '2018',
            category: 'ecommerce'
        },
        {
            projectName: 'project 4',
            year: '2018',
            category: 'ecommerce'
        },
        {
            projectName: 'project 5',
            year: '2018',
            category: 'ecommerce'
        },
        {
            projectName: 'project 6',
            year: '2018',
            category: 'ecommerce'
        }
    ]
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center">
                <span className="m-2">All</span>
                <span className="m-2">App</span>
                <span className="m-2">Website</span>
                <span className="m-2">Interaction</span>
            </div>
            <div className="row">
                {projects.map((project, i) => (
                    <div className="col-md-4 col-sm-6 col-12 p-0 pr-3 pb-3" key={i} >
                        <div className="card" onClick={() => history.push(projectDetails)}>
                            <div className="card_img" style={card_img}></div>
                            <div className="card-body p-2">
                                <span>{project.category}</span>
                                <div className="d-flex justify-content-between">
                                    <div><b>{project.projectName}</b></div>
                                    <div><b>{project.year}</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button className="btn">Load more work</button>
            </div>
            <div className="modal fade" id="myModal">
            </div>
        </div>
    )
}

export default Projects
