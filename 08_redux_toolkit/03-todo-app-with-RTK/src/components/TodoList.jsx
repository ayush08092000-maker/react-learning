import { useSelector } from 'react-redux';
import TodoItem from './TodoItem'


const TodoList = ({handleEdit}) => {


    const {todos, filter} = useSelector((state) => state.todo)

    /**
    * Filter todos
    *  active -> incomplete only, completed -> completed only, all -> show all, 
    */
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed ;
        if (filter === "completed") return todo.completed;
        return true;
    });

    
    // Render filtered todo list
  return (
    <div >
        <h1 className='text-3xl mb-2 font-semibold'>
            Todo List:
        </h1>

        {
            // Show message when no todos exist
            filteredTodos.length === 0 ? (
                <p className="text-gray-500">No Tasks Yet</p>
            ) :
            <ul className='h-94 w-150 overflow-auto scrollbar-none' >
                {   // Render each todo
                    filteredTodos.map((todo) => (
                        <li 
                            key={todo.id}
                            className=" p-2 rounded-lg mb-2 bg-gray-100 "
                        >
                            <TodoItem 
                                todo={todo} 
                                handleEdit={handleEdit}
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