import { configureStore } from "@reduxjs/toolkit";

import videoSlice from "./videoSlice";

import panelSlice from "./panelSlice";

const store = configureStore({
  reducer: {
    panel: panelSlice,
    VideoList: videoSlice,
  },
});

export default store;
