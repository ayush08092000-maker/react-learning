/**  DOM measurement (measure DOM Height):

 * React Hooks:
            useRef → select DOM element
            useLayoutEffect → measure before paint

 * DOM Properties/Methods:
            clientHeight → content + padding
            offsetHeight → content + padding + border
            getBoundingClientRect().height  → exact size + position
 */

import React, { useLayoutEffect, useRef, useState } from 'react'

const Example1 = () => {

    const boxRef = useRef(null)     // Create reference for DOM element

    const [height1, setHeight1] = useState(0)
    const [height2, setHeight2] = useState(0)
    const [height3, setHeight3] = useState(0)


    // Runs after DOM update but before browser paint
    // Used to measure DOM size/position
    useLayoutEffect(() => {
        setHeight1(boxRef.current.clientHeight)    //(content + padding) 
        setHeight2(boxRef.current.offsetHeight)    //(content + padding + border)
        setHeight3(boxRef.current.getBoundingClientRect().height) //(exact elem height)
    }, [])



  return (
    <div className='root'>

        <div 
            ref={boxRef}  // Connect DOM element with useRef

            style={{width:'250px', padding:'20px', margin:'10px 0px', backgroundColor:'pink',
                border:'2px solid red'
            }}
        >
            Hello World! Measure Me 
        </div>    

        <p>Height1: {height1}</p>
        <p>Height2: {height2}</p>
        <p>Height3: {height3}</p>

    </div>
  )
}

export default Example1