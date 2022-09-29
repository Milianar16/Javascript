//*Criar uma função responsável por mostrar o alerta na tela
//

function mostrarAlert() {
    // o objeto document é um objeto que faz uma
    // representação do HTML do seu site dentro do Javascript

    //A propriedade classList retorna um array com todos as classes CSS que
    //um elemento possui

    // classList.add() serve para adicionar novas classes
    
    const divAlert= document.getElementById('alerta')
    divAlert.classList.add('mostrar')  
    texto.innerHTML = `Clique ${contador} `
    contador++ 
}
let contador = 0
const texto = document.querySelector('.texto')
function fecharAlerta(){
    const divAlerta=document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar=document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')


//addEventListener é um método que te permite 
//ouvir eventos do HTML pelo Javascript

//Se eu quiser passar uma funçao como prâmetro para outra eu passo a referência dela, ou seja
//a funçaõ sem os parâmetros na frente
btnMostrar.addEventListener('click', mostrarAlert) //escute o evento de click
btnFechar.addEventListener('click', fecharAlerta)


   

