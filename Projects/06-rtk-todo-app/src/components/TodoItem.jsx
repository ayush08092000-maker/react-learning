import { useDispatch } from "react-redux";
import {deleteTodo, toggleTodo} from "../features/todo/todoSlice";

    

const TodoItem = ({todo, handleEdit}) => {


    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    
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
                onClick={handleDelete}
                className='bg-red-500 hover:bg-red-600 transition text-white text-lg py-1 px-2 rounded-lg'
            > 
                Delete 
            </button>

            <button
                onClick={() => handleEdit(todo)}
                disabled={todo.completed}
                className={`text-white text-lg py-1 px-2 rounded-lg transition ${
                    todo.completed
                    ? "bg-gray-400"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
            > 
                Edit
            </button>

            <button
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`text-white text-lg py-1 px-2 rounded-lg transition ${
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