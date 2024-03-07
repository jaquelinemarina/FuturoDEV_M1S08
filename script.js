//Ex 1 - Selecionar elemento por ID
let titulo = document.getElementById('title')

titulo.style.backgroundColor = 'purple'


// Ex 2 - Selecionar elemento por classe
let trocarParagrafo = document.getElementsByClassName('paragrafo')

trocarParagrafo.innerText = "Alterando o conteúdo dos parágrafos utilizando o DOM."

console.log(trocarParagrafo)


//Ex 3 - Criar e Adicionar Elemento
let container = document.querySelector('.container') 

let elementoCriado = document.createElement('span')

elementoCriado.appendChild(document.createTextNode('Este é um novo span iserido a um elemento existente.')) 

container.appendChild(elementoCriado)

console.log(container)