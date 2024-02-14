'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    console.log(s)
    const dataSplit = s.split(':')
    const format = dataSplit[2].substring(2,4)

    let hour = dataSplit[0]
    if (format.toUpperCase() === 'AM') {
        if (hour === '12') {
            hour = '00'
        } else if (parseInt(hour) > 12) {
            hour = (parseInt(hour) - 12).toString().padStart(2, '0')
        }
    } else {
        if (hour !== '12') {
            hour = (parseInt(dataSplit[0]) + 12).toString().padStart(2, '0')
        }
    }
    const minute = dataSplit[1]
    const seconds = dataSplit[2].substring(0,2)

    console.log({
        hour,
        minute,
        seconds,
        format,
    })
    return `${hour}:${minute}:${seconds}`
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
