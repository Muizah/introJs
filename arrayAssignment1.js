var numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
console.log(numbers);
// create an array with 10 numbers.

numbers.pop();
console.log(numbers);
// remove the last item of the array.

numbers.shift();
console.log(numbers);
//remove the first item of the array.

numbers.push("Muizah");
console.log(numbers);
//add your name to the array.

numbers.push(new Date());
console.log(numbers);
// add the current hour (10pm>> 10 or 8pm >> 8) to the array.

numbers.splice(4, 1);
console.log(numbers);
// remove the 4th item of the array
