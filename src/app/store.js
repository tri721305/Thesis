import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "@/page/Login/loginSlice";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  auth: authSlice,

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
