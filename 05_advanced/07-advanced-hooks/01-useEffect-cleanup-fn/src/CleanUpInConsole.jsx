import React, {useState, useEffect } from 'react'

const CleanUpInConsole = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Run useEffect ${count}`);

    // Cleanup function runs before component unmounts or before useEffect runs again.
    return () => {
      console.log(`Clean up ${count}`);      
    }
    
  },[count])

  return (
    <div>
      <h1>Count : {count}</h1>

      <button
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>

    </div>
  )
}

export default CleanUpInConsole