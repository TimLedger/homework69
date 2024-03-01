import { configureStore } from "@reduxjs/toolkit";
import { showsReducers } from "../store/showsSlice";

export const store = configureStore({
  reducer: {
    show: showsReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;