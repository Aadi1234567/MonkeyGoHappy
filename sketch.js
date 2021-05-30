var monkey,monkeyrunning;
var bananaImage;
var obstacleImage;
var obstacleGroup;
var forest,jungle;

var ground;
var banana, bananaimg,bananagroup;
var obstacle,obstacleimg,obstaclegroup;
var count = 0;

function preload(){
  backImage = loadImage("jungle.jpg");
 monkeyrunning = loadAnimation("Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png");
      
  bananaImage= loadImage("banana.png");
  jungle= loadImage ("jungle.jpg");
  
  bananaimg= loadImage("banana.png");
  
  obstacleimg = loadImage("stone.png");

}


function setup() {
  createCanvas(400, 400);
  background1 = createSprite(0,0,400);
  background1.addImage("background",jungle);
  ground = createSprite(200,350,400,10);
  ground.visible = false;
  monkey = createSprite(50,310,10,10);
  monkey.addAnimation("monkey",monkeyrunning);
  monkey.scale=0.1;
  bananagroup=new Group();
  background1.velocityX=-4;
  background1.x=background1.width/2;
  obstaclegroup=new Group();
  count= 0;
}

function draw() {
  background(220);
  
  if(background1.x<0){
    
    background1.x = background1.width/2;
    
  }
  if(bananagroup.isTouching(monkey)){
    count=count+1;
   // bananagroup.destoryEach();
  }
  switch(count){
    case 10: monkey.scale= 0.12;
      break;
      case 20: monkey.scale= 0.14;
      break;
        case 30: monkey.scale= 0.16;
      break;
        case 40: monkey.scale= 0.18;
      break;
      
      default:
        break;
  }
  
  if(obstaclegroup.isTouching(monkey)){
monkey.scale=0.08;
  }
  
  
   if(keyDown("space")&& monkey.y >=259){
      monkey.velocityY = -9;
      }
  monkey.velocityY = monkey.velocityY + 0.6;
   monkey.collide(ground);
  food();
  rock();
  drawSprites();
  text("Score"+ count,300,10);
}
function food(){
    if (frameCount % 80 === 0) {
       var banana = createSprite(450,280,40,10);
      
       banana.y = random(200,220);              
    banana.addAnimation("banana",bananaimg);
    banana.scale = 0.05;
    banana.velocityX = -6;
    banana.lifetime=300;
    monkey.depth = banana.depth+1;
    bananagroup.add(banana);

    }
}
function rock(){
   if (frameCount % 300 === 0) {
       var obstacle = createSprite(450,320,10,10);
                 
    obstacle.addImage("Stone",obstacleimg);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    obstacle.lifetime=300;
    obstaclegroup.add(obstacle);
   }
}