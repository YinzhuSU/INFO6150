import react, {useState} from "react";
import {createRoot} from "react-dom/client"

// In pure JS, we need to create a new element like below:
// function Counter() {
//     let helloWorld = document.createElement("h1");
//     helloWorld.textContent = "Hello World";
//     return helloWorld;
// }

const Counter = () => {
    const [count, setCount] = useState(0);
    // console.log(count);
    // console.log(setCount);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return <>
        <h1> Hello World !!</h1>
        <div id="counter"> 
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<Counter />)