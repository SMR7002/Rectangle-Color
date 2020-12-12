var fixedRect , movingRect

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 100, 80);
  movingRect = createSprite(800,400,50,100);

  fixedRect.shapeColor="white";
  movingRect.shapeColor="purple";
  
} 

function draw() {
  background(0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2   &&
    movingRect.x- fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y-movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y-fixedRect.y <= fixedRect.height/2 + movingRect.height/2) 
    
  { 

  fixedRect.shapeColor = "red";
  movingRect.shapeColor="red";
  }
  else {
    fixedRect.shapeColor="white";
    movingRect.shapeColor="purple";
  }
  drawSprites();
}



