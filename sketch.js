
var wall,thickness

var bullet,weight,speed


function preload(){

   thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  }
  
  function setup() {
  
    createCanvas(1500,400);

    bullet=createSprite(50, 200, 50, 50);
    bullet.shapeColor="blue"
    bullet.velocityX=speed
    wall=createSprite(1200,200,thickness,height/2);

  }
  
  function draw() {
    background(255,255,255); 

    
  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=false;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor="red"
}

if(damage<10){
  wall.shapeColor="green"
}

  }
    drawSprites();
  }