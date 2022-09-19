alert('Código Funcionando!') // mostra uma mensagem para o usuario
const nomUsuario=prompt('Olá, usuário, qual o se nome?') //mostra uma mensagem e recebe um valor

let num= Number(prompt('Olá, ' + nomUsuario + '. Digite algum numero, por favor')) //5
//console.log(typeof num) // typeof retorna o tipo do valor da variavel armazena

const sucessor= num + 1
const antecessor= num -1

//operadores de incremento
//const sucessor= num++ // =num +1

//alert('0 sucessor de' + 'é' +sucessor)
console.log(num++) //++depois da variavel operador de pos incremento //5//
console.log(num) //6
console.log(++num)//7 // operador de pré-incremento

alert('0 sucessor de' + num+' é' + sucessor)

// operadores de decremento
console.log(num--) //7// operador de pós-decremento
console.log(num) //6
console.log(--num) //5// operador de pré-decremento