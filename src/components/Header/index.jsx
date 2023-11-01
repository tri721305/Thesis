import React from "react";
import "./styles.scss";
import { Avatar, Image, Typography, Button } from "antd";
import avt from "../../image/avt.png";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { NavLink, redirect } from "react-router-dom";
import { removeCookie } from "../../util/cookie";
const Header = () => {
     const dispatch = useDispatch();

     const handleLogOut = () => {
          removeCookie("token");
          window.location.href = "/login";
     };
     return (
          <div className="header__container">
               <div className="header__left">
                    <ul className="header__list">
                         <li className="header__item">
                              <NavLink className="header__link" to={"/home"}>
                                   Home
                              </NavLink>
                         </li>
                         <li className="header__item">
                              <NavLink className="header__link" to={"/convert"}>
                                   Convert
                              </NavLink>
                         </li>
                         <li className="header__item">
                              <NavLink className="header__link" to={"/sheets"}>
                                   Sheets
                              </NavLink>
                         </li>
                    </ul>
               </div>
               <div className="header__right">
                    <div className="header__right-container">
                         <div className="header__info">
                              <Typography className="header__info-text">62485 - Đặng Quang Vinh</Typography>
                         </div>
                         <Avatar size="large" className="header__right-avt" style={{ border: "2px solid red" }} src={avt} alt="AVT" />
                    </div>
                    <Button onClick={handleLogOut} className="header__logout">
                         Log Out
                    </Button>
               </div>
          </div>
     );
};

export default Header;
