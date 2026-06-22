import React, {useRef} from 'react'     // import useRef

const DOM = () => {

    const inputRef = useRef(null)       // creating useRef

    const inputHandler = () =>{         // This fn run onClick
        inputRef.current.focus();
    }

    const hideInputBox = () => {
        inputRef.current.style.display =
        inputRef.current.style.display === 'none' 
        ? 'inline-block'                            // Ternary Opr
        : 'none';
    }

  return (
    <div>

        <input 
            ref={inputRef}      // rfere input alement to change(selecting elem.)
            type="text" 
            placeholder='Enter input value'
        />

        <div>

            <button
                onClick={inputHandler}
            >
                Focus on input
            </button>

            <button
                onClick={hideInputBox}
            >
                Hide/Unhide box
            </button>

        </div>
        
    </div>
  )
}

export default DOM