import { createBrowserRouter, Route, Link } from "react-router-dom";

import React from "react";

// import { Login } from "@/page";
import Home_V1 from "../components/home-v1";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
     {
          path: "/",
          element: <PrivateRoutes />,
          children: [
               {
                    path: "/login",
                    element: <Home_V1 />,
                    children: [{}],
               },
          ],
     },
]);

export default router;
