import { useDispatch, useSelector } from "react-redux"
import { changeFilter, clearCompleted } from "../features/todo/todoSlice";


const FilterButtons = () => {

    const dispatch = useDispatch();

    const {todos, filter} = useSelector((state) => state.todo)


    // Remove completed todos
    const handleClear = () => {
        dispatch(clearCompleted());
    };
    
    // Check if any completed todo exists
    const hasCompleted = todos.some((todo) => todo.completed);


  return (
    <div className='flex justify-between items-center mb-4 py-2'>
        
        {/* Filter Buttons */}
        <div className="flex gap-2 ">

          <button 
            onClick={() => dispatch(changeFilter("all"))}
            className={`px-4 py-2 rounded text-white ${
              filter === "all"
                ? "bg-blue-500"
                : "bg-green-500"
            }`}
          >
            All
          </button>

          <button 
            onClick={() => dispatch(changeFilter("active"))}
            className={`px-4 py-2 rounded text-white ${
              filter === "active"
                ? "bg-blue-500 "
                : "bg-green-500"
            }`}
          >
            Active
          </button>

          <button 
            onClick={() => dispatch(changeFilter("completed"))}
            className={`px-4 py-2 rounded text-white ${
              filter === "completed"
                ? "bg-blue-500 "
                : "bg-green-500"
            }`}
          >
            Completed
          </button>

        </div>
          
        {/* Remove all completed tasks */}
        <button
          onClick={handleClear}
          className={`text-white px-4 py-2 rounded ${
            hasCompleted
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-400"
          }`}
        >
          Clear Completed
        </button>

    </div>
  )
}

export default FilterButtons

















