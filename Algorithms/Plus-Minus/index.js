'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  const size = arr.length
  const places = 6
  let positive = 0
  let negative = 0
  let zero = 0

  arr.forEach(n => {
    if (n === 0) zero += 1
    if (n > 0) positive += 1
    if (n < 0) negative += 1
  })

  console.log((positive / size).toFixed(places))
  console.log((negative / size).toFixed(places))
  console.log((zero / size).toFixed(places))

}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}

