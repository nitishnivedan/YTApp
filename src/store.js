import { configureStore } from "@reduxjs/toolkit";

import videoSlice from "./videoSlice";
import panelSlice from "./panelSlice";
import liveChatSlice from "./LiveChatSlice";

const store = configureStore({
  reducer: {
    panel: panelSlice,
    VideoList: videoSlice,
    liveChat: liveChatSlice,
  },
});

export default store;
