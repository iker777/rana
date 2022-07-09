let rana = document.querySelector(".rana");
const PASOS_RANA = 40;

function ganarJuego(){
   if(objetoRana.x == 200 && objetoRana.y == 440){
      alert("Has ganado");
   }
}

let objetoRana = {
   x: 0,
   y: 0,
   moverArr: function(){
      this.y -= PASOS_RANA;
      rana.style.top = this.y + "px";
   },
   moverAbj: function(){
      this.y+= PASOS_RANA;
      rana.style.top = this.y + "px";
   },
   moverIzq: function(){
      this.x -= PASOS_RANA;
      rana.style.left = this.x + "px";
   },
   moverDer: function(){
      this.x += PASOS_RANA;
      rana.style.left = this.x + "px";
   },
}

let btnArr = document.querySelector(".control__btn--arr");
let btnIzq = document.querySelector(".control__btn--izq");
let btnDer = document.querySelector(".control__btn--der");
let btnAbj = document.querySelector(".control__btn--abj");

btnArr.addEventListener("click", function(){
   objetoRana.moverArr();
   ganarJuego();
});
btnIzq.onclick = function(){
   objetoRana.moverIzq();
   ganarJuego();
}
btnDer.onclick = function(){
   objetoRana.moverDer();
   ganarJuego();
}
btnAbj.onclick = function(){
   objetoRana.moverAbj();
   ganarJuego();
}
btnArr.addEventListener("click", function(){
   objetoRana.moverArr();
   ganarJuego();
});
btnIzq.onclick = function(){
   objetoRana.moverIzq();
   ganarJuego();
}
btnDer.onclick = function(){
   objetoRana.moverDer();
   ganarJuego();
}
btnAbj.onclick = function(){
   objetoRana.moverAbj();
   ganarJuego();
}

document.addEventListener("keydown", (e) => {
   switch (e.key){
      case "ArrowDown":
         objetoRana.moverAbj();
         ganarJuego();
         break;
      case "ArrowUp":
         objetoRana.moverArr();
         ganarJuego();
         break;
      case "ArrowLeft":
         objetoRana.moverIzq();
         ganarJuego();
         break;
      case "ArrowRight":
         objetoRana.moverDer();
         ganarJuego();
         break;
      default:
         console.log("fail...");
         break;
   }
})