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
 * author: Luan Eleuterio
 */
function compareTriplets(a, b) {
    var aliceAndBob = [0,0];
    var len = a.length

    //aliceAndBob[0] = Alice
    //aliceAndBob[1] = Bob

    for (var i = 0; i < len; i++){   
        if (a[i] > b[i]) {
            aliceAndBob[0] += 1
        } else if (a[i] < b[i]) {
            aliceAndBob[1] += 1
        }
    }
  
    return aliceAndBob
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
