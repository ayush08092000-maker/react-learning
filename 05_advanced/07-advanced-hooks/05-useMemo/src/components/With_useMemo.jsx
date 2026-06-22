/*
 * useMemo:
 
 * Memoizes (caches) calculated value between renders
 
 * Used for:
        - Expensive calculations
        - Avoid unnecessary recalculation
 
 * Component still re-renders,
   but cached calculation is reused
 
 * Runs again only when dependency changes
 
 * Syntax:
        const value = useMemo(() => {
            return calculation()
        }, [dependency])
 
 */

import React, { useState, useMemo } from 'react'


const With_useMemo = () => {

    // State changes cause component re-render
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    function changeCount(){
        setCount(prev=> prev + 1)       // update count state
    }

    // Heavy calculation function
    function expensiveCalculation(){
        console.log(`Calculating expensive function with useMemo...`);
        let total = 0; 

        // Expensive loop
        for(let i=0; i<=1000000000; i++){
            total += i;
        }        

        return total;
    }

    // useMemo caches result and skips recalculation if dependency is same
    // Recalculates only when text changes
    const result = useMemo(() => expensiveCalculation(), [text])



  return (
    <div>
        <div className='root' >

            {/* Cached calculation result */}
            <h1>result: {result}</h1>

        {/* Count update causes re-render but useMemo prevents recalculation */}
            <p style={{fontSize:'30px', fontWeight:'bold'}} >count: {count}</p>
            <button onClick={changeCount} >
                click
            </button>

        {/* Input update causes re-render & calculation will run again */}
            <input type="text" value={text} 
                style={{backgroundColor:'aqua'}}
                onChange={(e)=> setText(e.target.value)}
            />

        </div>
    </div>
  )
}

export default With_useMemo