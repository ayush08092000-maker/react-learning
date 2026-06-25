/* useEffect:
         useEffect is a React Hook that is used to perform side effects in 
         functional components.

Syntax: 
        useEffect(() => {
          // side effect code
        }, [dependencies]);

useEffect cleanup function: 
    Cleanup function runs before component unmounts or before useEffect runs 
    again, not when the useEffect function finishes." ✅

        useEffect(() => {
          // effect code (start something)
          return () => {                  
            // cleanup code (stop/clear something)
          };
        }, [dependencies]);


*/

import React, { useEffect, useState } from "react";
import CleanUpInConsole from "./CleanUpInConsole";

function App() {

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);


  useEffect(() => {

    if (show) {

      const timerId = setInterval(() => {

        setCount((prev) => prev + 1);

      }, 1000);


      // cleanup function
      return () => {

        clearInterval(timerId);

      };

    }

  }, [show]);



  return (
    <div>

      <h1>Timer : {count}</h1> 

      <button onClick={() => setShow(!show)}>

        {show ? "Stop Timer" : "Start Timer"}   {/* Ternary Operator */}

      </button>

      <CleanUpInConsole/>

    </div>
  );
}

export default App;