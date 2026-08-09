import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await fetch('https://dummyjson.com/products')

        const data = await response.json();

        return data.products;
    }
)

const initialState = {
    items: [],
    status: undefined,
    error: null,
}


const productSlice = createSlice({
    name:'product',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
    }
})

export default productSlice.reducer;