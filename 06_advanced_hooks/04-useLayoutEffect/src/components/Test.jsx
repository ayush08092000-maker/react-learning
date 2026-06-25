/*
useLayoutEffect runs before the browser paints the UI.
useEffect runs after the UI is painted.

Execution order:
1. useLayoutEffect
2. Browser paint
3. useEffect

flow => useLayoutEffect → Paint UI → useEffect ✅
*/


import React, { useEffect, useLayoutEffect } from 'react'

const Test = () => {

    // Runs after UI render/paint
    useEffect(() => {
        console.log('useEffect')
    }, [])

    // Runs before UI paint (synchronously)
    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    }, [])
    

  return (
    <div className='root'>

        <h1>Test</h1>

    </div>
  )
}

export default Test