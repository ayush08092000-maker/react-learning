import React, { useContext } from 'react'
import Subject from './Subject'
import ContextData  from '../context/ContextData'

const Student = () => {

    // Get student data from context
    const {student, setStudent} = useContext(ContextData);

    // Change student name
    const changeName = () => {
        setStudent(student === "Ayush" ? "Rahul" : "Ayush");
    }

  return (
    <div style={{background:'green', padding:25, margin:20 }} >
        <h1>Student : {student}</h1>
        <button onClick ={changeName}>Change Name</button>
        < Subject/>
    </div>
  )
}

export default Student