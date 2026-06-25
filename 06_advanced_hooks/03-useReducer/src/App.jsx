/*
useReducer Hook —
  useReducer is a Hook used to manage complex state logic in functional components.
  best for => objects and arrays 

Syntax —
  const [state, dispatch] = useReducer(reducer, initialState);

where -
  state →             current data (initialState)
  dispatch →          sends actions to reducer fn.
  reducer function →  updates state based on action

*/

import React from 'react'
import Test from './components/Test'
import Counter from './components/Counter'
import Form from './components/Form'


const App = () => {

  return(
    <div>

      <Test /> <hr />

      <Counter /> <hr />

      <Form />  <hr />

    </div>
  )
  
}

export default App