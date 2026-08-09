import React, { useRef, useState } from 'react'
import TodoList from './TodoList'


const TodoForm = () => {

  // Store current input value
  const [input, setInput] = useState("");

  // Store all todos
  const [todos, setTodos] = useState([]);

  // Track which todo is being edited
  const [editId, setEditId] = useState(null);

  // Focus input automatically while editing
  const inputRef = useRef(null);

  // Current filter: all | active | completed
  const [filter, setFilter] = useState("all");


  
  // Add new todo OR update existing todo
  const submitHandler= (e) => {
    e.preventDefault()

    // Ignore empty input
    if(!input.trim()) return;

    // Edit existing todo
    if(editId){
      const updatedTodos = todos.map((todo) => 
        todo.id === editId ? {...todo, text:input} : todo
      )
      setTodos(updatedTodos);
      setEditId(null)
    }

    // Add new todo
    else{
      const todo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([todo, ...todos]);
    }
    
    // Clear input after add/update
    setInput("");
  }

  // Remove todo by id
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  // Load selected todo into input for editing
  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);

    // Focus input automatically
    inputRef.current.focus();
  };

  // Toggle completed status
  const handleToggle = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    )
    setTodos(updatedTodos);
  }

  /**
 * Filter todos
 *  active -> incomplete only, completed -> completed only, all -> show all, 
 */
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed ;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // Remove completed todos
  const handleClear = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Check if any completed todo exists
  const hasCompleted = todos.some((todo) => todo.completed);



  return (
    <div>
      
      <form onSubmit={submitHandler}>
        
        <div className='flex w-150 items-center mt-5 mb-5 gap-2' >

          <input 
            ref={inputRef}
            type="text" 
            placeholder='Enter Task . . .' 
            maxLength={100}
            className='text-2xl border py-2 px-4 rounded-xl flex-1 '
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button 
            type='submit'
            className={`text-white text-2xl py-2 px-4 rounded-xl transition-all duration-200 ${
              editId
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {editId ? "Update" : "Add Task"}
          </button>

        </div>

      </form>

      <div className='flex justify-between items-center mb-4 py-2'>
        
        {/* Filter Buttons */}
        <div className="flex gap-2 ">

          <button 
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded text-white ${
              filter === "all"
                ? "bg-blue-500"
                : "bg-green-500"
            }`}
          >
            All
          </button>

          <button 
            onClick={() => setFilter("active")}
            className={`px-4 py-2 rounded text-white ${
              filter === "active"
                ? "bg-blue-500 "
                : "bg-green-500"
            }`}
          >
            Active
          </button>

          <button 
            onClick={() => setFilter("completed")}
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
   
      <TodoList 
        todos={filteredTodos} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit} 
        handleToggle={handleToggle}
      />

    </div>
  )
}

export default TodoForm