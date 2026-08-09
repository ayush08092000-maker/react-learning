import React from 'react'
import Counter from './components/Counter'
import InputCounter from './components/InputCounter'

const App = () => {
  return (
    <div>

      <h1 className='flex justify-center text-6xl font-bold pt-10'>Counter App</h1>
      
      <Counter />

      <InputCounter />

    </div>
  )
}

export default App