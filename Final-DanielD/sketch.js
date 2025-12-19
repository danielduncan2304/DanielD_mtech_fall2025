//background variables
  let r = 155;
  let g = 100;
  let b = 255;

//ellipse variables
  let ellipseX = 350;
  let ellipseY = 350;

//my computer sometimes runs the sketch slow,
//for others, originalX = 8
//for me, originalX = 12 :(((
  let originalX = 8;
  let originalY = 3;


  let xMove = originalX;
  let yMove = originalY;
  let eOpacity = 255;
  let eMove = false;
  let cFC; 


//images
  let skull;
  let field;
  let ball;
  let goalieL;
  let goalieR;
  let space;
  let astronaut;
  let alienL;
  let alienR;
  let showImage = true;
  let imageTransparency = 255;

//sounds
  let ballbeep;
  let alienSL;
  let alienSR;
  let gameoverS;
  let victoryS; 
  let gruntSL;
  let gruntSR;
  let soccerhitS;
  let astroS;
  let hasPlayed = false;
  let hasPlayedGO = false;


//powerup images
  let flashbang;
  let fastforward;
  let slowmotion;
  let multiball;

//Boolean flags to disable other powerups when one is active
  let fbActive = false;
  let fastActive = false;
  let slowActive = false;
  let multiballActive = false;

  let powerUpActive = false;

//flag for triggering class methods
  let multiActive = false;


//variable for tracking which power up is chosen
  let whichPower = 5;

//arrays
  let powerPosX = [175, 190, 200, 225, 280, 315, 375, 400, 450, 500, 550]; // array containing x positions of power ups
  let powerPosY = [150, 200, 250, 300, 375, 400, 450, 500, 550]; // array containing y positions of power ups 

//class variables
  let ellipses = [];
  ellipses.length = 10;

//timer
  let currentTime = 0;
  let prevTime = 0;


//game states
  let state = "preGame";
  let scene = "preA";
  let gameState = "gameA";
  let end = "gameOver"
  
//initial player paddle positions
  let p1X = 30; 
  let p1Y = 375;
  let p2X = 670;
  let p2Y = 375
  let pMove = 9;
  let paddleMove = true;
  
  let p1Paddle;


  let p1Point = 0;
  let p2Point = 0;

//countdown timer
let countdown = 3;



function preload(){
//loads scene images
  skull = loadImage("images/skull.png");
  field = loadImage("images/field.png");
  ball = loadImage("images/ball.png");
  goalieL = loadImage("images/goalie_left.png");
  goalieR = loadImage("images/goalie_right.png");
  space = loadImage("images/space.png");
  astronaut = loadImage("images/astronaut.png");
  alienL = loadImage("images/alien_left.png");
  alienR = loadImage("images/alien_right.png");
//loads powerup images
  flashbang = loadImage("powerups/flashbang.png");
  fastforward = loadImage("powerups/fastforward.png");
  slowmotion = loadImage("powerups/slowmotion.png");
  multiball = loadImage("powerups/multiball.png");
//loads sounds
  ballbeep = loadSound("sounds/ballbeep.mp3")
  alienSL = loadSound("sounds/AlienL.mp3");
  alienSR = loadSound("sounds/AlienR.mp3");
  gameoverS = loadSound("sounds/gameover.mp3");
  victoryS = loadSound("sounds/victory.mp3");
  gruntSL = loadSound("sounds/gruntL.mp3");
  gruntSR = loadSound("sounds/gruntR.mp3");
  soccerhitS = loadSound("sounds/soccerhit.mp3");
  astroS = loadSound("sounds/astro.mp3");
}

function setup() {
//sets up canvas, textalign, textsize, textfont, and imagemode
  createCanvas(700, 700);
  textAlign(CENTER);
  textSize(45);
  textFont('Courier New');
  imageMode(CENTER);

  ballbeep.setVolume(0.3);
  alienSL.setVolume(0.4);
  alienSR.setVolume(0.4);
  gameoverS.setVolume(0.3);
  victoryS.setVolume(0.3);
  gruntSL.setVolume(0.3);
  gruntSR.setVolume(0.3);
  soccerhitS.setVolume(0.3);
  astroS.setVolume(0.2);



  //each iteration of the loop creates a new MultiPong object 
  //for the array "ellipses" at the index of "i"
  for(let i = 0; i < ellipses.length; i++)
  {
    ellipses[i] = new MultiPong(350,350);
  }
}

function draw() {
  if (state === "preGame"){
    preGame();
  }
  else if (state === "game"){
    game();
  }
  else if (state === "player1WinA"){
    player1WinA();
  }
  else if (state === "player2WinA"){
    player2WinA();
  }
  else if (state === "player1WinB"){
    player1WinB();
  }
  else if (state === "player2WinB"){
    player2WinB();
  }
  else if (state === "player1WinC"){
    player1WinC()
  }
  else if (state === "player2WinC"){
    player2WinC()
  }
  else if (state === "gameOver"){
    gameOver();
  }

  
      

}


function preGame(){

  if (scene === "preA"){
    preA()
  }
  if (scene === "preB"){
    preB()
  }
  if (scene === "preC"){
    preC()
  }
  
}

// basic, plain purple background, plain ball, plarin paddles etc
  function preA(){
  //background color
  background (r,g,b);
  //background border
  rectMode(CENTER);
  strokeWeight(40);
  stroke(r-45, g-45, b-45);
  fill(0,0,0,0);
  rect(width/2, height/2, width, height);

  //ellipse
  strokeWeight(0);
  fill(255)
  ellipse(ellipseX, ellipseY+30, 40, 40);

  //beginning text
  textSize(45);
  text("Welcome to Pong!", width/2, height/3.5);
  textSize(30);
  text("First to 5 Points WINS!", width/2, height/2.8);
  textSize(20);
  text("Press Keys 1, 2, or 3 To Change Scenes", width/2, height/2.35);
  textSize(30);
  text("Click to Start", width/2, height/2.1);


  
  
  // player 1 control instructions
  textSize(18);
  strokeWeight(1);
  stroke(255,200,200,255);
  fill(255,200,200,255);
  text("Player 1 Controls:", width/4, height/1.8);
  text("'W' and 'S'", width/4, height/1.65);
  textSize(15);
  text("Player 1 Press 'd' for a power up", width/2-160, height/1.55);

  //player 2 control instructions
  textSize(18);12
  stroke(180,180,255);
  fill(180,180,255);
  text("Player 2 Controls:", width/1.3, height/1.8);
  text("'UP ARROW' and 'DOWN ARROW'", width/1.3, height/1.65);
  textSize(15);
  text("Player 2 Press '/' for a power up", width/2+175, height/1.55);

  p1Point = 0;
  p2point = 0;
  }
// soccer theme: soccer field, soccer ball, goalies as paddles
  function preB(){
 //background soccer field
  background (r-100,g+100,b);
  //soccer ball png as ball and pixelated goalie as paddle
  image(field, width/2-5, height/2,870,760);
  


  image(ball, ellipseX+3, ellipseY+30, 200,125);

  //beginning text
  textSize(45);
  strokeWeight(1);
  stroke(0);
  fill(0);
  textSize(45);
  text("Welcome to Pong!", width/2, height/3.5);
  textSize(30);
  text("First to 5 Points WINS!", width/2, height/2.8);
  textSize(20);
  text("Press Keys 1, 2, or 3 To Change Scenes", width/2, height/2.35);
  textSize(30);
  text("Click to Start", width/2, height/2.1);



  // player 1 control instructions
  textSize(18);
  strokeWeight(1);
  stroke(205,150,150);
  fill(235,180,180);
  text("Player 1 Controls:", width/4, height/1.8);
  text("'W' and 'S'", width/4, height/1.65);
  textSize(15);
  text("Player 1 Press 'd' for a power up", width/2-160, height/1.55);

  //player 2 control instructions
  textSize(18);
  strokeWeight(1);
  stroke(180,180,255);
  fill(180,180,255);
  text("Player 2 Controls:", width/1.3, height/1.8);
  text("'UP ARROW' and 'DOWN ARROW'", width/1.3, height/1.65);
  textSize(15);
  text("Player 2 Press '/' for a power up", width/2+175, height/1.55);

  //player points reset
  p1Point = 0;
  p2Point = 0; 
  }

// space theme: starry background, astronaut as ball, aliens as paddles
function preC(){
  
  background (r,g+100,b);
  image(space, width/2, height/2, 900,750);

  image(astronaut, ellipseX+3, ellipseY+40, 250,175);

  //beginning text
  textSize(45);
  strokeWeight(1);
  stroke(255);
  fill(255);
  textSize(45);
  text("Welcome to Pong!", width/2, height/3.5);
  textSize(30);
  text("First to 5 Points WINS!", width/2, height/2.8);
  textSize(20);
  text("Press Keys 1, 2, or 3 To Change Scenes", width/2, height/2.35);
  textSize(30);
  text("Click to Start", width/2, height/2.1);

  // player 1 control instructions
  textSize(18);
  strokeWeight(1);
  stroke(255,200,200,255);
  fill(255,200,200,255);
  text("Player 1 Controls:", width/4, height/1.8);
  text("'W' and 'S'", width/4, height/1.65);
  textSize(15);
  text("Player 1 Press 'd' for a power up", width/2-160, height/1.55);

  //player 2 control instructions
  textSize(18);
  stroke(180,180,255);
  fill(180,180,255);
  text("Player 2 Controls:", width/1.3, height/1.8);
  text("'UP ARROW' and 'DOWN ARROW'", width/1.3, height/1.65);
  textSize(15);
  text("Player 2 Press '/' for a power up", width/2+175, height/1.55);
  p1Point = 0;
  p2Point = 0;
  }



function game(){
  if (scene == "preA"){
    gameState = "gameA";
      if (gameState === "gameA"){
      gameA();
    }
  }

  if (scene == "preB"){
    gameState = "gameB";

     if (gameState === "gameB"){
      gameB();
    }
  }

  if (scene == "preC"){
    gameState = "gameC";
     if (gameState === "gameC"){
      gameC();
    }
  }
 

}




function gameA(){
  //normal theme
  //background color

  background (r,g,b);

  //background border
  rectMode(CENTER);
  strokeWeight(40);
  stroke(r-45, g-45, b-45);
  fill(0,0,0,0);
  rect(width/2, height/2, width, height);

  //ellipse
  strokeWeight(0);
  fill(250,250,250,eOpacity);
  ellipse(ellipseX, ellipseY, 40, 40);
   
    

//player 1 paddle
  rectMode(CENTER);
  strokeWeight(6);
  stroke(225,0,0);
  fill(255,100,100);
  p1Paddle = rect(p1X, p1Y, 15, 100);

//player 2 paddle
  strokeWeight(6);
  stroke(0,0,255);
  fill(100,100,220);
  rect(p2X, p2Y, 15, 100);
 

//start/stop ellipse movement based on eMove boolean
if (eMove == false){
  ellipseX+= !xMove;
  ellipseY+= !yMove;
}
else if (eMove == true){
  ellipseX+= xMove;
  ellipseY+= yMove;
}

//round countdown
  if (frameCount % 60 == 0 && countdown > 0)
    {
    countdown --;
    }
  if (countdown > 0)
  {
    strokeWeight(1);
    stroke(255);
    fill(255);
    textSize(50);
  //display countdown number
    text(countdown, width/2, height/4);

  //prevent ball movement
      eMove = false;
  }
  else{eMove = true;}


// ellipse bounce for player 2
  if (ellipseX > p2X-30 && ellipseY > p2Y-65 && ellipseY < p2Y +65){
    ellipseX = ellipseX-15;
    xMove = -xMove;
    ballbeep.play();
  }

//ellipse bounce for player 1
  if (ellipseX < p1X+30 && ellipseY > p1Y-65 && ellipseY < p1Y +65){
    ellipseX = ellipseX+15;
    xMove = -xMove;
    ballbeep.play();
  }


//ellipse bounce for top and bottom walls
  if (ellipseY >= height-40 || ellipseY <= 35){
    ballbeep.play();
    if (ellipseY >= height-45){
      ellipseY = ellipseY-8
    }
    if (ellipseY <= 35){
      ellipseY = ellipseY+10
    }
    yMove = -yMove;

  }


//player 1 movement
  if (keyIsDown(87)){
    p1Y = p1Y - pMove;
  }
  if (keyIsDown(83)){
    p1Y = p1Y + pMove;
  }

//player 2 movement
  if (keyIsDown(UP_ARROW))
	  {
		  p2Y = p2Y - pMove;
	  }
  if (keyIsDown(DOWN_ARROW))
	  {
		  p2Y = p2Y + pMove;
	  }
  

//player 1 win condition
   if (ellipseX >= width){
    p1Point++;
    state = "player1WinA";
  }
  //player 2 win condition
  else if (ellipseX <= 0){
    p2Point++;
    state = "player2WinA";
  }


  if (p1Point >= 5 || p2Point >= 5){
    state = "gameOver";
  }


  if (whichPower == 0){
    flash();
  }
  if (whichPower == 1){
    fastfwd();
  }
  if (whichPower == 2){
    slowmo();
  }
  if (whichPower == 3)
  {
    multi(); 
  }


if(multiActive == true)
  {
    for(let i = 0; i < ellipses.length; i++)
      {
        ellipses[i].display();
        ellipses[i].move();
      }
  }


//player scores
  strokeWeight(3.5);
  stroke(255);
  fill(255);
  textSize(25);
//player 1
  stroke(255,50,50);
  fill(255,150,150);
  text('Player 1:', 105, height/12);
  text(p1Point, 190, height/12)
//player 2
  stroke(50,50,255);
  fill(150,150,255);
  text('Player 2:', width-130, height/12);
  text(p2Point, width-50, height/12);

  // if (powerUpActive == true)
  // {
  //   text(frameCount-cFC, width/2, height/2)
  // }


}

function gameB(){
  // soccer theme

  //background color
  background (r,g,b);

  //background border
  if (showImage === true){
    tint(255, 255);
   image(field, width/2-5, height/2,870,760);
  
  }
  else{
    background(r,g,b);
  }
 


  //ellipse
  strokeWeight(0);
  fill(250,250,250,220);
  tint(255, imageTransparency);
  image(ball, ellipseX, ellipseY, 200, 125);


//player 1 paddle
  rectMode(CENTER);
  strokeWeight(6);
  stroke(225,0,0);
  fill(255,100,100);
  rect(p1X+40, p1Y, 15, 100);
  tint(255,255);
  image(goalieL, p1X, p1Y, 200, 100);


//player 2 paddle
  strokeWeight(6);
  stroke(0,0,255);
  fill(100,100,220);
  rect(p2X-55, p2Y, 15, 100);
  image(goalieR, p2X-25, p2Y, 200, 100);
 


// ellipse bounce for player 2
  if (ellipseX > p2X-80 && ellipseY > p2Y-65 && ellipseY < p2Y +65){
    ellipseX = ellipseX-3;
    xMove = -xMove;
    gruntSR.play();
    soccerhitS.setVolume(0.3);
    soccerhitS.play();
  }

//ellipse bounce for player 1
  if (ellipseX < p1X+75 && ellipseY > p1Y-65 && ellipseY < p1Y +65){
    ellipseX = ellipseX+3;
    xMove = -xMove;
    gruntSL.play();
    soccerhitS.setVolume(0.3);
    soccerhitS.play();
  }


//ellipse bounce for top and bottom walls
  if (ellipseY >= height-40 || ellipseY <= 35){
    soccerhitS.setVolume(0.1);
    soccerhitS.play();
    if (ellipseY >= height-45){
      ellipseY = ellipseY-3;
    }
    if (ellipseY <= 35){
      ellipseY = ellipseY+3;
    }
    yMove = -yMove;

  }

  //player 1 movement
  if (keyIsDown(87)){
    p1Y = p1Y - pMove;
  }
  if (keyIsDown(83)){
    p1Y = p1Y + pMove;
  }

  //player 2 movement
  if (keyIsDown(UP_ARROW))
	  {
		  p2Y = p2Y - pMove;
	  }
  if (keyIsDown(DOWN_ARROW))
	  {
		  p2Y = p2Y + pMove;
	  }
  
  
//players win condition
   if (ellipseX >= width){
    p1Point++;
    // state = "gameOver";
     state = "player1WinB";
  }
  //player 2 win condition
  else if (ellipseX <= 0){
    p2Point++;
    state = "player2WinB";
  }


  if (p1Point >= 5 || p2Point >= 5){
    state = "gameOver";
  }

 //start/stop ellipse movement based on eMove boolean
if (eMove == false){
  ellipseX+= !xMove;
  ellipseY+= !yMove;
}
else if (eMove == true){
  ellipseX+= xMove;
  ellipseY+= yMove;
}

//round countdown
  if (frameCount % 60 == 0 && countdown > 0)
    {
    countdown --;
    }
  if (countdown > 0)
    {
    strokeWeight(1);
    stroke(0);
    fill(0);
    textSize(50);
    //display countdown number
    text(countdown, width/2, height/4);

    //prevent ball movement
      eMove = false;
  }
  else{
    eMove = true;
  }



  //powerup activation
  if (whichPower == 0){
    flash();
  }
  if (whichPower == 1){
    fastfwd();
  }
  if (whichPower == 2){
    slowmo();
  }
  if (whichPower == 3)
  {
    multi(); 
  }

  if(multiActive == true)
  {
    for(let i = 0; i < ellipses.length; i++)
      {
        ellipses[i].display();
        ellipses[i].move();
      }
  }

//player scores
  strokeWeight(3.5);
  stroke(255);
  fill(255);
  textSize(25);
//player 1
  stroke(255,50,50);
  fill(255,150,150);
  text('Player 1:', 105, height/12);
  text(p1Point, 190, height/12)
//player 2
  stroke(50,50,255);
  fill(150,150,255);
  text('Player 2:', width-130, height/12);
  text(p2Point, width-50, height/12)


}

function gameC(){

  //background color
  background (r,g,b);

  
  //background border
  if (showImage == true){
    tint(255,255);
    image(space, width/2-5, height/2,870,760);
  }
  else{
    background (r,g,b);
  }


  //ellipse
  strokeWeight(0);
  fill(250,250,250,220);
  tint(255,imageTransparency+25);
  image(astronaut, ellipseX, ellipseY, 250, 175);


//player 1 paddle
  rectMode(CENTER);
  strokeWeight(6);
  stroke(225,0,0);
  fill(255,100,100);
  tint(255,255)
  rect(p1X+40, p1Y, 15, 100);
  image(alienL, p1X, p1Y, 200, 100);


//player 2 paddle
  strokeWeight(6);
  stroke(0,0,255);
  fill(100,100,220);
  rect(p2X-55, p2Y, 15, 100);
  image(alienR, p2X-25, p2Y, 200, 100);


// ellipse bounce for player 2
  if (ellipseX > p2X-97 && ellipseY > p2Y-80 && ellipseY < p2Y +70){
    ellipseX = ellipseX-3;
    xMove = -xMove;
    alienSR.play();
    astroS.play();
  }

//ellipse bounce for player 1
  if (ellipseX < p1X+87 && ellipseY > p1Y-65 && ellipseY < p1Y +65){
    ellipseX = ellipseX+3;
    xMove = -xMove;
    alienSL.play();
    astroS.play();
  }


//ellipse bounce for top and bottom walls
  if (ellipseY >= height-45 || ellipseY <= 35){
    astroS.play();
    if (ellipseY >= height-45){
      ellipseY = ellipseY-3;
    }
    if (ellipseY <= 35){
      ellipseY = ellipseY+3;
    }
    yMove = -yMove;

  }


     //player 1 movement
  if (keyIsDown(87)){
    p1Y = p1Y - pMove;
  }
  if (keyIsDown(83)){
    p1Y = p1Y + pMove;
  }

  //player 2 movement
  if (keyIsDown(UP_ARROW))
	  {
		  p2Y = p2Y - pMove;
	  }
  if (keyIsDown(DOWN_ARROW))
	  {
		  p2Y = p2Y + pMove;
	  }
  


//players win condition
   if (ellipseX >= width){
    p1Point++;
    // state = "gameOver";
     state = "player1WinC";
  }
  //player 2 win condition
  else if (ellipseX <= 0){
    p2Point++;
    state = "player2WinC";
  }


  if (p1Point >= 5 || p2Point >= 5){
    state = "gameOver";
  }

  
 //start/stop ellipse movement based on eMove boolean
if (eMove == false){
  ellipseX+= !xMove;
  ellipseY+= !yMove;
}
else if (eMove == true){
  ellipseX+= xMove;
  ellipseY+= yMove;
}

//round countdown
  if (frameCount % 60 == 0 && countdown > 0)
    {
    countdown --;
    }
  if (countdown > 0)
    {
    strokeWeight(1);
    stroke(255);
    fill(255);
    textSize(50);
    //display countdown number
    text(countdown, width/2, height/4);

    //prevent ball movement
      eMove = false;
  }
  else{
    eMove = true;
  }


//powerup activation
  if (whichPower == 0){
    flash();
  }
  if (whichPower == 1){
    fastfwd();
  }
  if (whichPower == 2){
    slowmo();
  }
  if (whichPower == 3)
  {
    multi(); 
  }
  if(multiActive == true)
  {
    for(let i = 0; i < ellipses.length; i++)
      {
        ellipses[i].display();
        ellipses[i].move();
      }
  }

//player scores
  strokeWeight(3.5);
  stroke(255);
  fill(255);
  textSize(25);
//player 1
  stroke(255,50,50);
  fill(255,150,150);
  text('Player 1:', 105, height/12);
  text(p1Point, 190, height/12)
//player 2
  stroke(50,50,255);
  fill(150,150,255);
  text('Player 2:', width-130, height/12);
  text(p2Point, width-50, height/12)

}


function gameOver(){
  if (!gameoverS.isPlaying() && !hasPlayedGO){
    gameoverS.play();
    hasPlayedGO = true;
  }

  background (255,0,0);
  fill(255);
  textSize(45);
  text("Game Over!!!", width/2, height/4);
  if (p1Point >= 5) {text("Player 1 wins :)", width/2, height/3)}
  if (p2Point >= 5) {text("Player 2 wins :)", width/2, height/3)}
  textSize(25);
  text("Press 'r' to Restart", width/2, height/2.5);
  image(skull, width/2, height/1.8, 300, 200);

//player 1
  // stroke(255);
  fill(255);
  text('Player 1:', 105, height/12);
  text(p1Point, 190, height/12)
//player 2
  // stroke(255);
  fill(255);
  text('Player 2:', width-130, height/12);
  text(p2Point, width-50, height/12);

}

function player1WinA(){

  if (!victoryS.isPlaying() && !hasPlayed){
    victoryS.play();
    hasPlayed = true;
  }


  background (r,g,b);
  strokeWeight(3.5);
  stroke(255,50,50);
  fill(255,150,150);
  textSize(45);
  text("Player 1 SCORES!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);

    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;

//player scores
  strokeWeight(3.5);
  stroke(255);
  fill(255);
  textSize(25);
//player 1
  stroke(255,50,50);
  fill(255,150,150);
  text('Player 1:', 105, height/12);
  text(p1Point, 190, height/12)
//player 2
  stroke(50,50,255);
  fill(150,150,255);
  text('Player 2:', width-130, height/12);
  text(p2Point, width-50, height/12);

}

function player2WinA(){
  if (!victoryS.isPlaying() && !hasPlayed){
    victoryS.play();
    hasPlayed = true;
  }
  background (r,g,b);
  strokeWeight(3.5);
  stroke(50,50,155);
  fill(150,150,255);
  textSize(45);
  text("Player 2 SCORES!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);

    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;

//player scores
  strokeWeight(3.5);
  stroke(255);
  fill(255);
  textSize(25);
//player 1
  stroke(255,50,50);
  fill(255,150,150);
  text('Player 1:', 105, height/12);
  text(p1Point, 190, height/12)
//player 2
  stroke(50,50,255);
  fill(150,150,255);
  text('Player 2:', width-130, height/12);
  text(p2Point, width-50, height/12);
}

function player1WinB(){
  if (!victoryS.isPlaying() && !hasPlayed){
    victoryS.play();
    hasPlayed = true;
  }
  //background soccer field
  background (r-100,g+100,b);
  //soccer ball png as ball and pixelated goalie as paddle
  image(field, width/2-5, height/2,870,760);

  
  fill(0);
  strokeWeight(3.5);
  stroke(255,50,50);
  fill(255,150,150);
  textSize(45);
  text("Player 1 SCORES!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);
  
    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;

  //player scores
  strokeWeight(3.5);
  stroke(255);
  fill(255);
  textSize(25);
//player 1
  stroke(255,50,50);
  fill(255,150,150);
  text('Player 1:', 105, height/12);
  text(p1Point, 190, height/12)
//player 2
  stroke(50,50,255);
  fill(150,150,255);
  text('Player 2:', width-130, height/12);
  text(p2Point, width-50, height/12);
}

function player2WinB(){
  if (!victoryS.isPlaying() && !hasPlayed){
    victoryS.play();
    hasPlayed = true;
  }
  //background soccer field
  background (r-100,g+100,b);
  //soccer ball png as ball and pixelated goalie as paddle
  image(field, width/2-5, height/2,870,760);
  strokeWeight(3.5);
  stroke(50,50,155);
  fill(150,150,255);
  textSize(45);
  text("Player 2 SCORES!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);
  

    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;

//player scores
  strokeWeight(3.5);
  stroke(255);
  fill(255);
  textSize(25);
//player 1
  stroke(255,50,50);
  fill(255,150,150);
  text('Player 1:', 105, height/12);
  text(p1Point, 190, height/12)
//player 2
  stroke(50,50,255);
  fill(150,150,255);
  text('Player 2:', width-130, height/12);
  text(p2Point, width-50, height/12);
}

function player1WinC(){
  if (!victoryS.isPlaying() && !hasPlayed){
    victoryS.play();
    hasPlayed = true;
  }
  //background color
  background (r,g,b);

  //background border
  tint(255,255);
  image(space, width/2-5, height/2,870,760);

  fill(255,150,150);
  stroke(255,0,0);
  textSize(45);
  text("Player 1 SCORES!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);


    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;

  //player scores
  strokeWeight(3.5);
  stroke(255);
  fill(255);
  textSize(25);
//player 1
  stroke(255,50,50);
  fill(255,150,150);
  text('Player 1:', 105, height/12);
  text(p1Point, 190, height/12)
//player 2
  stroke(50,50,255);
  fill(150,150,255);
  text('Player 2:', width-130, height/12);
  text(p2Point, width-50, height/12);
}

function player2WinC(){
  if (!victoryS.isPlaying() && !hasPlayed){
    victoryS.play();
    hasPlayed = true;
  }
  //background color
  background (r,g,b);

  //background border
  tint(255,255);
  image(space, width/2-5, height/2,870,760);

  fill(150,150,255);
  stroke(0,0,255);
  textSize(45);
  text("Player 2 SCORES!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);


    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;

  //player scores
  strokeWeight(3.5);
  stroke(255);
  fill(255);
  textSize(25);
//player 1
  stroke(255,50,50);
  fill(255,150,150);
  text('Player 1:', 105, height/12);
  text(p1Point, 190, height/12)
//player 2
  stroke(50,50,255);
  fill(150,150,255);
  text('Player 2:', width-130, height/12);
  text(p2Point, width-50, height/12);
}

//powerup functions
function flash(){
  image(flashbang, fbX, fbY, flashbang.width/8, flashbang.height/8);

  if(ellipseX >= fbX-30 && ellipseX <= fbX+30 && ellipseY >= fbY-30 && ellipseY <= fbY+30)
    {
      showImage = false;
      powerUpActive = true;
      imageTransparency = 50;
      cFC = frameCount
      fbX = 900;

      r = 255;
      g = 255;
      b = 255;
    }

    if (frameCount-cFC >= 200 || state == "player1WinA" || state == "player2WinA" || state == "player1WinB" || state == "player2WinB" || state == "player1WinC" || state == "player2WinC"  ){
      showImage = true;
      powerUpActive = false;
      imageTransparency = 255;
      r = 155;
      g = 100;
      b = 255;
      print("fb restore");
    }


}

function fastfwd(){
  image(fastforward, fX, fY, fastforward.width/8, fastforward.height/8);
   if (ellipseX >= fX-30 && ellipseX <= fX+30 && ellipseY >= fY-30 && ellipseY <= fY+30)
      {
        tint(255,255)
        fX = 800;
        cFC = frameCount;  
        powerUpActive = true;

        xMove = xMove*1.4;
        yMove = yMove*1.4;
        pMove = pMove*1.6;
      }

    if (frameCount-cFC >= 200 && xMove > 0 && yMove > 0)
      {
        powerUpActive = false;
        xMove = originalX;
        yMove = originalY;
        pMove = 9;
        print("fast restore");
      } 
}

function slowmo(){
  image(slowmotion, sX, sY, slowmotion.width/9, slowmotion.height/9);
  if (ellipseX >= sX-30 && ellipseX <= sX+30 && ellipseY >= sY-30 && ellipseY <= sY+30)
    {
      cFC = frameCount;
      powerUpActive = true;
      tint(255,255)
      sX = 800;

      xMove = xMove/2.5;
      yMove = yMove/2.5;
      pMove = pMove/3;
    }

  

  if (frameCount - cFC >= 150 && xMove > 0 && yMove > 0)
    {
      powerUpActive = false;
      xMove = originalX;
      yMove = originalY;
      pMove = 9;
      print("slow restore");
    }
}

function multi(){
  image(multiball, mX, mY, multiball.width/10, multiball.height/10);
  if (ellipseX >= mX-30 && ellipseX <= mX+30 && ellipseY >= mY-30 && ellipseY <= mY+30)
    {
      cFC = frameCount
      mX = 800;
      multiActive = true; //boolean to trigger display+move methods from class
      powerUpActive = true; //boolean to prevent activation of other powerups while this one is  active    
    }

  if (frameCount - cFC >= 500 && xMove > 0 && yMove > 0){
    multiActive = false;
    powerUpActive = false;
    print("multi restore");
 
  }


}

//press mouse to move between pregame, game, and player win screens
function mousePressed(){
  //variable resets
  multiActive = false;
  hasPlayed = false;
  hasPlayedGO = false;
  countdown = 3;
  if (state === "preGame"){
    state = "game";
  } 

  else if (state === "player1WinA"){
    state = "preGame";
    ellipseX = 355;
    ellipseY = 350;
  }
  else if (state === "player2WinA"){
    state = "preGame";
    ellipseX = 355;
    ellipseY = 350;
  }
  else if (state === "player1WinB"){
    state = "preGame";
    ellipseX = 355;
    ellipseY = 350;
  }
  else if (state === "player2WinB"){
    state = "preGame";
    ellipseX = 355;
    ellipseY = 350;
  }
  else if (state === "player1WinC"){
    state = "preGame";
    ellipseX = 355;
    ellipseY = 350;
  }
  else if (state === "player2WinC"){
    state = "preGame";
    ellipseX = 355;
    ellipseY = 350;
  }

  else if (state === "gameOver"){
    state = "preGame";
    ellipseX = 355;
    ellipseY = 350;
  }
}

//resets game when 'r' is pressed
function keyPressed(){
// 'c' continues the current game without resetting score or timer
  if (key === 'c'){
    state = "game";
    ellipseX = 355-6;
    ellipseY = 350;
    
    //background color reset
    r = 155;
    g = 100;
    b = 255;


    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;
    xMove = originalX;
    yMove = originalY;
    pMove = 9;

    fbX = 900;
    fX = 900;
    sX = 900;
    mX = 900;

    countdown = 3;

    showImage = true;
    imageTransparency = 255;

    multiActive = false;

    powerUpActive = false;
    
    hasPlayed = false;
    hasPlayedGO = false;
  }
//keys 1,2,3 select background + scene
  if (key === '1'){
    scene = "preA"
   
  }
  if (key === '2'){
    scene = "preB"
    
  }
  if (key === '3'){
    scene = "preC"
    
  }

//completely reset everything
  if (key === 'r'){
    //state reset
    state = "preGame";

    //background color reset
    r = 155;
    g = 100;
    b = 255;

    //ball position and movement reset
    ellipseX = 350;
    ellipseY = 350;
    xMove = originalX;
    yMove = originalY;

    //player positions and movement speed reset
    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;
    pMove = 9;

    //powerup original positions reset
    fbX = 250;
    fX = 350;
    sX = 450;
    mX = 550;
    whichPower = 5;
    multiActive = false;

    powerUpActive = false;
  
    hasPlayed = false;
    hasPlayedGO = false;

    //point reset
    p1Point = 0;
    p2Point = 0;

    //timer resets
    prevTime = currentTime;
    countdown = 3;

    //image resets
    imageTransparency = 255;
    showImage = true;

    
  
  }


  if (key === 'd' || key === '/'){
  //returns powerup pngs to a position on the canvas
    fbX = 200;
    fX = 350;
    sX = 450;
    mX = 550;
  
  if (powerUpActive == true)
    {
      fbX = 800;
      fX = 800;
      sX = 800;
      mX = 800;
    }
  else
    {
    //selects a random power up between the three functions assigned
     whichPower = int(random(4));
      // print(whichPower);
      //selects a random x and y coordinate for each powerup each time key is pressed
      fbX = powerPosX[int(random(powerPosX.length))];
      fbY = powerPosY[int(random(powerPosY.length))];
      fX = powerPosX[int(random(powerPosX.length))];
      fY = powerPosY[int(random(powerPosY.length))];
      sX = powerPosX[int(random(powerPosX.length))];
      sY = powerPosY[int(random(powerPosY.length))];
      mX = powerPosX[int(random(powerPosX.length))];
      mY = powerPosY[int(random(powerPosY.length))];
    }
  }
}



//class code referenced from in class demonstration session 11-04
//https://github.com/entertainmenttechnology/Pokorny-MTEC1201_D10-Fall2025/blob/main/examples/session%2011-04/sketch.js
class MultiPong
{
  constructor(tempX, tempY)
  {
    this.x = tempX;
    this.y = tempY;
    this.xMove = random(-8,8);
    this.yMove = random (5,8);
    this.strokeWeight = 0;
  }

  display()
  {
    strokeWeight(this.strokeWeight);
    ellipseMode(CENTER);
    if (gameState === "gameA")
      {
        fill(255,255,255);
        ellipse(this.x, this.y, 40);
      }
    else if (gameState === "gameB")
      {
        tint(255, imageTransparency);
        image(ball, this.x, this.y, 200, 125);
      }
    else if (gameState === "gameC")
      {
        tint(255, imageTransparency);
        image(astronaut, this.x, this.y, 250, 175);
      }
  }

  move()
  {
    this.x += this.xMove;
    this.y += this.yMove;
    
    if (this.x >= width-30 || this.x <= 20)
      {
        this.xMove = -this.xMove;
      }
      if (this.y >= height-30 || this.y <= 30)
        {
          this.yMove = -this.yMove;
        }
  }
}






/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
                          Improvements from WIP2:


*/
