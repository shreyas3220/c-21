var fixedRect,movingRect;
var go1, go2,go3,go4;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.velocityX=5;
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.velocityX=-5;
  go1=createSprite(100, 100, 50, 50);
  go1.shapeColor="green";
  go2=createSprite(200, 100, 50, 50);
  go2.shapeColor="green";
  go3=createSprite(300, 100, 50, 50);
  go3.shapeColor="green";
  go4=createSprite(400, 100, 50, 50);
  go4.shapeColor="green";
}

function draw() {
  background("black");  
 movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  bounceOff(movingRect,fixedRect)
  //calling a function
  if(isTouching(movingRect, go2))
  {
    movingRect.shapeColor="red";
    go2.shapeColor="red";
  }
  
 else
 {
   movingRect.shapeColor="green";
   go2.shapeColor="green";

 }
  
  
  
  drawSprites();
}
//declaring a function
