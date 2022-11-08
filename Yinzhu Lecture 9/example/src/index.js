import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import "./style.css"
// import Animals from "./components/Animals.js"
import {
    Animals,
    Footer,
    Header,
} from "./components/index.js"

const App = () => {

    return <>
        <Animals />
        <Header />
        <Animals />
        <Animals />
        <Footer />
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />)