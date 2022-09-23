const qtdDeNumeros = parseInt(prompt('Quantos números será digitado?'))
let soma = 0

for( let i = 1; i <= qtdDeNumeros; i++){
    let num = parseInt(prompt(`Digite o ${i} numero`));
    soma= soma + num;
}

document.write(`A soma é ${soma} e a média é ${soma/qtdDeNumeros}`)