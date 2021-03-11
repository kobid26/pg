var Ground, BackgroundImage;
var ash, AshRunningImage;
var spikeObstacleImage, spikeObstacleImage2;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var pokemonGroup, obstaclesGroup;

var restart,gameOver1;
var pokemonCount = 0;


function preload() {

  // obstacles pics
  BackgroundImage = loadImage("is/background.png");
  spikeObstacleImage = loadImage("is/spikeobstacle.png");
  spikeObstacleImage2 = loadImage("is/spikeobstacle2.png");
  mineObstacleImage = loadImage("is/mineobstacle.png");
  teamRocketImage = loadImage("is/teamrocketCropped.png")

  //pokemons and ash pics and music
  
  AshRunningImage = loadImage("is/ashrunning21.png");
  BulbaImage = loadImage("is/bulbasaurCropped.png");
  charmanderImage = loadImage("is/charmandercropped.png")
  pikachuImage = loadImage("is/pikachucropped.png");
  requazaImage = loadImage("is/requazacropped.png");
  squirtleImage = loadImage("is/squirtlecropped.png");
  abrakadabraImage = loadImage("is/abrakadabraCropped.png")
  arbokImage = loadImage("is/arbokCropped.png");
  blastoiseImage = loadImage("is/blastoiseCropped.png");
  charizardImage = loadImage("is/charizardCropped.png");
  jigglypuffImage = loadImage("is/jigglypuffCropped.png");
  psyduckImage = loadImage("is/psyduckCropped.png");
  sceptileImage = loadImage("is/sceptileCropped.png");
  snorlaxImage = loadImage("is/snorlaxcropped.png");
  steelixImage = loadImage("is/steelixCropped.png");
  venausaurImage = loadImage("is/venausaurcropped.png");
  darkaraiImg = loadImage("is/darkaraiImage.png");
  dialgaImg = loadImage("is/dialgaImage.png");
  palkiaImg = loadImage("is/palkiaImage.png");
  diancieImg = loadImage("is/diancieImage.png");
  arceusImg = loadImage("is/arceusImage.png");
  giratinaImg = loadImage("is/giratinaImage.png");
  greninjaImg = loadImage("is/greninjaImage.png");
  groudonImg = loadImage("is/groudonImage.png");
  HoOhImg = loadImage("is/HoOhImage.png");
  kyogreImg = loadImage("is/kyogreImage.png");
  lugiaImg = loadImage("is/lugiaImage.png");
  mewtoImg = loadImage("is/mewtoImage.png");
  tntImg = loadImage("is/tntImage.png")
  


  
}

function setup() {
  createCanvas(1200, 800);

 

  Ground = createSprite(0, 0, 600, 600);
  Ground.addImage(BackgroundImage);
  Ground.velocityX = -5
  invisibleGround = createSprite(400, 380, 900, 20);
  invisibleGround.visible = false;

  ash = createSprite(100, 330, 20, 20);
  ash.addImage(AshRunningImage);
  ash.scale = 0.25;
  ash.setCollider("circle", 0, 0, 300);
 // ash.debug=true;


  obstaclesGroup = new Group();
  pokemonGroup = new Group();
}

function draw() {

  

  


  spawnObstacles();
  spawnPokemon();
  drawSprites();
  if (gameState === PLAY) {
    //bgSound1.play();
    if (keyDown("space") && ash.y >= 260) {
      ash.velocityY = -12;
    }
    
    ash.velocityY = ash.velocityY + 0.8;
    if (Ground.x < 0) {
      Ground.x = Ground.width / 2;
    }
    if (keyDown("c") && ash.isTouching(pokemon)) {
      pokemon.destroy();
      pokemonCount = pokemonCount+1
    }
    

    if (ash.isTouching(obstaclesGroup)) {
      gameState = END
    }
    
  } else if (gameState === END) {


    obstaclesGroup.setVelocityXEach(0);
    ash.velocityX = 0;
    pokemonGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    pokemonGroup.setLifetimeEach(-1);
    obstaclesGroup.destroyEach();
    pokemonGroup.destroyEach();
    pokemonGroup.visible = false;
    obstaclesGroup.visible = false;
    
    
    fill("red")
    textSize(28)
    text("Game Over!! ",400,200);
    
    fill("yellow")
    textSize(28)
    text("Pokemons Caught  ==> "+pokemonCount,400,300);
    
    fill("green")
    textSize(28)
    text("Press r to Restart",400,400);

  }
  if (keyDown("r")){
    reset();
    
  }

  ash.collide(invisibleGround);

  
  if (gameState === END) {
    Ground.velocityX = 0;
    
    
  }
  
  

  
  textSize(32);
  fill("red")
  textFont("segoeUI")
  text("Pokemons Collected =>"+pokemonCount,150,50)

 
}


function spawnObstacles() {
  if (frameCount % 200 === 0) {
    Obstacle = createSprite(900, 387, 10, 10);
    Obstacle.scale = 0.3;
    Obstacle.velocityX = -6
    obstaclesGroup.add(Obstacle);
    Obstacle.lifetime = 600;
    Obstacle.setCollider("circle",0,0,130)
    //Obstacle.debug=true;

    var rand = Math.round(random(1, 5));
    switch (rand) {
      case 1:
        Obstacle.addImage(spikeObstacleImage);
        break;
      case 2:
        Obstacle.addImage(spikeObstacleImage2);
        break;
      case 3:
        Obstacle.addImage(mineObstacleImage)
        break;
      case 4:
        Obstacle.addImage(teamRocketImage);
        break;
      case 5:
        Obstacle.addImage(tntImg)

      default:
        break;



    }
  }
}

function spawnPokemon() {

  if (frameCount % 250 === 0) {
    pokemon = createSprite(900, 370, 30, 30);
    pokemon.velocityX = -2;
    pokemon.scale = 0.3;
    pokemonGroup.add(pokemon);
    pokemon.lifetime = 600;
    pokemon.x = Math.round(random(420, 430));

    var rand = Math.round(random(1, 26));
    switch (rand) {
      case 1:
        pokemon.addImage(BulbaImage);
        break;
      case 2:
        pokemon.addImage(charmanderImage);
        break;
      case 3:
        pokemon.addImage(requazaImage);
        break;
      case 4:
        pokemon.addImage(pikachuImage);
        break;
      case 5:
        pokemon.addImage(squirtleImage);
        break;
      case 6:
        pokemon.addImage(abrakadabraImage)
        break;
      case 7:
        pokemon.addImage(arbokImage);
        break;
      case 8:
        pokemon.addImage(blastoiseImage);
        break;
      case 9:
        pokemon.addImage(charizardImage);
        break;
      case 10:
        pokemon.addImage(jigglypuffImage);
        break;
      case 11:
        pokemon.addImage(psyduckImage);
        break;
      case 12:
        pokemon.addImage(sceptileImage);
        break;
      case 13:
        pokemon.addImage(snorlaxImage);
        break;
      case 14:
        pokemon.addImage(steelixImage);
        break;
      case 15:
        pokemon.addImage(darkaraiImg);
        break;
      case 16:
        pokemon.addImage(dialgaImg);
        break;
      case 17:
        pokemon.addImage(palkiaImg);
        break;
      case 18:
        pokemon.addImage(mewtoImg);
        break;
      case 19:
        pokemon.addImage(kyogreImg);
        break;
      case 20:
        pokemon.addImage(HoOhImg);
        break;
      case 21:
        pokemon.addImage(arceusImg);
        break;
      case 22:
        pokemon.addImage(diancieImg);
        break;
      case 23:
        pokemon.addImage(groudonImg);
        break;
      case 24:
        pokemon.addImage(greninjaImg);
        break;
      case 25:
        pokemon.addImage(giratinaImg);
        break;
      case 26:
        pokemon.addImage(lugiaImg);
        lugiaImg.scale=0.2
        break;
      default:
        break;



    }
  }
}

function reset() {
  gameState = PLAY;
  
  pokemonCount = 0;
 
  Ground.velocityX = -5
  obstaclesGroup.destroyEach();
  pokemonGroup.destroyEach();
  
}