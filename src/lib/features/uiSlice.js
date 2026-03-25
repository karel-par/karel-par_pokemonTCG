import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phase: "loading", //  controls the loading screen > goto page.js and look there
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setPhase: (state, action) => {
      state.phase = action.payload;
    },
  },
});

export const { setPhase } = uiSlice.actions;
export default uiSlice.reducer;