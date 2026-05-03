import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-500 flex justify-center items-center">
      
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUxm-2Z1WOV-BAwf3gSUCEZV6x1HQSIUl2w&s"
          alt="profile"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />

        <h2 className="text-2xl font-bold">Ayush Dubey</h2>
        <h3 className="text-black-900" >(Web Developer)</h3>
        <p className="text-gray-500 text-sm mt-2">
          MCA Student | Future Developer 🚀
        </p>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Follow
        </button>

      </div>

    </div>
  )
}

export default App