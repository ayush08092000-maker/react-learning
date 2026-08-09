/**
 * slice: it is not a component, it is a functionality define state, 
 * reducer and action in slice file
 */

import { createSlice } from "@reduxjs/toolkit";


// Initial Redux State
const initialState = {
        value: 0,
    }

const counterSlice = createSlice({
    
    // redux recognize slices by it's name & do action like counter/increment
    name: 'counter',

    initialState,

    reducers: {
        // RTK uses Immer, so state can be "mutated" directly.
        // but internally RTK creates new immutable state that store new values
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            if (state.value > 0) {
                state.value--
            }
        },
        
        reset:(state)=>{
            state.value = initialState.value
        },

        // action.payload contains "data" passed while dispatching fn.
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },

        decrementByAmount: (state, action) => {
            // Math.max(x,y) returns the largest value.
            // Prevent counter from going below 0.
            state.value = Math.max(state.value - action.payload, 0)
        },
    }
})

// Export Action(fn in reducers) Creators
export const {increment, decrement, incrementByAmount, decrementByAmount, reset} = counterSlice.actions

// Export Reducer
export default counterSlice.reducer
/* counterSlice.reducer: reads that dispatch message(increament/decreament)
   and decides which function(increament/decreament) to run.
*/