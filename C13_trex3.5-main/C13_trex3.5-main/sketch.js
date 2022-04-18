var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var cactos, cacto1, cacto2, cacto3, cacto4, cacto5, cacto6;

var numeros;

var newImage;

var pontos=0;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  cacto1 = loadImage("obstacle1.png");
  cacto2 = loadImage("obstacle2.png");
  cacto3 = loadImage("obstacle3.png");
  cacto4 = loadImage("obstacle4.png");
  cacto5 = loadImage("obstacle5.png");
  cacto6 = loadImage("obstacle6.png"); 
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  text("Pontuação: " + pontos, 500,50);
  pontos += Math.round(frameCount/60);
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  cacto();
  drawSprites();
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //atribua tempo de vida à variável
    cloud.lifetime = 200;
    
    //ajuste a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function cacto() {

  if(frameCount % 70 === 0) {
    cactos = createSprite(600,165,10,40);
    cactos.velocityX = -4;

    cactos.lifetime = 150;

    numeros = Math.round(random(1,6));

    switch (numeros) {
      case 1: cactos.addImage(cacto1);
      break;

      case 2: cactos.addImage(cacto2);
      break;

      case 3: cactos.addImage(cacto3);
      break;

      case 4: cactos.addImage(cacto4);
      break;

      case 5: cactos.addImage(cacto5);
      break;

      case 6: cactos.addImage(cacto6);
      break;

      default: break;
    }
    
    cactos.scale = 0.5;

  }
}
