import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, handleDelete, handleEdit, handleToggle}) => {
    
    // Render filtered todo list
  return (
    <div >
        <h1 className='text-3xl mb-2 font-semibold'>
            Todo List:
        </h1>

        {
            // Show message when no todos exist
            todos.length === 0 ? (
                <p className="text-gray-500">No Tasks Yet</p>
            ) :
            <ul className='h-94 w-150 overflow-auto scrollbar-none' >
                {   // Render each todo
                    todos.map((todo) => (
                        <li 
                            key={todo.id}
                            className=" p-2 rounded-lg mb-2 bg-gray-100 "
                        >
                            <TodoItem 
                                todo={todo} 
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                                handleToggle={handleToggle}
                            />
                        </li>
                    ))
                }
            </ul>
        }


    </div>
  )
}

export default TodoList