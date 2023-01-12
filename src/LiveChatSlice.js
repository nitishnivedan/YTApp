import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
  name: "liveChat",
  initialState: [
    "Nitish : Hello World",
    "Akshay: Please do your assignment!!!",
  ],
  reducers: {
    addLiveChats: (state, action) => {
      state.splice(10, 1);
      state.unshift(action.payload);
    },
  },
});

export const { addLiveChats } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;
