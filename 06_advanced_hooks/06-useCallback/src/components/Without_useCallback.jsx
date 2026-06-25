/*
    Without useCallback Example:

    Problem:
        Component re-renders whenever state changes

        Normal functions are recreated
        on every re-render

    Here:
        count change → re-render
        text change  → re-render

        increment function gets new reference
        every time

    Solution:
        useCallback → cache function reference
*/

import React, { useRef, useState } from 'react'


const Without_useCallback = () => {

    // State changes cause component re-render
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    // Stores previous function reference
    const oldFunction = useRef(null)


    // New function created on every render
    function increment(){
        setCount(prev => prev + 1)
    }


    // Compare previous and current function "reference"
    if(oldFunction.current === increment){
        console.log("Same function ✅")
    }
    else{
        console.log("New function created ❌")
    }


    // Save current function reference for next render
    oldFunction.current = increment



    return (

        <div className='root'>

            <h1>Without useCallback</h1>

            <h2>Count: {count}</h2>

            <button onClick={increment}>
                Increment
            </button>


            {/* Updating state causes re-render */}
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Type here...'
            />

        </div>
    )
}


export default Without_useCallback