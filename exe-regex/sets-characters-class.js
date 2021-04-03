const textChar = '1,2,3,4,5,6,a.b c!d?e[f';
const regex = /[46528]/g;
console.warn('CONJUNTO DE CARACTERES []');
console.log(textChar.match(regex));

const textPhrase = 'João não vai passear na moto!';
const regexSignal = /n[aã]/g;
console.log(textPhrase.match(regexSignal));
const regexSignalB = /n[aã]./g;
console.log(textPhrase.match(regexSignalB));

console.warn('INTERVALOS');
console.log(textChar.match(/[a-z]/g));
console.log(textChar.match(/[b-d]/g));
console.log(textChar.match(/[2-5]/g));
console.log(textChar.match(/[A-Z1-3]/gi));
console.warn('INTERVALOS - CUIDADOS');
const textRange = 'ABC [abc] a-c 1234'
console.log(textRange.match(/[a-c]/g));
console.log(textRange.match(/a-c/g)); // não define um range
console.log(textRange.match(/[A-z]/g)); // intervalos utilizam a ordem ASCII / UNICODE

console.warn('INTERVALOS UNICODE');
const textInter = 'áéíóú àèìòù âêîôû ç ãõ ü'
console.log(textInter.match(/[À-ü]/g));


console.warn('CONJUNTOS COM METACARACTERES');
const metaChar = '.$+*?-';
console.log(metaChar.match(/[+.?*$]/g)); // não necessita de \ escape dentro de conjunto
console.log(metaChar.match(/[+.?*$]./g));

console.log(metaChar.match(/[$-?]/g)); // intervalo (range)

console.log(metaChar.match(/[$\-?]/g)); // não é intervalo
console.log(metaChar.match(/[-?]/g));

console.warn('CONJUNTOS NEGADOS');
console.log(textChar.match(/\D/g));
console.log(textChar.match(/[^0-9]/g));
console.log(textChar.match(/[^\d!\?\[\s,\.]/g));

const textChar2 = '1: !"#$%&\'()*++,-./ 2: :;<=>?@'
console.log(textChar2.match(/[^!-/:-@\s]/g));

