import { configureStore } from "@reduxjs/toolkit";
import movie from "./slices/movieSlice";

export const store = configureStore({
  reducer: {
    movie,
  },
});
