// no inicio
// Um Byte (8 bits) - 256 caracteres
// Simbolos, Pontuação, A-Z, a-z, 0-9

// Dois Bytes (16 bits) - 65500+ caracteres
// +Simbolos, Pontuação, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes Variável - Expansivel
// Suporta mais de 1 milhão caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos

// https://unicode-table.com/pt/

const texto = 'aʬc௵d';
console.log(texto.match(/\u02AC|\u0BF5/g));