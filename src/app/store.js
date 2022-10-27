import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/slice/newsSlicer";

// konfigurasi store reducer
export const store = configureStore({
  reducer: {
    news: reducer,
  },
});
