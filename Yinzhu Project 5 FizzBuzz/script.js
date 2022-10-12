let form = document.querySelector("form");
let input = document.querySelector("input");
let result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let number = input.value;
    let translate = fizzBuzz(number);
    // console.log("translate: ", translate);
    result.textContent = translate;
    input.value = "";

})

function fizzBuzz(number) {
    // for (let number = 1; number <= limit; number++) {
        if (number % 3 == 0 && number % 5 == 0) {
            return "FizzBuzz";
        }else if (number % 3 == 0) {
            return "Fizz";
        } else if (number % 5 == 0) {
            return "Buzz";
        } else {
            return `This number ${number} is neither multiplier of 3, nor multiplier of 5.`;
        }
    }



// Trying the ceasarCipher:
// let inputText = document.querySelector("#inputText");
// let inputNumber = document.querySelector("#inputNumber");
// let resultP = document.querySelector("#resultArea");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let inText = inputText.value;
//     let inNumber = inputNumber.value;

//     let cipher = ceasarCipher(inText, inNumber);
//     resultP.textContent = cipher;
//     inputText = "";
//     inputNumber = "";
// })

// function cipher(string, number) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let result = "";
//     number = number % 26;
//     for (let i = 0; i < string.length; i++) {
//         console.log(String.fromCharCode(('a'.charCodeAt(0) + (string[i].charCodeAt(0) + number) % 26))); //INCORRECT RESULT!
//     }
// }

// cipher("abc", 0);