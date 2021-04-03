console.warn('GRUPOS');
const textoA = 'O José Simão é muito engraçado... hehehehehe';
console.log(textoA.match(/(he)+/g));

const url = 'https://www.site.info www.escola.ninja.br google.com.ag';
console.log(url.match(/(http:\/\/)?(https:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));

console.warn('RETROVISOR');
const html = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>';
console.log(html.match(/<(\w+)>.*<\/\1>/g));

const textoF = 'Lentamente é mente muito lenta.';
console.log(textoF.match(/(lenta)(mente).*\2.*\1\./gi));
console.log(textoF.match(/(?:lenta)(mente).*\1/gi));

console.log(textoF.match(/(lenta)(mente)/gi));
console.log(textoF.match(/(lenta)(mente)?/gi));
console.log(textoF.replace(/(lenta)(mente)/gi, '$2'));

const letters = 'abcdefghijkll';
console.log(letters.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g));
console.log(letters.replace(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)/g, 'Teste $2 s'));

console.warn('GRUPOS ANINHADOS');
const marketA = 'supermercado hipermercado minimercado, mercado';
const marketB = 'Supermercado Hipermercado Minimercado mercado';
console.log(marketA.match(/(super|hiper|mini)?mercado/g));
console.log(marketB.match(/(super|hiper|mini)?mercado/gi));
console.log(marketA.match(/((su|hi)per|mini)?mercado/g));

console.warn('GRUPOS CUIDADOS');
const textoG = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!';
console.log(textoG.match(/[(abc)]/gi));
console.log(textoG.match(/([abc])/gi));
console.log(textoG.match(/(abc)+/gi));

console.log('GRUPOS ESPECIAIS');
const textoH = 'João é calmo, mas no trânsito fica nervoso.'
console.log(textoH.match(/[\wÀ-ú]+/gi));
console.log('POSITIVE LOOKAHEAD')
console.log(textoH.match(/[\wÀ-ú]+(?=,)/gi));
console.log(textoH.match(/[\wÀ-ú]+(?=\.)/gi));
console.log(textoH.match(/[\wÀ-ú]+(?=, mas)/gi));
console.log('NEGATIVE LOOKAHEAD')
console.log(textoH.match(/[\wÀ-ú]+\b(?!,)/gi));
console.log(textoH.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));