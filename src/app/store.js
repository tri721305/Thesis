import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "@/page/Login/loginSlice";
import thunk from "redux-thunk";
import configDashBoardSlice from "@/page/Dashboard/DashBoardSlice.js";
import configGroupManager from "@/page/GroupManager/GroupManagerSlice.js";
import configRoleManager from "@/page/RoleManager/RoleManagerSlice.js";
import configAreaManager from "@/page/AreaManager/AreaManagerSlice";
import configUsersManager from "@/page/UsersManager/UsersManagerSlice";
import configVNC from "@/page/NVC/VNCSlice";
import configPortManager from "../page/PortManager/PortManagerSlice";
import configRemoteHistory from "@/page/RemoteHistory/RemoteHistorySlice";
export const rootReducer = combineReducers({
  auth: authSlice,
  dashboard: configDashBoardSlice,
  groupManager: configGroupManager,
  roleManager: configRoleManager,
  areaManager: configAreaManager,
  usersManager: configUsersManager,
  portManager: configPortManager,
  VNC: configVNC,
  remoteHistory: configRemoteHistory,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
