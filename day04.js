const fs = require('fs');

const input = fs.readFileSync('./day04.txt').toString().split('\n\n');

const createPassport = batchData => {
    const passport = {};
    const fields = batchData.split('\n').join(' ').split(' ');
    for (let i = 0; i < fields.length; i++) {
        // console.log(fields[i].substring(4, fields[i].length))
        passport[fields[i].substring(0, 3)] = fields[i].substring(4, fields[i].length)
    }
    return passport;
};

const batchToPassports = batch => {
    const allPassports = [];
    input.forEach(x => allPassports.push(createPassport(x)))
    return allPassports;
};
const newBatch = batchToPassports(input);

const reqFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const checkFields = passport => {
    let fieldsPresent = 0;
    for (let i = 0; i < reqFields.length; i++) {
        if (passport[reqFields[i]]) {
            fieldsPresent++
        }
    }
    return (fieldsPresent === reqFields.length)
}

/*
const allValidPassports = allPassports => {
    let total = 0;
    allPassports.forEach(passport => {
        if (checkFields(passport)) {
            total++
        }
    })
    return total;
}
*/
const allValidPassports = batchToPassports(input).filter(passport => checkFields(passport))

// console.log(allValidPassports[0])

const fieldValidation = passport => {
    const byrNum = parseInt(passport.byr, 10);
    const iyrNum = parseInt(passport.iyr, 10);
    const eyrNum = parseInt(passport.eyr, 10);
    const hgtObj = {
        unit: passport.hgt.substring(passport.hgt.length - 2, passport.hgt.length),
        measure: parseInt(passport.hgt, 10),
    }
    const hclList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f']
    const eclList = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    // console.log(byrNum, iyrNum, eyrNum, hgtObj);

    const isByr = byrNum >= 1920 && byrNum <= 2002;
    const isIyr = iyrNum >= 2010 && iyrNum <= 2020;
    const isEyr = eyrNum >= 2020 && eyrNum <= 2030;
    const isHgt = (hgtObj.unit === "in"
        && hgtObj.measure >= 59
        && hgtObj.measure <= 76) ||
        (hgtObj.unit === "cm"
        && hgtObj.measure >= 150
        && hgtObj.measure <= 193);
    const isHcl =
        passport.hcl.length === 7 
        && passport.hcl[0] === '#'
        && hclList.indexOf(passport.hcl[1]) !== -1
        && hclList.indexOf(passport.hcl[2]) !== -1
        && hclList.indexOf(passport.hcl[3]) !== -1
        && hclList.indexOf(passport.hcl[4]) !== -1
        && hclList.indexOf(passport.hcl[5]) !== -1
        && hclList.indexOf(passport.hcl[6]) !== -1;
    const isEcl = eclList.indexOf(passport.ecl) !== -1;
    const isPid = passport.pid.length === 9 && !isNaN(passport.pid);
    // console.log(isByr, isIyr, isEyr, isHgt, isHcl, isEcl, isPid);

    return (isByr && isIyr && isEyr && isHgt && isHcl && isEcl && isPid)
}

// console.log(fieldValidation(allValidPassports[0]))

console.log(allValidPassports.filter(x => fieldValidation(x)).length);

// console.log(batchToPassports(input)[3])
// console.log(checkFields(batchToPassports(input)[3]))
// console.log(allValidPassports(batchToPassports(input)));