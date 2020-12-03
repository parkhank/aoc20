const fs = require('fs');

const example = [1721, 979, 366, 299, 675, 1456];

const rawInput = fs.readFileSync('./day01.txt').toString().split('\n');
const input = rawInput.map(x => parseInt(x, 10));

/*
const findEntries = expenses => {
    for (let i = 0; i < expenses.length - 1; i++) {
        for (let j = i + 1; j < expenses.length; j++) {
            // console.log(expenses[i] + expenses[j])
            if (expenses[i] + expenses[j] === 2020) {
                return expenses[i] * expenses[j]
            }
        }
    }
    return 'No sum of 2020 found'
}
*/

// console.log(findEntries(input))

// console.log(findEntries(example))
//console.log(example)

const findThree = expenses => {
    for (let i = 0; i < expenses.length - 2; i++) {
        for (let j = i + 1; j < expenses.length - 1; j++) {
            for (let k = i + 2; k < expenses.length; k++) {
                // console.log(expenses[i] + expenses[j] + expenses[k])
                if (expenses[i] + expenses[j] + expenses[k] === 2020) {
                    return expenses[i] * expenses[j] * expenses[k]
                }
            }
        }
    }
    return 'No three-sum of 2020 found'
}

console.log(findThree(input))
// console.log(findThree(example))