/**
 * React.memo():
 *        React.memo is a higher order component that memoizes a component and 
 *        prevents unnecessary re-rendering when its props have not changed.
 * 
 * Higher Order Component (HOC)
 *        A Higher Order Component is a function that takes a "component" as 
 *        input and returns a new enhanced "component".
 * 
 * difference: 
 *        useMemo()     -> memoize VALUE
 *        React.memo    -> memoize COMPONENT
 *        useCallback() -> memoize FUNCTION 
 */

import React from 'react'
import Parent1 from './01_without-memo/Parent1'
import Parent2 from './02_with-memo/Parent2'


const App = () => {

  return (
    <div>
      
        <Parent1 /> <hr />

        <Parent2 />
        
    </div>
  )
}

export default App