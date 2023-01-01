import { configureStore } from "@reduxjs/toolkit";
import cookeryReducer from "./slices/cookerySlice";

export const store = configureStore({
  reducer: { cookery: cookeryReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
