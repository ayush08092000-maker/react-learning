import React, { useState } from 'react'
import College from './components/College'
import ContextData from './context/ContextData'

const App = () => {

  // Create state to store selected subject
  const [subject, setSubject] = useState('')

  // State for student name
  const [student, setStudent] = useState('Ayush')
  
   // State for course name
  const [course, setCourse] = useState('MCA')

  return (

    // Share data globally using Context Provider
    <ContextData.Provider value={{ subject, student, setStudent, course, setCourse }} >

      <div style={{background:'yellow', padding:25}} >

        {/* Update subject when user select option */}
        <select value={subject} onChange={(e)=> setSubject(e.target.value)} >
          <option value="">Select Subject</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
        </select>

        {/* Reset subject value */}
        <button onClick={()=> setSubject('')}>Clear</button>

        <h1>Context Data</h1>

        < College />

      </div>
    </ContextData.Provider>
  )
}

export default App