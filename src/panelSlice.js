import { createSlice } from "@reduxjs/toolkit";

const panelSlice = createSlice({
  name: "panel",
  initialState: {
    items: true,
  },
  reducers: {
    handelPanelOpen: (state) => {
      state.items = !state.items;
    },
    closeVideo: (state, action) => {
      state.items = false;
    },
  },
});

export const { handelPanelOpen, closeVideo } = panelSlice.actions;
export default panelSlice.reducer;
