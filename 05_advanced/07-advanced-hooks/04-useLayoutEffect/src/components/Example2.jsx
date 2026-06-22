/**
 * useLayoutEffect:
 *
 * useRef → access DOM element
 * clientWidth → measure element width
 * transform → update position
 *
 * useLayoutEffect updates layout before paint,
 * so initial position flicker is avoided.
 */

import React, { useLayoutEffect, useRef } from 'react'

const Example2 = () => {

    const boxRef = useRef(null)     // Create reference for DOM element

    // Runs after DOM update but before browser paint
    // Used to update layout without flicker
    useLayoutEffect(() => {
        const elem = boxRef.current         // Access DOM element

        const width = elem.clientWidth;     // Get element width

        // Move element horizontally based on its width
        elem.style.transform = `translateX(${width}px)`
    }, [])



  return (
    <div>
        <div ref={boxRef}       // Connect DOM element with useRef
        style={{
            padding:'30px',
            backgroundColor:'skyblue',
            transition:'15s'
        }}
        >
            Animated Box
        </div>
    </div>
  )
}

export default Example2