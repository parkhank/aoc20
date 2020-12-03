const fs = require('fs');

const example = [
    "..##.......",
    "#...#...#..",
    ".#....#..#.",
    "..#.#...#.#",
    ".#...##..#.",
    "..#.##.....",
    ".#.#.#....#",
    ".#........#",
    "#.##...#...",
    "#...##....#",
    ".#..#...#.#",
]
const input = fs.readFileSync('./day03.txt').toString().split('\n');

/*
const countTrees = forest => {
    let numOfTrees = 0;
    let xPos = 0;
    for (let i = 0; i < forest.length; i++) {
        // console.log(forest[i]);
        if (forest[i][xPos] === "#") {
            numOfTrees++
        }
        xPos += 3;
        if (xPos >= forest[0].length) {
            xPos -= forest[0].length
        }
    }
    return numOfTrees
}
*/

const countTrees = (forest, right, down) => {
    let numOfTrees = 0;
    let xPos = 0;
    for (let i = 0; i < forest.length; i += down) {
        // console.log(forest[i]);
        if (forest[i][xPos] === "#") {
            numOfTrees++
        }
        xPos += right;
        if (xPos >= forest[0].length) {
            xPos -= forest[0].length
        }
    }
    return numOfTrees
}

const a = countTrees(input, 1, 1);
const b = countTrees(input, 3, 1);
const c = countTrees(input, 5, 1);
const d = countTrees(input, 7, 1);
const e = countTrees(input, 1, 2);

console.log(a*b*c*d*e);