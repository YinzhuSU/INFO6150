const table = document.querySelector('table');
const addRow = document.querySelector("#addRow");
const clear = document.querySelector("#clear");
const colors = document.querySelector("#colors");

let chosenColors = "red";

addRow.addEventListener("click", makeRow);
clear.addEventListener("click", clearBoard);
colors.addEventListener("change", changeColors);
table.addEventListener("click", colorize);

function makeRow() {
    console.log("hello");
    let tr = document.createElement("tr");
    for(let i = 0; i < 20; i++) {
        let td = document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

function clearBoard() {
    document.location.reload(true);
}

function changeColors(event) {
    chosenColors = event.target.value;
    console.log(chosenColors);
}

function colorize(event) {
    console.log(event.target.className);
    if (event.target.className) event.target.className = "";
    else event.target.className = chosenColors;
}