import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroIsVisible: true,
};

export const stickyNavSlice = createSlice({
  name: "stickyNav",
  initialState,
  reducers: {
    addStickyNav: (state) => {
      state.heroIsVisible = false;
    },
    removeStickyNav: (state) => {
      state.heroIsVisible = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const stickyNavActions = stickyNavSlice.actions;

export default stickyNavSlice.reducer;
