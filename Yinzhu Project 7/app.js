const table = document.querySelector("table");
const inputNumber = document.querySelector(".inputNumber");
const guessButton = document.querySelector("#guessButton");
const resetButton = document.querySelector("#resetButton");
const hintButton = document.querySelector("#hintButton");
const hintZone1 = document.querySelector("#hintZone1");
const hintZone2 = document.querySelector("#hintZone2");
const fiveGuessesTr = document.querySelector(".fiveGuessesTr");

function getRandomInt(max) {
    return Math.floor(Math.random() * max); //range: [0, max - 1]
}
let answer = getRandomInt(100) + 1; // range: [1, 100]
let round = 5; 

guessButton.addEventListener("click", inputGuess);
resetButton.addEventListener("click", resetGame);
hintButton.addEventListener("click", showHint);


// Check the indexes of fiveGuessesTr's children nodes 
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     console.log(fiveGuessesTr.childNodes[i]);
// }
// round: 4 3 2 1  0
// child: 1 5 9 13 17
// child == (5 - round - 1) * 4 + 1 

let answerSet = new Set();
function inputGuess() {
    let guessNumber = inputNumber.value;
    if (guessNumber < 1 || guessNumber > 100) {
        inputNumber.value = null;
        inputNumber.placeholder = "❌";
        console.log("Please enter a number less than 100 and larger than 0!!!");
    } else if (answerSet.has(guessNumber)){
        inputNumber.value = null;
        inputNumber.placeholder = "❓";
        console.log("Please enter a different number!!!");
    } else {
        answerSet.add(guessNumber);
        round--;
        fiveGuessesTr.childNodes[(5 - round - 1) * 4 + 1].textContent = guessNumber;
        

        if (guessNumber == answer) {
            console.log("You win!");
            fiveGuessesTr.childNodes[(5 - round - 1) * 4 + 1].style.backgroundColor = "lightgreen";
            document.querySelector("#guessButton").disabled = true;
            document.querySelector("#hintButton").disabled = true;
            document.querySelector("#guessButton").style.opacity = 0.5;
            document.querySelector("#hintButton").style.opacity = 0.5;
        } else if (round <= 0) {
            console.log(`You lose! The correct answer is ${answer}`);
            fiveGuessesTr.childNodes[17].style.backgroundColor = "red";
            document.querySelector("#guessButton").disabled = true;
            document.querySelector("#hintButton").disabled = true;
            document.querySelector("#guessButton").style.opacity = 0.5;
            document.querySelector("#hintButton").style.opacity = 0.5;

            inputNumber.value = null;
            inputNumber.placeholder = answer;
            inputNumber.style.color = "red";

        } else if (guessNumber < answer) {
            fiveGuessesTr.childNodes[(5 - round - 1) * 4 + 2].textContent = "⬆️";
        } else { //guessNumber > answer
            fiveGuessesTr.childNodes[(5 - round - 1) * 4 + 2].textContent = "⬇️";
        }
    }

}

function resetGame() {
    document.location.reload(true);
}

function showHint() {
    console.log("The answer is " + answer);
    const hints = [];
    while (hints.length < 10) {
        let randomNumber = getRandomInt(100) + 1;
        if (hints.indexOf(randomNumber === -1)) { //means if randomNumber is not in the hint array
            hints.push(randomNumber);
        }
    }
    if (hints.indexOf(answer) === -1) {
        hints[getRandomInt(10)] = answer; // put the answer inside a random position of the hint array
    }

    hintZone1.textContent = hints.slice(0, 5);
    hintZone2.textContent = hints.slice(5, 10);

    //Disable the hint button, because the hint button could only be clicked once
    document.querySelector("#hintButton").disabled = true;
    document.querySelector("#hintButton").style.opacity = 0.5;
}