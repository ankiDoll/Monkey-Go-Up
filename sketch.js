//Global Variables

var ground,groundImage,invisibleGround;

var monkey,monkeyImage;

var banana,bananaImage;

var stone,stoneImage;

var score = 0;


function preload(){
  groundImage = loadImage("jungle.jpg");
  bananaImage = loadImage("Banana.png");
  stoneImage = loadImage("stone.png");
  
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
}


function setup() {
  createCanvas(600,300);
  
  
  
  invisibleGround = createSprite(300,280,600,5);
  invisibleGround.shapeColor = "green";
 
  
  ground =  createSprite(100,100);
  ground.x = ground.width/2;
  ground.addImage(groundImage);
  ground.scale = 1; 
  ground.velocityX = -2;
  
  monkey = createSprite(100,250);
  monkey.addAnimation("monkeyMove",monkeyImage);
  monkey.scale = 0.1;
  
  banana = createSprite(300,150);
  banana.addImage(bananaImage);
  banana.scale = 0.06;
  banana.velocityX = -4;
  
  stone = createSprite(Math.round(random(610,700)),250);
  stone.addImage(stoneImage);
  stone.scale = 0.1;
  stone.velocityX = -5;
  
 
  
}


function draw(){
 background("lavender"); 
  
 
  
  if(ground.x < 100){
    
   ground.x = ground.width/2;
    
  }
  
  if(banana.x < -10){
    
  banana.x = Math.round(random(620,800));
  
  }
  
  if(banana.isTouching(monkey)){
  
  score = score + 2;
  banana.x = Math.round(random(620,1000));
  
  
  }
  
  
  if(stone.x < -10){
    
  stone.x = Math.round(random(620,800));
  
  }
  
  
  if(stone.isTouching(monkey)){
    
  stone.x = Math.round(random(620,1000));
  monkey.scale = monkey.scale - 0.02;
  
  }
  
  switch (score) {
    case 10 :  monkey.scale = 0.12;
               break;
               
    case 20 :  monkey.scale = 0.14;
               break;
               
    case 30 :  monkey.scale = 0.16;
               break;
               
    case 40 :  monkey.scale = 0.18;
               break;
               
    default : break;
    
    
  }
  
  if(keyDown("space")){
    
    if(monkey.collide(invisibleGround)){
  
    monkey.velocityY = -15;
      
    }
    
  
  }
  
     
     monkey.velocityY = monkey.velocityY + 0.8;
     monkey.collide(invisibleGround);
 
     
     
    
  
  drawSprites();
  fill(255);
  textSize(30);
   text("score: " + score,380,50);
}