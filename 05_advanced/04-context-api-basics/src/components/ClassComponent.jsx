import React, { useContext } from 'react'
import Student from './Student'
import ContextData from '../context/ContextData'

const ClassComponent = () => {

     // Get course data from context
    const {course, setCourse} = useContext(ContextData);

    // Update course name
    const changeCourse = () => {
        setCourse(course === 'MCA' ? 'MBA' : 'MCA');
    }

  return (
    <div style={{background:'skyblue', padding:25, margin:20 }} >
        <h1>Class : {course}</h1>
        <button onClick={changeCourse} >Change Course</button>

        < Student/>
    </div>
  )
}

export default ClassComponent