import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (movieText) => {
  const { data } = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
  return data;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (showText) => {
  const { data } = await movieApi.get(`?apiKey=${APIKey}&s=${showText}&type=series`);
  return data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const { data } = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return data;
  },
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Success", action.payload);
      state.movies = action.payload;
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log("Success", action.payload);
      state.shows = action.payload;
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Success", payload);
      state.selectedMovieOrShow = payload;
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;

export default movieSlice.reducer;
