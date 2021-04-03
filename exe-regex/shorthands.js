console.warn('SHORTHANDS');
const textShort = `1,2,3,4,5,6,a.b c!d?e\r   -
f_g`;

console.log(textShort.match(/\d/g)); // números
console.log(textShort.match(/\D/g)); // não numeros
console.log(textShort.match(/\w/g)); // caracteres [a-zA-Z0-9]
console.log(textShort.match(/\W/g)); // não caracteres [^a-zA-Z0-9]
console.log(textShort.match(/\s/g)); // espaço [\t\n\r\f]
console.log(textShort.match(/\S/g)); // não espaço [^\t\n\r\f]