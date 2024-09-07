import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const navToggleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleOpenNav: (state) => {
      state.isOpen = true;
    },
    handleCloseNav: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const navToggleActions = navToggleSlice.actions;

export default navToggleSlice.reducer;
