import React from 'react'
import TodoForm from './components/TodoForm'

const App = () => {
  return (
    <div className='flex justify-center' >

      <div className='flex flex-col items-center h-[94vh] w-175 rounded-2xl my-5 bg-gray-200 '>
        <h1 className='text-5xl font-bold mt-5 mb-2'>Todo App</h1>

        <TodoForm />

      </div>
    
    </div>
  )
}

export default App