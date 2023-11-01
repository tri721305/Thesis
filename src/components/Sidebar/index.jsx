import React, { useEffect, useState } from "react";
import { navLinks } from "./constants";
import { Typography } from "antd";
import logo from "../../image/logo.png";
import "./style.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Button, Dropdown, Menu, Space } from "antd";
import { removeCookie } from "../../util/cookie";
import { useSelector } from "react-redux";
import {
  CaretDownOutlined,
  LogoutOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const Sidebar = ({ id }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [location, setLocation] = useState("");
  const userInfo = useSelector((state) => state?.auth?.users?.userInfo);

  const handleLogOut = () => {
    removeCookie("token");
    window.location.href = "/login";
  };
  useEffect(() => {
    setLocation(window.location.href.split("/").pop());
  }, [window?.location?.href]);

  const MenuItems = ({ subMenu }) => {
    let a = subMenu?.map((item, index) => {
      return {
        key: item?.id,
        label: (
          <a onClick={() => navigate(`/${item?.id}/${id}`)}>{item?.title}</a>
        ),
      };
    });
    return <Menu items={a} />;
  };
  console.log("params nè", window.location.href.split("/")?.length);
  return (
    <nav className=" bg-[#00162a] text-white w-full flex h-[56px] justify-between items-center navbar">
      <div className=" h-[56px] w-full flex items-center ml-10  justify-around">
        {window.location.href.split("/").length > 4 && (
          <ul className="nav__listitem   list-none flex  justify-start  gap-8 items-center ">
            {navLinks?.map((item, index) => (
              <Dropdown
                className="dashboard_dropdowm_menu"
                overlay={<MenuItems subMenu={item?.submenu} />}
              >
                <a>
                  <Space className="h-full ">
                    {/* <div className="abcd  h-full flex items-center justify-center gap-2"> */}
                    <Typography className="text-[white]">
                      {item?.title}
                    </Typography>
                    <CaretDownOutlined className="text-[white]" />
                    {/* </div> */}
                  </Space>
                </a>
              </Dropdown>
            ))}
          </ul>
        )}
        <div className="flex items-center logout-container flex-1 justify-end  ">
          <div>
            <Typography className="nav__text  text-white text-[12px]">
              {userInfo?.userName + " - " + userInfo?.fullName}
            </Typography>
            <Typography className="text-center text-white text-[8px] ">
              {userInfo?.departmentName}
            </Typography>
          </div>

          <div>
            <Button
              className="rule-btn-delete  flex items-center   ml-1 mr-1 rounded-md "
              onClick={handleLogOut}
            >
              Logout
              <LogoutOutlined />
            </Button>
          </div>
        </div>
        <div className="icon-container">
          <div
            className="menu-icon"
            onClick={() => {
              setToggle(true);
            }}
          >
            <MenuOutlined className="text-[20px] text-white" />
          </div>
        </div>
      </div>
      <div className=" flex flex-1 justify-end items-center">
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } mini-sidebar p-6 bg-gradient-to-b from-black to-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <div className="close-menu">
            <CloseOutlined
              onClick={() => {
                setToggle(false);
              }}
              className="text-[24px]"
            />
          </div>
          <ul className="list-none flex  flex-col items-center ">
            {navLinks.map((item, index) => (
              <div>
                <li
                  key={index}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index == navLinks.length - 1 ? "mr-0" : "mb-4"
                  }  text-black`}
                >
                  <NavLink className="header__link" to={"/home"}>
                    {item.title}
                  </NavLink>
                </li>
              </div>
            ))}
          </ul>
          <div className="flex items-center  justify-center pb-2 ">
            <div>
              <Typography className="nav__text text-white text-[12px]">
                {userInfo?.userName + " - " + userInfo?.fullName}
              </Typography>
              <Typography className="text-center text-white text-[8px] ">
                {userInfo?.departmentName}
              </Typography>
            </div>

            <div>
              <Button
                className="rule-btn-delete  flex items-center   ml-1 mr-1 rounded-md "
                onClick={handleLogOut}
              >
                Logout
                <LogoutOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
