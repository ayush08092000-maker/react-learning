import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (page) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=4`
        )

        return await response.json();
    }
)


const initialState = {
    posts: [],
    loading: false,
    error: null,
}

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default  postsSlice.reducer;

