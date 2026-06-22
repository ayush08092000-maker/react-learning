/**
 * Auto Scroll Example:
 *
 * useRef → access scroll container
 * useLayoutEffect → scroll before screen paint
 *
 * scrollTop → current scroll position
 * scrollHeight → total scrollable height
 *
 * scrollTop = scrollHeight
 * moves scrollbar to bottom
 */



import React, { useLayoutEffect, useRef } from 'react'

const Example3 = () => {

    const chatRef = useRef(null)   // Create reference for chat container


    // Runs before browser paint
    // Used to auto scroll chat to bottom
    useLayoutEffect(() => {

        // Move scrollbar to bottom
        chatRef.current.scrollTop = chatRef.current.scrollHeight

    }, [])


    return (

        <div className='root'>

            <div 
                ref={chatRef}   // Connect div with useRef

                style={{
                    height:'200px',
                    width:'200px',
                    padding:'0px 10px',
                    backgroundColor:'pink',
                    border:'1px solid black',
                    overflowY:'auto'
                }}
            >

                <p>message 1</p>
                <p>message 2</p>
                <p>message 3</p>
                <p>message 4</p>
                <p>message 5</p>
                <p>message 6</p>
                <p>message 7</p>
                <p>message 8</p>
                <p>message 9</p>
                <p>message 10</p>
                <p>message 11</p>
                <p>message 12</p>
                <p>message 13</p>
                <p>message 14</p>
                <p>message 15</p>

            </div>

        </div>
    )
}

export default Example3