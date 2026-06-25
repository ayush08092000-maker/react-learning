/*
useRef:
    => useRef allows us to store values or access DOM elements directly, and 
       changing its value does not trigger a re-render.
    => useRef returns an object with a current property 
        => "refName.current"

It is commonly used for:
  => Updating useRef value doesn't re-render the component. (Case 1 => App.jsx)
  => "Accessing/Updating DOM elements"                      (case 2 => DOM.jsx)

*/

import { useEffect, useState, useRef } from 'react'
import DOM from './DOM';


function App_useCase1() {

  const [count, setCount] = useState(0);

  // normal var "Rerender" on each change/update. so it holds ititial value(0)
  let a = 0;  

  // useRef var persist updated value (becouse doesn't 'Rerender')
  let b = useRef(0);  


  // difference see in console let a has always => 1, but useref b => 1,2,3... 
  useEffect(() => {
    a = a + 1;
    console.log(`Rerendering... & The value of a is ${a}`);
    
    b.current = b.current + 1
    console.log(`Rerendering... & The value of b.current is ${b.current}`);     
  })

  return (
    <>
      <div className='container'>

        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <DOM />

      </div>

    </>
  )
}

export default App_useCase1
