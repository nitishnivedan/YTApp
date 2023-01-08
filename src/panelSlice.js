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
  },
});

export const { handelPanelOpen } = panelSlice.actions;
export default panelSlice.reducer;
