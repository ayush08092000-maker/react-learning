import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import ProjectCard from './components/ProjectCard'


const App = () => {

  return (

    // Main application container
    <div className="min-h-screen bg-gray-300 p-8">

      <Navbar />

       {/* Display all dashboard cards */}
      <div className="grid grid-cols-3 gap-6 mt-8">

        <Dashboard />
        <Profile />
        <ProjectCard />

      </div>

    </div>

  )
}

export default App