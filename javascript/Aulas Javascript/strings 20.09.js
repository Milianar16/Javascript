// Delimitação de Strings

const aspasSimples= 'Olá mundo'
//console.log(aspasSimples)

// caracteres de escape
const aspasDuplas = "Olá eu sou o \nJavascript.Eu sou melhor que o Pyton"
//console.log(aspasDuplas)

// utilizando crase o texto não da erro quando quebra o texto e mostra como escreve
const textComCrase= `Olá eu sou o 
Javascript.Eu sou melhor que o Pyton`
//console.log(textComCrase)

 //Métodos das strings permite manipular uma coisa por outra no text,code

 const texto = 'O Javascript foi criado alguns anos após o Python. No entanto, o javascript é bem mais bacana.'

 console.log(texto)
 console.log(texto.toUpperCase()) //maiuscula
 console.log(texto.toLowerCase()) //minuscula
 console.log(texto.concat(' A lingueagem C é a mãe de todas as linguagens')) // concat agrupa frases existentes
 //console.log(texto[2] , texto[17]) // contagem de letra começa contando do 0 //J
 console.log(texto.substring(2,12)) // recorde apartir da posição 2 do texto
// case sensitive
// substituar partes do meu texto
console.log(texto.replace('Javascript' , 'Rust'))  //replace substitui a primeira ocorrência da pesquisa
console.log(texto.replaceAll('Javascript' , 'Kotlin')) //replaceAll substitui todas as palavras que solicitei
console.log(texto.replace(/Javascript/g, 'PHP')) // (expressão regular) faz o mesmo que o replace g-global "J"
console.log(texto.replace(/Javascript/gi, 'PHP')) // gi- ignora se Javascript está com letra maiuscula ou minuscula tanto faz ele acha

const html ='<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html'))

console.log(html.endsWith('</body>'))

const mensagem = '                              Olá, mundo'
console.log(mensagem)
console.log(mensagem.trim()) // trim remove o espaço tanto inicio e depois do text

let senha ='sonic'

console.log(senha.length)
console.log(senha.length >=8)

let nome = ' miliana'

console.log(nome.length)
console.log(nome.length >=5)
