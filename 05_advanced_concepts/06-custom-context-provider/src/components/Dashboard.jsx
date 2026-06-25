import React, { useContext } from 'react'
import ProjectContext from '../context/ProjectContext'


const Dashboard = () => {

  // Get projects count from ProjectContext
  const {projects} = useContext(ProjectContext);

  return (

    <div className="bg-white p-6 rounded-xl shadow">


      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      {/* Display total projects */}
      <p className="mt-4">
        Total Projects : {projects}
      </p>


    </div>

  )
}

export default Dashboard