/*
    Without useMemo Example:

    Problem: 
        ***web page becomes slow & expensive*** becsuse =>
            - Component re-renders whenever any state changes.
            - Expensive calculations inside component body run again
              on every render.

    Here:
        count change → re-render → expensiveCalculation runs
        text change  → re-render → expensiveCalculation runs

    Solution:
        useMemo → cache calculation result
        and run again only when dependency changes
*/


import React, { useState } from 'react'


const Without_useMemo = () => {

    // State update causes component re-render
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')


    function changeCount(){
        setCount(prev=> prev + 1)       // triggers re-render
    }

    // Expensive function (heavy calculation)
    function expensiveCalculation(){
        console.log(`Calculating expensive function without useMemo...`);
        let total = 0; 

        // Large loop makes calculation slow
        for(let i=0; i<=1000000000; i++){
            total += i;
        }        

        return total;
    }

    /*
        Problem:
            it runs on EVERY render:
                - 'count' update
                - 'input' typing
    */
    const result = expensiveCalculation();


    // Update input state
    function inputHandler(e){
        setText(e.target.value)     // triggers re-render
    }


  return (
    <div className='root' >

        {/* Display expensive calculation result */}
        <h1>result: {result}</h1>

        {/* Display Count state */}
        <p style={{fontSize:'30px', fontWeight:'bold'}} >
            count: {count}
        </p>

        <button onClick={changeCount} >
            click
        </button>

    {/* Typing also causes re-render, therefore expensiveCalculation runs again*/}
        <input type="text" value={text} 
            style={{backgroundColor:'aqua'}}
            onChange={inputHandler}
        />

    </div>
  )
}

export default Without_useMemo