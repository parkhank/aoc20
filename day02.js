const fs = require('fs');

const example = [
    "1-3 a: abcde",
    "1-3 b: cdefg",
    "2-9 c: ccccccccc",
]
const rawInput = fs.readFileSync('./day02.txt').toString().split('\n');

/*
const isValid = policy => {
    const splitPolicy = policy.split(' ');
    const range = splitPolicy[0].split('-').map(x => parseInt(x, 10));
    const check = splitPolicy[1][0];
    let count = 0;
    for (let i = 0; i < splitPolicy[2].length; i++) {
        if (splitPolicy[2][i] === check) {
            count++
        }
    }
    if (count >= range[0] && count <= range[1]) {
        return true
    }
    return false
    // console.log(range, check)
}
*/
// console.log(isValid(example[2]))

const isValid = policy => {
    const splitPolicy = policy.split(' ');
    const positions = splitPolicy[0].split('-').map(x => parseInt(x, 10));
    const check = splitPolicy[1][0];
    const first = splitPolicy[2][positions[0] - 1] === check
    const second = splitPolicy[2][positions[1] - 1] === check
    return (first && !second) || (!first && second) 
}
// console.log(isValid(example[2]));

const passwordsValid = list => {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (isValid(list[i])) {
            count++
        }
    }
    return count;
}

console.log(passwordsValid(rawInput));