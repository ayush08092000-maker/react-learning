import React, { useState } from 'react'
import ProjectContext from './ProjectContext';

const ProjectProvider = ({children}) => {

    // Store total projects count
    const [projects, setProjects] = useState(5);

    // Function to increase project count.
    const addProject = () => {
        setProjects(prev => prev + 1);
    }

    // Function to decrease project count.
    const removeProject = () => {
        setProjects(prev => prev > 0 ? prev - 1 : prev);
    }

  return (

    // Share project data globally
    <ProjectContext.Provider value={{projects, addProject, removeProject}}>
        {children}
    </ProjectContext.Provider>

  )
}

export default ProjectProvider