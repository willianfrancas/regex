console.warn('BORDAS');
const textoR = 'Romário era um excelente jogador\n, mas hoje é um político questionador';

console.log(textoR.match(/r/gi));
console.log(textoR.match(/^r/gi));
console.log(textoR.match(/r$/gi));

console.log(textoR.match(/^r.*r$/gi));
console.log(textoR.match(/^r[\s\S]*r$/gi));

console.warn('MULTILINE');
const textoC = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`
console.log(textoC.match(/\n/g));
console.log(textoC.match(/^(\w).+\1$/gi));
console.log(textoC.match(/^(\w).+\1$/gim));

console.warn('BORDAS DE PALAVRAS');
const diaTexto = 'dia diatonico diafragma media wikipedia bom_dia melodia radial';
console.log(diaTexto.match(/\bdia\w+/gi));
console.log(diaTexto.match(/\w+dia\b/gi));
console.log(diaTexto.match(/\w+dia\w+/gi));
console.log(diaTexto.match(/\bdia\b/gi));
const diaTextoB = 'dia diatonico diafragma, media wikipedia bom_dia melodia radial';

console.log(diaTextoB.match(/\bdia\b/gi));
console.log(diaTextoB.match(/(\S*)?dia(\S*)?/gi));
console.log(diaTextoB.match(/(\S*)?dia(\S*)?  /gi));
console.log(diaTextoB.match(/([\wÀ-ú-]*)?dia([\wÁ-ú-]*)?/gi));