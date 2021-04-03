console.warn('1º DESAFIO');
// EXTENSÕES DO ARQUIVO
const listFiles = 'Lista de arquivos mp3: jazz.mp3, rock.mp3, podcast.mp3, blues.mp3';

const mp3 = /\.mp3/g;
console.log(listFiles.match(mp3));

const fileName = /\w+\.mp3/g;
console.log(listFiles.match(fileName));

console.warn('2º DESAFIO');
// ESPAÇOS EM BRANCO

const textWithBlank = 'a   b';
const regexBlank = /a\s\s\sb/
const regexBlank2 = /a...b/;
const regexBlank3 = /a\s+b/;
const regexBlank4 = /a {3}b/;
console.log(textWithBlank.match(regexBlank));
console.log(textWithBlank.match(regexBlank2));
console.log(textWithBlank.match(regexBlank3));
console.log(textWithBlank.match(regexBlank4));

console.warn('3º DESAFIO');
console.warn('CPF dos aprovados');
const CPF = `CPF dos aprovados
    - 600.567.890-12
    - 765.998.345-23
    - 454.674.333-21
    - 678.987.123-87
    - 789.112.543-00`;


const regexCPF = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
console.log(CPF.match(regexCPF));

const PHONE = `Lista telefônica:
    - (11) 98756-1212
    - 98765-4321
    - (85) 99988-7766
    - (21)3261-8899`;

console.warn('Lista telefônica:')
const regexPhone = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g;

console.log(PHONE.match(regexPhone));
console.log(regexPhone.test(PHONE));

const EMAIL = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com`;

console.warn('e-mails dos convidados:')
const regexEMAILA = /[a-zA-Z0-9]+@[a-zA-z0-9]+\.[a-zA-Z0-9]{2,4}/g;
const regexEMAILB = /\w+@\w+\.\w{2,4}/g;
const regexEMAILC = /[\w.]+@\w+\.\w{2,4}/g;
const regexEMAILD = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g;
console.log(EMAIL.match(regexEMAILA));
console.log(EMAIL.match(regexEMAILB));
console.log(EMAIL.match(regexEMAILC));
console.log(EMAIL.match(regexEMAILD));
