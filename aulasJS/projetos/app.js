let altura = 0;
let largura = 0;


function ajutaTamanhoPalcoJogo()
{
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

let X;
let Y;
let vidas = 3;
let nivel = window.location.search;
let tempoMosquito = 1500;
nivel = nivel.replace('?', '');
if(nivel === '1') {
    tempo = 15;
    tempoMosquito = 1500;
} else if(nivel === '2') {
    tempo = 20;
    tempoMosquito = 1000;

}
else {
    tempoMosquito = 750;
    tempo = 25;
}

ajutaTamanhoPalcoJogo();

function posRandomica() {

    if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
        tirarVida();
	}

    X = Math.floor(Math.random() * largura) -  90; 
    Y = Math.floor(Math.random() * altura) - 90;

    X = X < 0 ? 0 : X;
    Y = Y < 0 ? 0 : Y;

    let mosquito = document.createElement('img');
    mosquito.src = 'img/mosca.png';
    mosquito.className ='mosca'+tamanhoAleatorio()+ ' ' + lado();
    mosquito.style.position = 'absolute';
    mosquito.style.left = X + 'px';
    mosquito.style.top = Y + 'px';
    document.body.appendChild(mosquito);
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    }
    console.log(X, Y);
}

function tamanhoAleatorio() 
{     
    return Math.floor(Math.random() * 3) + 1;
}

function lado()
{
    let classe = Math.floor(Math.random() * 2);
    return classe === 0 ? 'ladoA' : 'ladoB';
}



function tirarVida()
{
    
    document.getElementById('v' + vidas).src = 'img/coracao_vazio.png';
    vidas--;
    if(vidas === 0) {
        window.location.href = 'fim_de_jogo.html';
    }
}

let cronometro = setInterval(function() {
    document.getElementById('cronometro').innerHTML = tempo;
    tempo--;
    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(spawn);
        window.location.href = 'vitoria.html';
    }
},1000)