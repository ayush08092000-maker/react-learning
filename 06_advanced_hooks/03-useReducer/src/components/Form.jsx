import React, { useReducer } from 'react'


// Initial form state
const initialState = {
    username: '',
    email: '',
    password: '',
    address: ''
}

// Reducer updates state based on action
function reducer(state, action){
    switch(action.type){
        // Update input field dynamically
        case 'UPDATE_FIELD':
            return {
                ...state,   // keep old values
                [action.field]: action.value    // update changed field         
            }
        
        // Reset form data
        case 'RESET':
            return initialState
        
        default:
            return state            
    }
}


const Form = () => {

    // state = form data, dispatch = send action
    const [state, dispatch] = useReducer(reducer, initialState)

    // Runs whenever input value changes
    const changeHandler = (e)=> {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value
        })
    }

    // Handle form submit
    const submitHandler = (e)=> {
        e.preventDefault()

        console.log(state)

        // Clear form after submit
        dispatch({
            type: 'RESET'
        })
    }

  return (
    <div className='root' >
        
        <form onSubmit={submitHandler} >
            <h2>
                Username: <input type="text" placeholder='Enter username'
                    name='username'
                    value={state.username}
                    onChange={changeHandler}
                /> 
            </h2>
            <p>Name: {state.username}</p> <br />

            <h2>
                Email: <input type="email" placeholder='Enter email'
                    name='email'
                    value={state.email}
                    onChange={changeHandler}
                    style={{width:300}}
                /> 
            </h2>
            <p>Email: {state.email}</p> <br />  

            <h2>
                Password: <input type="password" placeholder='Enter password'
                    name='password'
                    value={state.password}
                    onChange={changeHandler}
                /> 
            </h2>
            <p>Password: {state.password}</p> <br />

            <h2>
                Address: <input type="text" placeholder='Enter address'
                    name='address'
                    value={state.address}
                    onChange={changeHandler}
                /> 
            </h2>
            <p>Address: {state.address}</p> <br />


            
            {/* Submit form */}
            <button type='submit' style={{marginRight:200}} >
                Submit
            </button>

             {/* Reset manually */}
            <button type='button' onClick={()=> dispatch({type: 'RESET'})} >
                Reset
            </button>

        </form>


    </div>
  )
}

export default Form