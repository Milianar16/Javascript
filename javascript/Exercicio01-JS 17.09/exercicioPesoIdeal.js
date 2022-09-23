const altura = parseFloat(prompt('Qual a sua altura?'))
const genero = prompt('Qual o seu gênero? Inserir H  para homem ou M para mulher')
let pesoIdeal = 0

if(genero == 'M'){
    pesoIdeal = (60 * altura)
    alert(`Peso Ideal: ${pesoIdeal}`)
}else {
    pesoIdeal = (62 * altura) 
    alert(`Peso Ideal: ${pesoIdeal}`)
}