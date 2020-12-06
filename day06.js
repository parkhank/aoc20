const fs = require('fs');
const input = fs.readFileSync('./day06.txt').toString().split('\n\n');

const oneGroupExample = ['abcx', 'abcy', 'abcz']

/*
const oneGroupCustoms = form => {
    // take a "form" (ie oneGroupExample) and return # of unique letters
    const allLetters = form.split('\n').join('').split('');
    // console.log(allLetters);
    let declaration = {};
    for (let i = 0; i < allLetters.length; i++) {
        declaration[allLetters[i]] += 1;
    }
    return Object.keys(declaration).length
}
*/
// console.log(oneGroupCustoms(oneGroupExample));

const oneGroupCustoms = form => {
    const passengers = form.split('\n').length;
    // take a "form" (ie oneGroupExample) and return # of unique letters
    const allLetters = form.split('\n').join('').split('');
    // console.log(allLetters);
    let declaration = {};
    for (let i = 0; i < allLetters.length; i++) {
        if (declaration[allLetters[i]]) {
            declaration[allLetters[i]] ++;
        } else {
            declaration[allLetters[i]] = 1;
        }
        // declaration[allLetters[i]] += 1;
    }
    // console.log(declaration);
    // console.log(passengers);
    let total = 0;
    let yesList = Object.keys(declaration);
    // console.log(yesList);
    for (let j = 0; j < yesList.length; j++) {
        if (declaration[yesList[j]] === passengers) {
            total++;
        }
    }
    return total;
}

const allCustoms = allForms => {
    let total = 0;
    for (let i = 0; i < allForms.length; i++) {
        // console.log(allForms[i])
        total += oneGroupCustoms(allForms[i])
    }
    return total;
}

console.log(allCustoms(input))

// console.log(input[0].split('\n').join('').split());