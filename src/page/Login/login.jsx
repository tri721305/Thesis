// import React from "react";
// import { useState } from "react";
// import "./login.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { login, authActions, getInfoUser, loginWithSSO } from "./loginSlice";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Input, Button } from "antd";
// import { toast } from "react-toastify";
// import data from "../../image/data.png";
// const Login = () => {
//      const authProps = useSelector((state) => state.auth);
//      const [username, setUserName] = useState("");
//      const [password, setPassword] = useState("");
//      const [isAuthening, setIsAuthening] = useState(false);
//      const [location, setLocation] = useState(useLocation());
//      const [typeLogin, setTypeLogin] = useState(false);
//      const { users, isLogin } = useSelector((state) => state.auth);
//      const navigate = useNavigate();
//      const dispatch = useDispatch();
//      const handleSubmit = (e) => {
//           let body = {
//                username: username,
//                password: password,
//           };
//           if (!typeLogin) {
//                dispatch(login(body)).then((res) => {
//                     if (!res?.error) {
//                          dispatch(getInfoUser()).then((res) => {
//                               if (res.payload.userInfo) {
//                                    return navigate("/dashboard");
//                               }
//                          });
//                     }
//                });
//           } else
//                dispatch(loginWithSSO(body)).then((res) => {
//                     if (!res?.error) {
//                          dispatch(getInfoUser()).then((res) => {
//                               if (res.payload.userInfo) {
//                                    return navigate("/dashboard");
//                               }
//                          });
//                     }
//                });
//      };

//      const handleChange = (e) => {
//           const { name, value } = e.target;
//           if (name == "username") setUserName(value);
//           else setPassword(value);
//      };
//      return (
//           <div className="bg-black">
//                <div className="background"></div>
//                <div className="container">
//                     <div className="item item-img"></div>
//                     <div className="login-section">
//                          <div className="form-box login">
//                               <div>
//                                    <h2 className="text-white">Sign In with {typeLogin ? "SSO" : "BCNB"}</h2>
//                                    <div className="input-box">
//                                         <span className="icon">
//                                              <i className="bx bx-user"></i>
//                                         </span>
//                                         <input
//                                              onKeyDown={(event) => {
//                                                   if (event.key === "Enter" && password) {
//                                                        handleSubmit();
//                                                   }
//                                              }}
//                                              onChange={(e) => setUserName(e.target.value)}
//                                              role="presentation"
//                                              autoComplete="new-text"
//                                              type="text"
//                                              required
//                                         />
//                                         <label>User name</label>
//                                    </div>
//                                    <div className="input-box">
//                                         <span className="icon">
//                                              <i className="bx bxs-lock-alt"></i>
//                                         </span>
//                                         <input
//                                              onKeyDown={(event) => {
//                                                   if (event.key === "Enter" && username) {
//                                                        handleSubmit();
//                                                   }
//                                              }}
//                                              onChange={(e) => setPassword(e.target.value)}
//                                              autoComplete="new-password"
//                                              role="presentation"
//                                              type="password"
//                                              required
//                                         />
//                                         <label>Password</label>
//                                    </div>
//                                    <div className="flex gap-2">
//                                         <button onClick={handleSubmit} className="btn bg-[  #17246b]">
//                                              Login In
//                                         </button>
//                                    </div>
//                               </div>
//                          </div>
//                     </div>
//                </div>
//           </div>
//      );
// };

// export default Login;
