import {createSlice, nanoid} from '@reduxjs/toolkit'



const initialState = {
    todos: [],
    filter: "all",
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo:{
            reducer: (state, action) => {
                state.todos.unshift(action.payload)
            },

            prepare: (text) => {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        completed: false,
                    }
                }
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter( 
                todo => todo.id !== action.payload
            )
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const todo = state.todos.find(
                todo => todo.id === id
            )
            if(todo){
                if(!todo.completed){
                    todo.text = text;
                }
            }
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => 
                todo.id === action.payload
            )
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter(
                todo => !todo.completed
            )
        },
        changeFilter: (state, action) => {
            state.filter = action.payload;
        },
    }
})

export const {addTodo,
    deleteTodo, 
    updateTodo, 
    toggleTodo, 
    clearCompleted, 
    changeFilter} = todoSlice.actions

export default todoSlice.reducer;







