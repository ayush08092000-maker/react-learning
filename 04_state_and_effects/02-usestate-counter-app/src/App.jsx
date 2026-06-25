import React, { useState } from 'react'   // here import usestate from react

// Basic syntax -> const [state, setState] = useState(initialValue);

const App = () => {

  const [num, setNum] = useState(0) // num => current value
                                    // 0 => initial value of num
                              // setNum() => is a fn. used to upadate the value.

  let increaseNum = () =>{
    setNum(num+1)             // set num will change/update the value of num.
  }                           // this fn will increase the value of num by 1

  let decreaseNum = () =>{
    setNum(num-1)             // this fn will decrease the value of num by 1
  }

  let jum5Num = () =>{
    setNum(num+5)             // this fn will increase num by 5
  }

  // let resetCounter = () =>{   
  //   setNum(0)                 // this fn set the value of num is 0
  // }                  // directaly use this fn in reset button (alternate method)

  return (
    <div>
      <h1>{num}</h1>
      <div className="box">
        <div className="row">
            {/* event accure on click ( it change the value of num) */}
          <button onClick={decreaseNum}>Decrease</button> 
          <button onClick={jum5Num}>Increase by 5</button>
        </div>

        <div className="row">          
          <button onClick={increaseNum}>Increase</button>
          <button onClick={() => setNum(0)} >Reset Counter</button>
        </div>
      </div>
    </div>
  )
}

export default App