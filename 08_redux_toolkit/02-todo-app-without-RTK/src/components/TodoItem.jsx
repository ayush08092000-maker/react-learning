import React from 'react'

const TodoItem = ({todo, handleDelete, handleEdit, handleToggle}) => {

    
    // Display single todo item
  return (
    <div className='flex justify-between items-center p-2 rounded-xl bg-gray-300 gap-4 '>
        
        {/* Apply line-through when completed */}
        <p className={`flex-1 text-xl text-justify break-all ${
            todo.completed 
            ? "line-through text-gray-500"
            : ""
        }`}>
            {todo.text}  
        </p>

        <div className="flex gap-2">

            {/* Todo actions */}
            <button
                onClick={() => handleDelete(todo.id)}
                className='bg-red-500 text-white text-lg py-1 px-2 rounded-lg '
            > 
                Delete 
            </button>

            <button
                onClick={() => handleEdit(todo)}
                className='bg-blue-500 text-white text-lg py-1 px-2 rounded-lg'
            > 
                Edit
            </button>

            <button
                onClick={() => handleToggle(todo.id)}
                className={`text-white text-lg py-1 px-2 rounded-lg ${
                    todo.completed 
                        ? "bg-amber-500 hover:bg-amber-600"
                        : "bg-green-500 hover:bg-green-600"
                }`}
            > 
                 {todo.completed ? "Undo" : "Done"}
            </button>

        </div>

    </div>
  )
}

export default TodoItem