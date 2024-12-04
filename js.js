const ronin = document.querySelector('.ronin');
const lobo = document.querySelector('.lobo');

const jump = () => {
    ronin.classList.add('jump');

    setTimeout(() => {
        ronin.classList.remove('jump'); 
    }, 500);
}

const loop = setInterval(()=> {
     
 const loboPosition = lobo.offsetLeft;
 const roninPosition = +window.getComputedStyle(ronin).bottom.replace('px', '');
 console.log(roninPosition);
   if (loboPosition <= 177 && roninPosition < 100) {
      lobo.style.animation = 'none' ;
      lobo.style.left = `${loboPosition}px`;
    clearInterval(loop);


   }

}, 10)

document.addEventListener('keydown', jump);

let posicaoBackground = 0;

function moverBackground() {

  posicaoBackground -= 2;

  document.getElementById('game-board').style.backgroundPosition = posicaoBackground + 'px 0'

  requestAnimationFrame(moverBackground);
}

moverBackground();