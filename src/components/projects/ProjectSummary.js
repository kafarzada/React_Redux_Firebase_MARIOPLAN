import React from 'react'

const ProjectSummary = (props) => {
    return (
    <div className="card  #616161 grey darken-2">
        <div className="card-content white-text">
            <span className="card-title">{props.project.title}</span>
            <p>{props.project.content}</p>
            <p className="grey-text">3rd Septemper, 2em</p>
        </div>
    </div>
    )
}

export default ProjectSummary