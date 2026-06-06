import React, { useContext } from 'react'
import ContextData  from '../context/ContextData'


const Subject = () => {

    // Get subject value from context
    const data = useContext(ContextData)

  return (
    <div style={{background:'lightpink', padding:30, margin:20 }} >
        
         {/* Display selected subject */}
        <h1>Subject : {data.subject} </h1>

    </div>
  )
}

export default Subject