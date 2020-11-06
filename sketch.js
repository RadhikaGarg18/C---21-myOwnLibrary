var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(715, 200, 50, 100);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "red";
  movingrect.velocityX = -5;
  fixedrect.velocityX = 5;

  gameobject1 = createSprite(100, 100, 50, 50);
  gameobject2 = createSprite(200, 100, 50, 50);
  gameobject3 = createSprite(300, 100, 50, 50);
  gameobject4 = createSprite(400, 100, 50, 50);

  gameobject1.shapeColor = "blue";
  gameobject2.shapeColor = "blue";
  gameobject3.shapeColor = "blue";
  gameobject4.shapeColor = "blue";
}

function draw() {
  background("pink"); 

  

  if(isTouching(movingrect,gameobject1)){
    gameobject1.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  else{
    gameobject1.shapeColor = "green";
    movingrect.shapeColor = "red";
  }
  bounceOff(movingrect,fixedrect);
  drawSprites();
}
//yes = true , no= false (boolean values)
