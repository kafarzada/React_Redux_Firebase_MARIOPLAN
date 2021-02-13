import React from 'react'

const ProjectDetails = (props) => {
    
    const id = props.match.params.id

    return (
        <div className="container section project-details">

            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque totam numquam magnam quo tempore in magni odit sequi architecto atque sed ut dolorem explicabo consequuntur nulla, ducimus est iste repellat.</p>    
                </div>
                <div className="card-action gret ligten-4 grey-text">
                    <div>Posted by the Ney Nnja</div>
                    <div>2nd Septemper, 2m</div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails