import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./features/navSlice.js";
import stickyNavReducer from "./features/stickynavSlice.js";

export const store = configureStore({
  reducer: {
    navToggle: navReducer,
    stickyNav: stickyNavReducer,
  },
});
