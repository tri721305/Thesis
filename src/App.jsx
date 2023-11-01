import { useEffect, useState, useRef } from "react";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PrivateRoutes from "@/router/PrivateRoutes";
import { Login } from "@/page";
import { ToastContainer, toast } from "react-toastify";
import "moment/locale/vi";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import "./App.scss";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { getCookie, removeCookie } from "./util/cookie";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { CTRL_BASEURL } from "./constant/constant";
import { MenuFoldOutlined } from "@ant-design/icons";
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLogin, loading, users } = useSelector((state) => state.auth);
  const token = getCookie("token");
  const ref = useRef(null);
  const [collase, setCollase] = useState(false);
  const [mode, setMode] = useState(
    localStorage.getItem("themeColor") || "dark"
  );
  useEffect(() => {
    localStorage.setItem("themeColor", mode);
    const root = window.document.documentElement;
    if (mode == "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [mode]);

  const handleChangeMode = (value) => {
    setMode(value ? "dark" : "light");
  };
  const handleLogout = () => {
    removeCookie("token");
    window.location.href = "/login";
  };
  return (
    <div className="App bg-[#f8f9fb] ">
      <ToastContainer
        enableMultiContainer
        position={toast.POSITION.TOP_RIGHT}
        style={{ zIndex: 100000 }}
      />
      {loading && (
        <div className="bg-zinc-200 bg-opacity-50 fixed inset-0 flex items-center justify-center z-50">
          <Spin size="large" indicator={<LoadingOutlined />} />{" "}
        </div>
      )}
      <div className="flex flex-col flex-1">
        {location.pathname != "/login" &&
          location.pathname?.split("/")[1] != "nvc" && (
            <div className="flex items-center bg-[#00162a]">
              <div className="text__container ml-6 gap-2 flex items-center ">
                <div className="text">
                  <h1
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    pFController
                  </h1>
                </div>
                <MenuFoldOutlined
                  onClick={() => {
                    console.log("ref", ref.current);
                    if (collase) {
                      // ref.current.style.animation = "animation-in 0.5s linear";
                      setCollase(!collase);
                    } else {
                      // ref.current.style.animation = "animation-out 0.5s linear";
                      setCollase(!collase);
                    }
                  }}
                  className="text-white text-[16px] cursor-pointer"
                />
              </div>
              <Sidebar
                id={
                  window.location.href.split("/").length > 3
                    ? window.location.href.split("/")[4]
                    : null
                }
              />
            </div>
          )}
        <div className="App__content">
          {location.pathname != "/login" &&
            location.pathname?.split("/")[1] != "nvc" && (
              <Navbar
                isActive={!collase}
                ref={ref}
                style={
                  location.pathname != "/login" &&
                  location.pathname?.split("/")[1] != "nvc" &&
                  !collase
                    ? {
                        // visibility: "visible",
                        // display: "block",
                        height: "auto",
                        opacity: 1,
                        transition: "0.3s ease-in",
                      }
                    : {
                        // visibility: "hidden",
                        // display: "none",
                        height: 0,
                        overflow: "hidden",
                        opacity: 0,
                        transition: "0.3s linear-in",
                      }
                }
              />
            )}

          <div className="flex-1">
            {/* <div> {location.pathname != "/login" && location.pathname.includes("dashboard/") && <Sidebar />}</div>
             */}
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoutes
                    isLogin={isLogin}
                    token={token}
                  ></PrivateRoutes>
                }
              >
              </Route>
              <Route exact path="*" element={<Login />}></Route>
              <Route element={<Login />} path="/login" />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
