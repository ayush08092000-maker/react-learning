import React, { useReducer } from 'react'


// Reducer function handles state update logic
// It receives current state and action
function reducer(state, action) {

  switch(action.type){

    // Increase count value by 1
    case 'Increment':
      return {
        count: state.count + 1
      }

    // Decrease count value but don't go below 0
    case 'Decrement':
      return {
        count: state.count > 0 ? state.count - 1 : 0
      }

    // Reset count value to initial value
    case 'Reset':
      return {
        count: 0
      }

    // Return old state if action does not match
    default:
      return state
  }

}


const Counter = () => {


  // state = current data
  // dispatch = sends action to reducer
  // {count:0} = initial state (obj DT)
  const [state, dispatch] = useReducer(
    reducer,
    {count: 0}
  )


  return (

    <div className='root'>

      {/* Display current count value */}
      <h1>count: {state.count}</h1>

      {/* Send Increment action */}
      <button 
        onClick={() => dispatch({type:'Increment'})}
      >
        +
      </button>

      {/* Send Decrement action */}
      <button 
        onClick={() => dispatch({type:'Decrement'})}
      >
        -
      </button>

      {/* Send Reset action */}
      <button 
        onClick={() => dispatch({type:'Reset'})}
      >
        Reset
      </button>

    </div>

  )

}


export default Counter