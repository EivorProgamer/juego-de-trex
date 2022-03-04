//variables
var trex, trex_running;
var edges;
var suelo
var sueloimagen
var sueloinvisible
var nube, cargarnube
function preload(){ //cargan imagenes, sonidos y animaciones
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  sueloimagen = loadImage("ground2.png");
  cargarnube = loadImage("cloud.png")
}

function setup(){ //creacion sprites y animaciones
  createCanvas(600,200)
sueloinvisible =createSprite(200, 190, 400, 10)
 sueloinvisible.visible =false
  //crear limites
  edges = createEdgeSprites();
  suelo = createSprite(150, 180, 400, 20);
  suelo.addImage("suelo",sueloimagen)
  //crear sprite del t-rex.
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("trex_corriendo", trex_running);
  trex.scale = 0.5;
}

function draw(){ //repite
  background("white");

     if(keyDown("SPACE")&&trex.y>=150) {
       trex.velocityY = -8
     }
     
trex.collide(sueloinvisible);

trex.velocityY += 0.5;
suelo.velocityX = -2
if(suelo.x <= 0){
  suelo.x = 150;
}
dibujarnubes()
  drawSprites();

}
function dibujarnubes(){
  if(frameCount%75 === 0){
    nube = createSprite (600, 100, 30, 10)
    nube.addImage("nube",cargarnube)
    nube.scale = Math.random()
    nube.y = Math.round(random(10, 100))
    nube.velocityX = -3
    nube.depth = trex.depth
    trex.depth += 1
  }
  
}