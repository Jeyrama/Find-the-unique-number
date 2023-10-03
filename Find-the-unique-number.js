/*
There is an array with some numbers. 
All numbers are equal except for one. Try to find it!

Examples:
  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.
*/


// Solution

function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3);
  if (a != b && a != c) return a;
  for (let x of arr) if (x != a) return x;
}

// or

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}