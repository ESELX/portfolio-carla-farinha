var click;
var clickAltura;
var clickLargura;
var ciclo;

function setup() {
altura = window.innerHeight;
largura = window.innerWidth;
ciclo = 200;
createCanvas(largura, altura);
}


function draw() {
if (ciclo > 200) {
  ciclo = 0;
  click = false;
}
ciclo = ciclo + 1;
background(245,245,245);

  if(mouseIsPressed){
    ciclo = 0;
    clickLargura = mouseX;
    clickAltura = mouseY;
    click = true;
  }
  if (click == true) {
    fill(245,245,245);
    ellipse(clickLargura, clickAltura, ciclo, ciclo);
  }
}
