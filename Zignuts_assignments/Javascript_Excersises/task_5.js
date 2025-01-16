// Task5:Write a program to print fibonacci series. Take the number of steps from input using HTML Input
//  and when click on Print button, using JS print the entered number of steps in the fibonacci series on HTML
//  page.

const steps = document.getElementById("steps");
if (steps < 1) {
  alert("Please enter valid number");
  return;
}

let fibSeries = [0, 1];
for (let i = 2; i < steps; i++) {
  fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
}

// console.log(fibSeries.slice(0,steps).join(","))

document.getElementById("fibOutput").innerHTML = `
    <h2>Fibonacci Series (first ${steps} steps):</h2>
    ${fibSeries.slice(0, steps).join(", ")}
`;
