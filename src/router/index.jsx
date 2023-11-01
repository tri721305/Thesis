import { createBrowserRouter, Route, Link } from "react-router-dom";

import React from "react";

import { Login } from "@/page";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
     {
          path: "/",
          element: <PrivateRoutes />,
          children: [
               {
                    path: "/login",
                    element: <Login />,
                    // loader: ({ request }) =>
                    //      fetch("https://633045f9591935f3c88cf3d5.mockapi.io/users", {
                    //           signal: request.signal,
                    //      }),
                    children: [{}],
               },
           
          ],
     },
]);

export default router;
