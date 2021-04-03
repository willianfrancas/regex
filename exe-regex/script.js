// flags
// g - global
// i - ignore case

const phrase = 'Carlos assinou o abaixo-assinado';

console.log(phrase.match(/C|ab/));
console.log(phrase.match(/c|ab/i));
console.log(phrase.match(/ab|c/gi));

// UTILIZANDO EM JS
const numberLetter = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

// Metodos de Regex
const myRegex = RegExp('8')
console.log(myRegex.test(numberLetter));
console.log(myRegex.exec(numberLetter));

// Métodos da string
const myLetter = /[a-f]/g
console.log(numberLetter.match(myLetter));
console.log(numberLetter.search(myLetter));
console.log(numberLetter.replace(myLetter, 'Encontrado'));
console.log(numberLetter.split(myLetter));