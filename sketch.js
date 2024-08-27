let posicaoXbolinha=300//defina posicao X da bolinha
let posicaoYbolinha=300//defina posicao Y da bolinha
let diametro=20// tamanho da bolinha
let cor// cor da bolinha

function setup() {
  createCanvas(600, 600);
  background(60, 179, 113)
  cor=color(random(0, 255), random(0, 255), random(0, 255))
}

function draw() {
  fill(cor)
  circle(posicaoXbolinha, posicaoYbolinha, diametro)
  //posicaoXbolinha=posicaoXbolinha+3
  //posicaoYbolinha=posicaoYbolinha+1
  diametro=diametro+1
  if (mouseIsPressed){
    cor=color(random(0, 255), random(0, 255), random(0, 255))
  diametro=0 
}
}