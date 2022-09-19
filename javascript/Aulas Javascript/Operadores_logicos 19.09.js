/**
 * Operadores lógicos
 */

// operador E 

/**
 * 
// V -> Verdadeiro
// F -> Falso

/**
 * V V -> V
 * F V -> F
 * v F -> F
 * F F-> F
 */

// média precisa ser maior ou igual a 7 E preciso ter, no mínimo, 80% de presença
const media =(7 + 10 + 10) /3
const presença =0.95

console.log( media >= 7 && presença >= 0.8) //true

// Operador Ou

/**
 * v v->V
 * F V ->V
 * V F->V
 * F F->F
 */

console.log(4 > 7 || 3 <2) //false
console.log(5 > 3.5 || 7 > 8) //true

const estado = "Ce"

console.log(estado=='SP'|| estado == 'MG')

//const idade = 15

//console.log(idade >= 16|| idade < 60)

// Operador Não

/**
 * Not V ->F
 * Not F-> V
 */

const resultado = 5 < 3
console.log(!resultado)
console.log(!true)
console.log(!false)

const logado =false

//**if (!logado) // não esta logado
console.log('Você não pode acessar o meu site, sai daqui')
/*
/**
 * 0-> Desligado (False)
 * 1-> Ligado   (True)
 */