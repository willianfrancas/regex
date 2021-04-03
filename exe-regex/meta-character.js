// . ? * + - ^ $ | [] {} () \ :

// PIPE | OU / OR
const stringChar = '1,2,3,4,5,6,a.b c!d?e';
console.warn('OPERADOR PIPE');
const regexPonto = /\./g
console.log(stringChar.split(regexPonto));
const regexSymbols = /\.|,|\?|!| /g
console.log(stringChar.split(regexSymbols));

// 2º exemplo
console.warn('OPERADOR PIPE 2º exemplo');
const phraseOr = 'Você precisa escolher sim, não ou não sei!';
const regexOr = /sim|não|sei/g
console.log(phraseOr.match(regexOr));

// PONTO . é um coringa, válido para uma posição
const strNumberB = '1,2,3,4,5,6,7,8,9,0';
console.warn('OPERADOR PONTO .');
console.log(strNumberB.match(/1.2/g));
console.log(strNumberB.match(/1..2/g));
console.log(strNumberB.match(/1..,/g));

const notas = '8.3,7.5,8.4,10.0';
console.log(notas.match(/8../g));
console.log(notas.match(/.\../g));
console.warn('PROBLEMAS COM OPERADOR PONTO .');
const texto = 'Bom\ndia'
console.log(texto.match(/.../g)); //PONTO não engloba \n
// ESPAÇOS EM BRANCO
const textCar = `
ca	r
r	o s!
`;
console.warn('ESPAÇOS EM BRANCO');
console.log(textCar.match(/ca\tr\nr\to\ss!/));