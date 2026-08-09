import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from './TodoList'

import {
    addTodo,
    updateTodo,
    clearCompleted,
} from "../features/todo/todoSlice";
import FilterButtons from "./FilterButtons";


const TodoForm = () => {

  // Store current input value
  const [input, setInput] = useState("");

  // Track which todo is being edited
  const [editId, setEditId] = useState(null);

  // Focus input automatically while editing
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  
  // Add new todo OR update existing todo
    const submitHandler = (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        if (editId) {
            dispatch(
                updateTodo({
                    id: editId,
                    text: input,
                })
            );

            setEditId(null);
        } else {
            dispatch(addTodo(input));
        }

        setInput("");
    };


  // Load selected todo into input for editing
  const handleEdit = (todo) => {
    if(todo.completed) return;  // Prevent editing completed todos

    setInput(todo.text);    // Fill input with selected todo text
    setEditId(todo.id);     // Store editing todo id

    // Focus input automatically
    inputRef.current.focus();
  };



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
      
    {/* filter buttons(All, Active, Completed, Clear Completed)*/}
      <FilterButtons />
   
      <TodoList handleEdit={handleEdit} />

    </div>
  )
}

export default TodoForm