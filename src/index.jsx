import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { RouterProvider, BrowserRouter } from "react-router-dom";
import router from "./router";
import App from "./App";
import "./index.css";
import { store } from "./app/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <Provider store={store}>
          <BrowserRouter>
               <App />
          </BrowserRouter>
     </Provider>
);
