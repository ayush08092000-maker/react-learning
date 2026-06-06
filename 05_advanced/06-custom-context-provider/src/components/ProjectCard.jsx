import React, { useContext } from 'react'
import ProjectContext from '../context/ProjectContext'


const ProjectCard = () => {

  // Get project data and functions from ProjectContext
  const {projects, addProject, removeProject} = useContext(ProjectContext);


  return (

    <div className="bg-white p-6 rounded-xl shadow ">

      <h2 className="text-2xl font-bold">
        Projects
      </h2>

      {/* Display completed projects */}
      <p className="mt-4">
        Completed : {projects}
      </p>

      <div className="mt-2 flex gap-4">

        {/* Increase project count */}
        <button 
          onClick={addProject}
          className="mt-5 bg-green-500 text-white px-4 py-2 rounded cursor-pointer 
          active:scale-95 transition flex items-center"
        >
          Add Project
        </button>

        {/* Decrease project count */}
        <button 
          onClick={removeProject}
          className="mt-5 bg-red-500 text-white px-4 py-2 rounded cursor-pointer 
          active:scale-95 transition flex items-center"
        >
          Remove Project
        </button>

      </div>


    </div>

  )
}

export default ProjectCard