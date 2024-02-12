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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    const result = arr.map(i => {
        const diff = arr.reduce((acc, curr) => {
            if (curr === i) return acc
            return BigInt(curr) + BigInt(acc)
        }, BigInt(0))
        if (diff === BigInt(0)) {
          return arr.reduce((acc, curr, index) => {
            if (index === 0) return acc
            return BigInt(curr) + BigInt(acc)
          }, BigInt(0))
        }
        return diff
    })
    .reduce((acc, curr, index) => {
      console.log(acc, curr, index)
        if (index === 0) {
            acc[0] = curr
            acc[1] = curr
            return acc
        }
        if (curr < acc[0]) {
            acc[0] = curr
            return acc
        }
        if (curr > acc[1]) {
            acc[1] = curr
            return acc
        }
        return acc
    }, [0, 0])
    
    console.log(result)
    console.log(result.join(' '))
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
