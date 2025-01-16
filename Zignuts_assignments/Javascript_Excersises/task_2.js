// Task2 : Need to create a Javascript function for the sum of string (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")

const str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
var s = 0;
const arr = str.split(",").map(Number)

for (let i in arr){
    s += arr[i]
}

console.log(s)