import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: [],
        // trailerVideo: [],

    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        // addTrailerVideo: (state, action) => {
        //     state.trailerVideo = action.payload;
        // },
    },
})

export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;