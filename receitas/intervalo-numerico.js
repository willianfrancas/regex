console.warn('VALIDANDO IP 1º');
const numbers = '0 1 10 1982 199 201 249 255 256 312 1010 1512';
console.log(numbers.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g));

console.warn('VALIDANDO IP 2º');
const texto = `
Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256
256.256.256.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0
`;

const regx = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])';
const ipv4 = RegExp(`\\b${regx}\\.${regx}\\.${regx}\\.${regx}\\b`, 'g');
console.log(texto.match(ipv4));

console.warn('VALIDANDO SENHA');
const password = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234
#OpA1?
Foi123!
`;

console.log(password.match(/^.{6,20}$/gm));
console.log(password.match(/^(?=.*[A-Z]).{6,20}$/gm));
console.log(password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm));

console.warn('VALIDANDO EMAIL');
const email = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
    - fulano+de+tal@escola.ninja.br
`
console.log(email.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g));