function evenNumber(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


function evenLength(inputString) {
    let l = inputString.length;
    if (l % 2 === 0) {
        console.log(`The length of ${inputString} is even.`);
    } else {
        console.log(`The length of ${inputString} is odd.`);
    }
}

function foodType(foodName) {
    if (foodName == "hotpot") {
        console.log("It is hotpot.")
    } else if (foodName == "dimsum") {
        console.log("It is dimsum.");
    } else if (foodName == "pho") {
        console.log("It is pho.");
    } else {
        console.log("What on the earth do you want to eat?!");
    }
}

function loop(number) {
    for (let i = 0; i <= number; i++) {
        console.log(`We are in loop ${i}.`);
    }
}

function fizzBuzz(limit) {
    for (let number = 1; number <= limit; number++) {
        if (number % 3 == 0) {
            if (number % 5 == 0) {
                console.log("FizzBuzz");
            } else {
                console.log("Fizz");
            }
        } else if (number % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(`This number ${number} is neither multiplier of 3, nor multiplier of 5.`);
        }
    }
}

fizzBuzz(100);