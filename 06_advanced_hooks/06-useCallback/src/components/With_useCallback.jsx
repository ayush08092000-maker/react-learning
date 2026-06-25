/*
    useCallback:
        Caches function reference
        Component still re-renders but function is not recreated

        Without useCallback:
            render → new function ❌

        With useCallback:
            render → old function reference ✅

        Function recreated only when dependency changes
*/

import React, { useCallback, useRef, useState } from 'react'


const With_useCallback = () => {

    // State changes cause component re-render
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    // Stores previous function reference
    const oldFunction = useRef(null)


    // useCallback caches function reference
    // Function reference changes only when dependency changes
    const increment = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])


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

            <h1>With useCallback</h1>

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


export default With_useCallback