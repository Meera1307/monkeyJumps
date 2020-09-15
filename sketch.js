var monkey,banana,stone,bg,ig,ground;



function preload(){
  
  groundImage = loadImage("ground.jpg");
  
  backImage = loadImage("jungle.jpg");
 
  stoneImage = loadImage("stone.png");
  
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",                     "Monkey_04","Monkey_05","Monkey_06","Monkey_07",                     "Monkey_08","Monkey_09","Monkey_10");
  
   
  
}


function setup() {
  
  createCanvas(500,300);
  
  bg = createSprite(-2,100);
  bg.addImage(backImage);
  bg.velocityX =-2;
  bg.x=bg.width/2;
  bg.scale = 0.7;
  
  monkey = createSprite(100,230,10,10);
  monkey.addAnimation("jumping",monkeyImage);
  monkey.scale = 0.12;
  
  
  
  
  ig = createSprite(250,280,600,10);
  ig.visible = false;
  
  

}


function draw(){
  
 background(255);
 
 monkey.collide(ig);
 monkey.y = monkey.y + 1.8;
 //monkey.velocityY = 1;  
  
  if(keyDown("space") && monkey.y > 190){     
     monkey.velocityY = -10 ;
  } 
  if(bg.x<400){ 
     bg.x = bg.width/2;
  }
  if(World.frameCount % 100 === 0){
  stone = createSprite(200,250,10,10);
  stone.addImage(stoneImage);
  stone.scale = 0.1;
  stone.velocityX = -2; 
  }
  
  
  drawSprites();
}