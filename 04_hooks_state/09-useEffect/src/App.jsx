/* useEffect : it is used to perform "side effects" in React components. or
               used for automatic actions after a component loads or updates.

side effect Ex.: 
             API calls
             Timers
             Data fetching
             DOM upadates   

Syntax:      useEffect(() => {
                // code goes here
             }, []);         
    "empty array []" means:👉 “Run only once” (when the component loads)

Main Types of useEffect: 
    | Syntax                         | Meaning                     |
    | ------------------------------ | --------------------------- |
    | `useEffect(() => {})`          | Runs after every render     |
    | `useEffect(() => {}, [])`      | Runs only once              |
    | `useEffect(() => {}, [value])` | Runs when the value changes |

*/

import React, { useEffect } from "react";
import {useState} from 'react'


const App = () => {
  
  // Ex 1 → Run Once (automaticaly) When Component Loads
  useEffect(() => {
    console.log("Component Loaded"); //print on console when web page loaded.
  }, []);
// Note: if empty arr [] not used then it runs on each & every change/updates

  // Ex 2 → Run When State Changes
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(() => {
    console.log(`value of A is changed`);    
  },[a])

  useEffect(() => {
    console.log(`value of B is changed`); 
  },[b])

// Note: both run once automaticaly on firste reder. then run on 
//       condition [a]/[b] on the basis of click button.

  return (
    <div className="main">
      
      <div>
        <h1>value of A is {a}</h1>
        <h1>value of B is {b}</h1>
      </div>

      <div className="box">
        <button onClick={()=> {
          setA(a+1)
        }}>
          change A
        </button>

        <button onClick={()=> {
          setB(b-1)
        }}>
          change B
        </button>
      </div>

    </div>
  )
}

export default App

