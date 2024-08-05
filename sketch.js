barco, movBarco, mar, seaImage;

function preload(){
  seaImage = loadImage("sea.png");

  movBarco = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  mar = createSprite(200,200,100,10);
  mar.addImage("sea",seaImage);
  mar.scale = 0.24;

  barco = createSprite(100,300,10,10);
  barco.addAnimation("ship",movBarco);
  barco.scale = 0.2;

}

function draw() {
  background("blue");
 
  mar.velocityX = -2;

  if (mar.x < 0) {
    mar.x = mar.width / 2 * mar.scale;
  }
  

  drawSprites();
}