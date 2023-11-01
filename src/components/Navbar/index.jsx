import React, { useEffect, useState } from "react";
import { navLinks } from "./constants";
import logo from "../../image/logo.png";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import P from "../../image/P.png";
import { removeCookie } from "../../util/cookie";
import { useSelector } from "react-redux";
import {
  PieChartOutlined,
  GroupOutlined,
  OneToOneOutlined,
  AuditOutlined,
  AreaChartOutlined,
  UserOutlined,
  UserSwitchOutlined,
  ApartmentOutlined,
  LaptopOutlined,
  ShopOutlined,
  CodeOutlined,
  HistoryOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Menu, Button, Typography } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "Dashboard",
    "dashboard",
    <PieChartOutlined style={{ fontSize: "20px" }} />
  ),
  getItem(
    "Admin Manager",
    "admin",
    <UserOutlined style={{ fontSize: "20px" }} />,
    [
      getItem(
        "Group Manager",
        "groupmanager",
        <GroupOutlined style={{ fontSize: "20px" }} />
      ),
      getItem(
        "Role Manager",
        "rolemanager",
        <AuditOutlined style={{ fontSize: "20px" }} />
      ),
      getItem(
        "Area Manager",
        "areamanager",
        <AreaChartOutlined style={{ fontSize: "20px" }} />
      ),
      getItem(
        "User Manager",
        "usersmanager",
        <UserSwitchOutlined style={{ fontSize: "20px" }} />
      ),
      getItem(
        "Port Manager",
        "portmanager",
        <OneToOneOutlined style={{ fontSize: "20px" }} />
      ),
      getItem(
        "Store Manager",
        "storemanager",

        <ShopOutlined style={{ fontSize: "20px" }} />
      ),
    ]
  ),
  getItem(
    "Remote",
    "remote",
    <ApartmentOutlined style={{ fontSize: "20px" }} />,
    [
      getItem("VNC", "vnc", <LaptopOutlined style={{ fontSize: "20px" }} />),
      getItem("SSH", "ssh", <CodeOutlined style={{ fontSize: "20px" }} />),
      getItem(
        "Remote History",
        "remotehistory",
        <HistoryOutlined style={{ fontSize: "20px" }} />
      ),
    ]
  ),
];
const Navbar = ({ isActive, ...props }) => {
  const subUrl = window.location.pathname.slice(
    0,
    window.location.pathname.indexOf("/")
  );

  const [location, setLocation] = useState("");
  const userInfo = useSelector((state) => state?.auth?.users?.userInfo);
  const [collapsed, setCollapsed] = useState(
    window.screen.width > 700 ? false : true
  );
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log("e", e);
    document.title = e.key.toUpperCase();
    navigate(`/${e.key}`);
    setLocation(e.key);
    if (e.key == "vnc") {
      console.log("zo vnc");
      // setCollapsed(true);
    }
  };

  const handleLogOut = () => {
    removeCookie("token");
    window.location.href = "/login";
  };
  useEffect(() => {
    console.log("abc");
  }, [window.screen.width]);
  console.log("window size", window.screen.width);
  return (
    <div className="sidebar__container bg-[#00162a]" {...props}>
      {isActive && (
        <div className="sidebar__container-content mt-8 flex-col flex  ">
          <div className={!collapsed ? "w-[280px]" : ""}>
            <Menu
              style={{
                width: !collapsed && "256px",
                colorBgTextHover: "rgb(130, 49, 211)",
              }}
              className="sidebar-menu-dark"
              onClick={handleClick}
              mode="inline"
              theme="dark"
              onChange={(e) => console.log("e", e)}
              expandIcon={<RightOutlined className="text-4" />}
              inlineCollapsed={collapsed}
              items={items}
              selectedKeys={location}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
