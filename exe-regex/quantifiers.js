console.warn('QUANTIFICADORES - ? zero ou um');

const textoA = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!';
const textoB = 'There is a big fog in NYC';

console.log(textoA.match(/fogo?/gi));
console.log(textoB.match(/fogo?/gi));


console.warn('QUANTIFICADOR - + um ou mais');
console.log(textoA.match(/fogo+/gi));
console.log(textoB.match(/fogo+/gi));

const textoC = 'Os números: 0123456789.';
console.log(textoC.match(/[0-9]/g));
console.log(textoC.match(/[0-9]+/g));

console.warn('QUANTIFICADORES - * zero ou mais');
console.log(textoA.match(/fogo*/gi));
console.log(textoB.match(/fogo*/gi));

console.warn('QUANTIFICADOR - {} ');
const textoD = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.';
console.log(textoD.match(/\d{1,2}/g));
console.log(textoD.match(/[0-9]{2}/g));
console.log(textoD.match(/\d{1,}/g));

console.log(textoD.match(/\w{7}/g));
console.log(textoD.match(/[\wõã]{7,}/g));

console.warn('QUANTIFICADOR - GULOSO | greedy');
const textoE = '<div>Content 01</div><div>Content 02</div>';

console.log(textoE.match(/<div>.+<\/div>/g));
console.log(textoE.match(/<div>.*<\/div>/g));
console.log(textoE.match(/<div>.{0,100}<\/div>/g));

console.warn('QUANTIFICADOR - NÃO GULOSO | not greedy');
console.log(textoE.match(/<div>.+?<\/div>/g));
console.log(textoE.match(/<div>.*?<\/div>/g));
console.log(textoE.match(/<div>.{0,100}?<\/div>/g));


