import { configureStore } from "@reduxjs/toolkit";

import panelSlice from "./panelSlice";

const store = configureStore({
  reducer: {
    panel: panelSlice,
  },
});

export default store;
