/*
useLayoutEffect Hook: 
    `useLayoutEffect` is a React Hook that runs after DOM updates but 
    **before the browser paints the screen**.
    It is similar to `useEffect`, but it runs synchronously.

Syntax: 
          useLayoutEffect(() => {
            // code

            return () => {
              // cleanup
            };
          }, [dependencies]);

Common Uses:
    Measure DOM elements
    Fix layout before showing UI
    Avoid screen flickering
    Work with DOM libraries

Remember:
    Prefer 'useEffect' for most cases.
    Use 'useLayoutEffect' only when DOM changes are needed before screen paint.

*/

import React from 'react'
import Test from './components/Test'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'

const App = () => {
  return (
    <div>
      
      <Test /> <hr />

      <Example1 /> <hr />

      <Example2 /> <hr />

      <Example3 /> 

    </div>
  )
}

export default App