import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


// Components
import Mypage from "./Report/NaviDynamicPage.jsx";

import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(


<BrowserRouter>
<App/>

</BrowserRouter>
 

 
);
