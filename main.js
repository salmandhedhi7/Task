function factorial() {
    let number = document.getElementById("input-1").value;

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    document.getElementById(
        "result-1"
    ).innerHTML = `
    The Factorial Of <i>'${number}'</i> IS <i>'${result}'</i>`;
}

function removeVowels() {
    let text = document.getElementById("input-2").value;
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let result = "";
    for (let i = 0; i < text.lenght; i++) {
        if (!vowels.includes(text[i])) {

        }
    }
    document.getElementById("result-2").innerHTML = result;
}

function largestNumber() {
    let numbers = document.getElementById("input-3");
    numbers = numbers.value.split(",").map(Number);
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > result) {
            result = numbers[i];
        }
    }
    document.getElementById(
        "result-3"
    ).innerHTML = `The Largest Number Is <i>'${result}'</i>`;
}
function capitalizeFirstLetter() {
    let text = document.getElementById("input-4").value;
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (i === 0 || text[i - 1] === " ") {
            result += text[i].toUpperCase();
        } else {
            result += text[i];
        }
    }
   document.getElementById("result-4").innerHTML = result;
}
function average() {
    let numbers = document.getElementById("input-5");
    numbers = numbers.value.split(",").map(number);

    let sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    let result = sum / numbers.length;

    document.getElementById("result-5").innerHTML = `The Average Is <i>'${result}'</i>`;
}
function palindrome() {
    let text = document.getElementById("input-6").value;

    let cleanedValue = text.toLowerCase();
    let reversedValue = cleanedValue.split("").reverse().join("");

    let result = "";
    if (cleanedValue === reversedValue) {
        result = `<i>'${text}'</i> Is Palindrome`;
    } else {
        result = `<i>'${text}'</i> Is Not Palindrome`;
    }
    document.getElementById("result-6").innerHTML = result;
}
function sortText() {
    let values = document.getElementById("input-7");
    values = values.value.split(",");
    let result = values.sort();
    document.getElementById("result-7").innerHTML = result;
}
function primeNumbers() {
    let number = document.getElementById("input-8").value;
    number = Number(number);
    let result = "";

    let isPrime = true;
    if (number < 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime === true) {

        result = `<i>'${number}'</i> Is A Prime Number`;
    } else {

        result = `<i>'${number}'</i> Is Not A Prime Number`;
    }
    document.getElementById("result-8").innerHTML = result;
}
function sortByProperty() {
    let text = document.getElementById("input-9");
    let property = document.getElementById("property").value;
    let result = "";

    if (property === "Name") {

        text = text.value.split(",");

        result = text.sort();

    } else if (property === "lenght") {

        text = text.value.split(",");
        text = (text.lenght) - 1

        result = `There Are <i>'${text}'</i> Strings`;
    } else {
        result = "Select A Property";
    }
    document.getElementById("result-9").innerHTML = result;
}

