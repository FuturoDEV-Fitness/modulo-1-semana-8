//clique
function clique(){
    this.style.backgroundColor = 'yellow';
}

let elemento = document.getElementById('elementoClique');

elemento.addEventListener('click', clique);

elemento.addEventListener('click', function(){
    elemento.style.backgroundColor = 'yellow';
});

//double clique
let divColorida = document.querySelector('#div-colorir');

divColorida.addEventListener('dblclick', function(){
    divColorida.style.cssText = 'color: blue; background-color: pink;';
    divColorida.style.backgroundColor = 'pink';
    divColorida.style.width = '200px';
    this.style.height = '200px';
    divColorida.style.textAlign = 'center';
    divColorida.style.display = 'flex';
    divColorida.style.justifyContent = 'center';
    divColorida.style.alignItems = 'center'; 

    console.log(this);
});

//mouse
let subtitulo = document.querySelector('.subtitle');

subtitulo.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'orange';
});

subtitulo.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'white';
});

//tecla
document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        console.log('clicou na tecla enter');
    }
});

document.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        console.log('soltou a tecla enter');
    }
});




