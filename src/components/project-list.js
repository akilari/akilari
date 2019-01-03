import React from 'react'
import Markdown from './markdown'

const ProjectList = ({projectName,projectDescription, projectTitle}) => {
    return (
        <li>
            <h4>{projectName}</h4>
            <span>{projectTitle}</span>
            <Markdown markdown={projectDescription}/>
        </li>
    )
}

export default ProjectList