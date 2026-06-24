/**
 * Problem:
 *      Functions get a new reference on every Parent re-render.
 *      React.memo sees it as "changed props" and re-renders Child.
 *
 * Solution:
 *      useCallback caches the function reference.
 *      Child re-renders only when function changes.
 */


import React, { useCallback, useState } from 'react'
import Child from './Child'


const Parent = () => {

    // Updating this state causes Parent re-render
    const [count, setCount] = useState(0)


    // useCallback keeps same function reference between renders
    const handleClick = useCallback(() => {

        console.log("Button clicked from Child")

    }, [])


    console.log("Parent rendered...")


    return (
        <div className='root'>

            <h1>Parent Count : {count}</h1>


            {/* Updating count re-renders Parent */}
            <button onClick={() => setCount(prev => prev + 1)}>
                Parent Count
            </button>


            {/* Child skips render because function reference is same */}
            <Child click={handleClick} />

        </div>
    )
}


export default Parent