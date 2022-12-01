import { createRoot } from "react-dom/client";
import {Zelda} from "./components/indexHelper.js";
import "./style.css"


const App = () => {
    return <>
        <Zelda />
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />)