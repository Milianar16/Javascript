/**
 * Funçoes são blocos de construção fundamentais em Javascript. Uma função é um procedimento de JavaScript
 * - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la*/

// Parâmetros
// São valores que passamos para as funçoes, para que eles utilizam esses valores dentro delas
//f(x)=ax+b

// passar um valor como parâmetro para mostrar dentro do alert

function cumprimentar(mensagem = 'Mensagem padrão', repetir = 1) {
    for (let i = 1; i <= repetir; i++) {
        alert(mensagem)  // 
    }

}

function soma(num, num2) {
    // return serve para enviar o resultado da execução daquela função
    let result = num + num2
    return result
}
function maiorValor(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }

}


let resultado = soma(5, 9)
console.log(`O valor da variavel resultado é ${resultado}`)

//const num1 = parseInt(prompt('Informe o primeiro número'))
//const num2 = parseInt(prompt('Digite o segundo número'))

//alert(`O maior número entre esses é ${maiorValor(num1, num2)}`)

//console.log(maiorValor(5, 10))
//cumprimentar('Olá, mundo', 3)
//cumprimentar('Eu gosto muito do JavaScript')
//cumprimentar('Javascript sola o C#')


//Criem uma função que gere o resultado de uma equação de segundo grau
//ax² + bx + c = 0

//delta =b2 -4ac
//b=-b +- raiz de delta/2a


function equacaoSegundoGrau(a, b, c){
 const delta= b** 2 -4 * a * c
 const raizDelta= Math.sqrt(delta)
 const x1=(-b + raizDelta)/(2 * a)
 const x2=(-b - raizDelta)/(2*a)

 return [x1, x2]
}

console.log(equacaoSegundoGrau(1, -1, -12)) // -3 e 4