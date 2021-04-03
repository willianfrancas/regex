const applyColor = (txt, regx, color) =>
    txt.replace(regx, `<span style="color: #${color}"><b>$1</b></span>`);

const files = require('./files');
const texto = files.read('codigo-fonte.html');

const regex = /<code>[\s\S]*<\/code>/i;
let codigo = texto.match(regex)[0];
console.log(codigo);

// String
codigo = applyColor(codigo, /(\".*\")/g, 'ce9178');

// Palavras reservadas
codigo = applyColor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf');

// Tipos
codigo = applyColor(codigo, /\b(void|int)\b/g, '1385e2');

// Uma linha
codigo = applyColor(codigo, /(\/\/.*?\n)/g, '267703');

// Multiplas linhas
codigo = applyColor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703');
const conteudoFinal = texto.replace(regex, codigo);

files.write('codigo-fonte.html', conteudoFinal);
