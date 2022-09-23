const peso = parseFloat(prompt('Qual o seu peso?'))
const altura = parseFloat(prompt('Qual a sua altura?'))
const imc = peso / (altura ** 2)

if(imc < 18.5 ){
    alert('Abaixo do peso')
}else if (imc < 25 && imc >= 18.5){
    alert('Peso Normal')
}else if (imc < 30 && imc >= 25){
    alert('Acima do peso')
}else {
    alert('Obeso')
}