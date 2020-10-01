var mrect, frect;

function setup() {
  createCanvas(800,800);
mrect =   createSprite(400, 400, 100, 100);
frect =   createSprite(600, 450, 100, 100);
}

function draw() {
  background(0);  
  mrect.x = mouseX;
  mrect.y = mouseY;
  if (mrect.x - frect.x < frect.width/2 + mrect.width/2 && frect.x - mrect.x < frect.width/2 + mrect.width/2
    && frect.y - mrect.y < frect.height/2 + mrect.height/2 && mrect.y - frect.y < frect.height/2 + mrect.height/2)
  {
     mrect.shapeColor = "yellow";
     frect.shapeColor = "yellow";
  } 
  else {mrect.shapeColor = "blue";
          frect.shapeColor = "blue";
        }
        
  
  drawSprites();
}