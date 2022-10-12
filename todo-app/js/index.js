/**
 * Métodos de recuperação de elementos HTML
 */
// const todoForm = document.getElementsByTagName('form') //para pegar 1 elemento especifico, acrescenta [i]
// console.log(todoForm)

const todoForm = document.getElementById('todo-form')
const todos = []


let importante //query selector para pegar todos os inputs do tipo "radio".
let medio
let facil
let selectedSize = []
let icone
/**
 * addEventListener serve para ouvir eventos de elementos HTML sempre que foram emitidos
 * Funções anonimas - Funções passadas dentro de eventos. 
*/
todoForm.addEventListener('submit', function(evento) {
    importante = document.querySelector(".importante")
    medio = document.querySelector(".medio")
    facil = document.querySelector(".facil")

    /**
     * cancela o comportamento padrão de um formulario que seria o recarregamento da pagina tentando fazer seu envio
     */
    evento.preventDefault()
    /**
     * cancela a propagação do evento que foi emitido para os elementos pai, evitando que outros eventos sejam emitidos
     */
    evento.stopPropagation()

    //querySelector pega o primeiro elemento por meio de um seletor css. Ex: #todo ou #input#todo
   const todoInput = document.querySelector('#todo')
   

        if(importante.checked) {
            icone = document.createElement('span')
            icone.classList.add('material-symbols-outlined', 'iconeVermelho')
            icone.innerText = 'circle'
            selectedSize.push(icone)

        } else if (medio.checked){
            icone = document.createElement('span')
            icone.classList.add('material-symbols-outlined', 'iconeAmarelo')
            icone.innerText = 'circle'
            selectedSize.push(icone)

        } else{
            icone = document.createElement('span')
            icone.classList.add('material-symbols-outlined', 'iconeVerde')
            icone.innerText = 'circle'
            selectedSize.push(icone)
        }
     //a propriedade value é uma propriedade que representa o atributo value ods elementos de formulario do HTML, para acessarmos o valor que está dentro deles
    
   todos.push(todoInput.value)
   todoInput.value = ''
   renderizarTodos()
})

/**
 * As funções não sofrem pela ordem, ou seja, você pode chamar uma função e declarar ela depois, pois a prioridade do JS na compilação é compilar as funções antes de executar.
 */

function renderizarTodos() {
    const todosListSection = document.querySelector('#todos-list')
    
    todosListSection.innerHTML = '' //esvazia a lista a cada renderizacao

    for (let i = 0; i<todos.length;i++) {
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        pTodoText.innerText = todos[i]//innerText é a propriedade que informa qual o conteudo de texto que esta dentro de um elemento HTML; innerContent retorna o texto de dos elementos da tag e seus filhos

        const marcador = document.createElement('span')

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        //funções anonimas tbm podem ser declaradas dessa forma arrow function: () => {}
        btnDelete.addEventListener('click', () => {
            
            /**
             * descobrir o indice do elemento dentro do array. Dentro dos arrays existe um metodo chamado indexOf() que retorna o indice do elemento. Se ele nao achar o valor dentro do array, ele retorna -1
             */
           const index = i
           //console.log(index)
           /**
            * splice serve para excluir um determinado valor do seu array a partir do seu indice, para que isso não ocorra, basta informar quantos valores serão excluidos
            */
           todos.splice(index, 1)
           selectedSize.splice(index, 1)
           renderizarTodos()
        })

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        btnDelete.appendChild(spanIcon) //elemento pai Delete referenciando o elemento filho span
        divCardBody.append(pTodoText, selectedSize[i], btnDelete) //mesma funcao de appendChild so q append permite colocar varios por vez
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)
    }
    for (let index = 0; index< selectedSize.length; index++){
        selectedSize[i]
    }
    
}