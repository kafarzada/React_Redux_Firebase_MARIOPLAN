import React from 'react'
import moment from 'moment'

const ProjectSummary = (props) => {
    console.log(props);
    
    return (
    <div className="card  #616161 grey darken-2">
        <div className="card-content white-text">
            <span className="card-title">{props.project.title}</span>
            <p>Posted by {props.project.authorFirstName} {props.project.authorLastName}</p>
            <p className="grey-text">{moment(props.project.createdAt.toDate()).calendar()}</p>
        </div>
    </div>
    )
}

export default ProjectSummary