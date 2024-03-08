//----Alterando elementos-----

//innerHTML
let title = document.querySelector('#title');

console.log(title);

title.innerHTML = "Mudando o titulo inicial";

//textContent
let subtitle = document.querySelector('.subtitle');

console.log(subtitle);

subtitle.textContent = 'Mudando o segundo titulo' ;

//diferencas entre eles
let exemplosInner = document.getElementById('lista3');

console.log('---usando innerHTML')
console.log(exemplosInner.innerHTML);
console.log('---usando innerText')
console.log(exemplosInner.innerText);

// ----Criando elementos----
let novoParagrafo = document.createElement('p');

console.log(novoParagrafo);

let texto = document.createTextNode('Este é o conteudo do paragrafo inserido');

console.log(texto);

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

let body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo);

//criar elemento dentro de um existente
let container = document.getElementById('container');

console.log(container);

let elementoCriado = document.createElement('span');

console.log(elementoCriado);

elementoCriado.appendChild(document.createTextNode('texto de span criado.'));
console.log(elementoCriado);

container.appendChild(elementoCriado);

// ----Removendo elementos------
// removendo elemento filho de dentro do pai
let container2 = document.querySelector('#container');

console.log(container2);

let textoParagrafo = document.querySelector('#container p');

console.log(textoParagrafo);

container2.removeChild();

//remover um elemento

let subtitle = document.querySelector('.subtitle');
console.log(subtitle);

subtitle.remove();


// -----trocando elementos-----
let jogadorNovo = document.createElement('h3');

let texto3 = document.createTextNode("Este é o texto do h3 substituido");

jogadorNovo.appendChild(texto3);

console.log(jogadorNovo);

//----elemento que desejo trocar----
let jogadorAntigo = document.querySelector('#title');

console.log(jogadorAntigo);

let timeTodo = jogadorAntigo.parentNode;
console.log(timeTodo);

timeTodo.replaceChild(jogadorNovo, jogadorAntigo);

// ----Adicionando atributos--------
let btnExemplo = document.querySelector('#btn');

btnExemplo.setAttribute('disabled', 'disabled');
btnExemplo.setAttribute('style', 'background-color: green; color: white')

btnExemplo.setAttribute('class', 'testando-atributo');
console.log(btnExemplo);

// remover atributo -----
let lista = document.querySelector('#lista');
console.log(lista);

lista.removeAttribute('id');

//-----Adicionar css-----
let title5 = document.querySelector('#title');

title5.style.color = 'red';

let subtitulo = document.querySelector('.subtitle')

subtitulo.style.cssText = 'color: blue; background-color: pink;'

//----proriedades do document---------
console.log(document.head);
console.log(document.body);
console.log(document.links[0]);

document.links[0].textContent = 'lista de um link só';

document.links[0].style.backgroundColor = 'pink';

console.log(document.URL);
console.log(document.title);

document.title = 'Aula 2';








