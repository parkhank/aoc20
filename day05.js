const fs = require('fs');
const example = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']
const input = fs.readFileSync('./day05.txt').toString().split('\n');

const findID = boarding => {
    let row = 0;
    for (let i = 0; i < 7; i++) {
        if (boarding[i] === 'B') {
            row += 2 ** (6 - i)
        }
    }
    let seat = 0;
    for (let j = 0; j < 3; j++) {
        if (boarding[7 + j] === 'R') {
            seat += 2 ** (2 - j)
        }
    }
    return row * 8 + seat
}

// console.log(findID(example[0]));

/*const findHighestID = boardingList => {
    let highest = 0;
    for (let i = 0; i < boardingList.length; i++) {
        if (findID(boardingList[i]) > highest) {
            highest = findID(boardingList[i])
        }
    }
    return highest
}*/

//console.log(findHighestID(input));

const listAllIDs = boardingList => {
    let IDList = [];
    for (let i = 0; i < boardingList.length; i++) {
        IDList.push(findID(boardingList[i]))
    }
    return IDList.sort((a, b) => a - b);
}

const allIDs = listAllIDs(input);

const findMyID = allIDs => {
    for (let i = 0; i < allIDs.length; i++) {
        console.log(allIDs[i])
        if (allIDs[i] !== (i + 13)) {
            return allIDs[i - 1]
        }
    }
}

console.log(findMyID(allIDs));