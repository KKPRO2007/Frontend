let userName = prompt("What is your name?");
let favColor = prompt("What is your favorite color?");

alert("Welcome, " + userName + "!");

document.write(
  `<h2 style="color:${favColor};">Hello ${userName}! Your favorite color is ${favColor}</h2>`
);

let age = prompt("Enter your age:");

if (age >= 60) {
  alert("You are a senior citizen voter.");
  document.write("<p>You are a senior citizen voter</p>");
} else if (age >= 18) {
  alert("You are eligible to vote!");
  document.write("<p>You are eligible to vote</p>");
} else {
  alert("You are not eligible yet.");
  document.write("<p>You are not eligible yet, Come back when you are 18</p>");
}

let message =
  age >= 60
    ? "You are a senior citizen voter."
    : age >= 18
    ? "You are eligible to vote!"
    : "You are not eligible yet.";

document.write(`<p><b>Ternary Result:</b> ${message}</p>`);


let numbers = [10, 25, 30, 45, 50];

document.write("<h3>Array Methods Output (Check Console)</h3>");


let doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

let above30 = numbers.filter(n => n > 30);
console.log("Numbers above 30:", above30);

let sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);

console.log("ForEach:");
numbers.forEach(n => console.log("Number:", n));
