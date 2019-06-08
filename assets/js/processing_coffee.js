var click;
var clickAltura;
var clickLargura;
var ciclo;
var canvas;

function windowResized() {
  resizeCanvas($('#page-wrapper').width(), $('#page-wrapper').height());
}

function setup() {
ciclo = 200;
canvas = createCanvas($('#page-wrapper').width(), $('#page-wrapper').height());
canvas.position(0,0)
canvas.style('z-index', '-1');
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
