import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'


// Configure(create) Redux Store
// Register all slice reducers here.
export const store = configureStore({
        reducer: {
                counter: counterReducer,
        },
})
