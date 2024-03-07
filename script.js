//Ex 1 - Selecionar elemento por ID
let titulo = document.getElementById('title')

titulo.style.backgroundColor = 'purple'


// Ex 2 - Selecionar elemento por classe
let trocarParagrafo = document.getElementsByClassName('paragrafo')

trocarParagrafo.innerText = "Alterando o conteúdo dos parágrafos utilizando o DOM."
console.log(trocarParagrafo)
