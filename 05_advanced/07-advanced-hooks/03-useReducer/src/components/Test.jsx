import React, { useReducer } from 'react'

const Test = () => {

    // useReducer manages state using reducer function
    // checked = current state, toggle = dispatch function
    // reducer toggles value: false → true / true → false

                                        // reducer function  , initial state(value of current state)     
    const [checked, toggle] = useReducer((checked) => !checked, false )


  return (
    <div className='root'>
        <h1>

            <input style={{transform: "scale(1.8)", marginRight:10, cursor:'pointer'}}
                type="checkbox"                
                checked={checked}   // React controls checkbox state                
                onChange={toggle}   // Calls toggle() when checkbox value changes
            />
            
            {/* Conditional rendering based on checked state */}
            {checked ? 'checked' : 'not checked'} 

        </h1>
        
    </div> 
  )
}

export default Test