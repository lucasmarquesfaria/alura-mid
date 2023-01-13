function toca(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

for  ( let contador = 0; contador < listaDeTeclas.length; contador++) {  // aqui contador++ usamos ele em vez da linha 22

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        toca(idAudio);
    }

   // usando em cima no for -  contador = contador + 1;

}


