// import { Outlet, Navigate, Routes, useNavigate, useLocation } from "react-router-dom";
// import React, { useEffect } from "react";
// import { getCookie } from "@/util";
// import { useDispatch, useSelector } from "react-redux";
// import { instanceUserInfo } from "@/api/auth";
// import { getInfoUser } from "../page/Login/loginSlice";

// function PrivateRoutes({ children, token, isLogin }) {
//      const { users, invalidToken } = useSelector((state) => state.auth);
//      const dispatch = useDispatch();
//      const location = useLocation();
//      const navigate = useNavigate();

//      if (!isLogin) {
//           if (token) {
//                dispatch(getInfoUser(token)).then((res) => {
//                     if (res.error) {
//                          window.location.href = "/login";
//                          return <Navigate to="/login" />;
//                     }
//                });
//           } else {
//                return <Navigate to="/login" />;
//           }
//      } else {
//           return location.pathname == "/" ? children : <Outlet />;
//      }
// }

// export default PrivateRoutes;

import { Outlet, Navigate, Routes, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useLayoutEffect } from "react";
import { getCookie, removeCookie } from "@/util";
import { useDispatch, useSelector } from "react-redux";
import { instanceUserInfo } from "@/api/auth";
import { getInfoUser } from "../page/Login/loginSlice";

function PrivateRoutes({ children, isLogin, token }) {
     // const { users, isLogin, token, invalidToken, status } = useSelector((state) => state.auth);
     // const { isLogin } = useSelector((state) => state.getInfoUser);
     const dispatch = useDispatch();
     const location = useLocation();
     const navigate = useNavigate();

     if (!isLogin) {
          if (token) {
               dispatch(getInfoUser(token)).then((res) => {
                    if (res?.error) {
                         removeCookie("token");
                         navigate("/login");
                    }
               });
          } else {
               return <Navigate to="/login" />;
          }
     } else {
          return location.pathname == "/" ? children : <Outlet />;
     }
}

export default PrivateRoutes;
