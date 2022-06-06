
var ship, shipimg
var sea, seaimg

function preload(){
shipimg= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg= loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  sea =createSprite(200,200,400,400);
  sea.addImage(seaimg);

  ship = createSprite(200,200,60,60)
  
 ship.addAnimation("ship",shipimg)
 
  ship.scale=0.5
}

function draw() {
  background("blue");
 


  drawSprites()
}