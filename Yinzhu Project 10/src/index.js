import react, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Zelda } from "./components/indexHelper.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css"


const App = () => {
    return <>
        <Zelda />
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(
    <Router>
        <App />
    </Router>
)