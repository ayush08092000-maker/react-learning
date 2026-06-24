/**
 * Problem:
 *      Objects/arrays get a new reference on every Parent re-render.
 *      React.memo sees it as "changed props" and re-renders Child.
 *
 * Solution:
 *      useMemo caches the object reference.
 *      Child re-renders only when memoized value changes.
 */

import React, { useMemo, useState } from 'react'
import Child from './Child';

const Parent = () => {

    // Updating this state causes Parent re-render
    const [count, setCount] = useState(0)

    // useMemo keeps same object reference between renders
    const user = useMemo(() => (
        {name: 'Ayush', age:22}
    ), [])

    console.log(`Parent rendered...`);
    

  return (
    <div className='root'>

        <h1>Parent Count: {count}</h1>  

        {/* Updating count re-renders Parent */}
        <button onClick={()=> setCount(prev=> prev+1)} >Increase Count</button>

        {/* Child skips render because user reference is same */}
        <Child user={user} />

    </div>
  )
}

export default Parent

