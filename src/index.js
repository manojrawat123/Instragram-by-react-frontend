import React from "react";
import "./input.css"

import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root_el = document.getElementById("root");
const root = createRoot(root_el);

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
