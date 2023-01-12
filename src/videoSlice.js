import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "VideoList",
  initialState: {
    videos: [],
  },
  reducers: {
    getVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { getVideos } = videoSlice.actions;
export default videoSlice.reducer;
