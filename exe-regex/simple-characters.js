const strNumber = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/

console.log(strNumber.split(regexVirgula));
console.log(strNumber.match(regexVirgula));

console.log(strNumber.match(/,/g));
console.log(strNumber.match(/A/g));
console.log(strNumber.match(/A/i));
console.log(strNumber.match(/A/gi));
console.log(strNumber.match(/2/g));
console.log(strNumber.match(/b c!d/));