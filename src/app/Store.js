import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/CounterSlice";
import postReducer from "../features/posts/PostSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});
