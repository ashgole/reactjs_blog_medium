import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/slices/counterSlice";

const rootReducer = combineReducers({
  counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
