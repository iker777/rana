let rana = document.querySelector(".rana");
const PASOS_RANA = 40;

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
});
btnIzq.onclick = function(){
   objetoRana.moverIzq();
}
btnDer.onclick = function(){
   objetoRana.moverDer();
}
btnAbj.onclick = function(){
   objetoRana.moverAbj();
}