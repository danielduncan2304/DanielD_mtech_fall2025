//background variables
  let r = 155;
  let g = 100;
  let b = 255;

//ellipse variables
  let ellipseX = 350;
  let ellipseY = 350;
  let xMove = 4;
  let yMove = 3;

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
//powerup images
  let flashbang;
  let fastforward;
  let slowmotion;

//3 types of power ups
  let fbActive = false;
  let fbX = 200;
  let fbY = 200;

  let fastActive = false;
  let fX = 350;
  let fY = 350;

  let slowActive = false;
  let sX = 450;
  let sY = 450;

//variable for tracking which power up is chosen
  let whichPower = 4;

//arrays
  let powerArray = []; //array containing 3 power up types
  let powerPosX = [175, 190, 200, 225, 280, 315, 375, 400, 450, 500, 550]; // array containing x positions of power ups
  let powerPosY = [150, 200, 250, 300, 375, 400, 450, 500, 550]; // array containing y positions of power ups 

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
  let pMove = 8;

  let p1Point = 0;
  let p2Point = 0;

function preload(){
  //loads skull image
  skull = loadImage("images/skull.png");
  field = loadImage("images/field.png");
  ball = loadImage("images/ball.png");
  goalieL = loadImage("images/goalie_left.png");
  goalieR = loadImage("images/goalie_right.png");
  space = loadImage("images/space.png");
  astronaut = loadImage("images/astronaut.png");
  alienL = loadImage("images/alien_left.png");
  alienR = loadImage("images/alien_right.png");

  flashbang = loadImage("powerups/flashbang.png");
  fastforward = loadImage("powerups/fastforward.png");
  slowmotion = loadImage("powerups/slowmotion.png");
}

function setup() {
  //sets up canvas, textalign, textsize, textfont, and imagemode
  createCanvas(700, 700);
  textAlign(CENTER);
  textSize(45);
  textFont('Courier New');
  imageMode(CENTER);

  powerArray[0] = flash();
  powerArray[1] = fastfwd();
  powerArray[2] = slowmo();

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

// basic, plain purple background, plain ball, plain paddles etc
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
  ellipse(ellipseX, ellipseY, 40, 40);

  //beginning text
  textSize(45);
  text("Welcome to Pong!", width/2, height/3.5);
  textSize(30);
  text("Click to Start", width/2, height/2.85);
  textSize(20);
  text("Press Keys 1, 2, or 3 To Change Scenes", width/2, height/2.45);
  textSize(20);
  
  
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
  


  image(ball, ellipseX+3, ellipseY, 200,125);

  //beginning text
  textSize(45);
  strokeWeight(1);
  stroke(0);
  fill(0);
  text("Welcome to Pong!", width/2+15, height/3.5);
  textSize(30);
  text("Click to Start", width/2, height/2.85);
  textSize(20);
  text("Press Keys 1, 2, or 3 To Change Scenes", width/2, height/2.45);

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

  image(astronaut, ellipseX+3, ellipseY, 250,175);

  //beginning text
  textSize(45);
  strokeWeight(1);
  stroke(255);
  fill(255);
  text("Welcome to Pong!", width/2+15, height/3.5);
  textSize(30);
  text("Click to Start", width/2, height/2.85);
  textSize(20);
  text("Press Keys 1, 2, or 3 To Change Scenes", width/2, height/2.45);
  
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
  fill(250,250,250,220);
  ellipse(ellipseX, ellipseY, 40, 40);
  //ellipse incrementation
  ellipseX+= xMove;
  ellipseY+= yMove;


//player 1 paddle
  rectMode(CENTER);
  strokeWeight(6);
  stroke(225,0,0);
  fill(255,100,100);
  rect(p1X, p1Y, 15, 100);

  

//player 2 paddle
  strokeWeight(6);
  stroke(0,0,255);
  fill(100,100,220);
  rect(p2X, p2Y, 15, 100);
 

//add additional parameters to make the paddles a rectangle instead of a line
  // ellipse bounce
if (ellipseX > p2X-25 && ellipseY > p2Y-50 && ellipseY < p2Y +50){
  xMove = -xMove
}

if (ellipseX < p1X+25 && ellipseY > p1Y-50 && ellipseY < p1Y +50){
  xMove = -xMove
}


  //if ellipse hits top or botton wall, reverse yMove
  if (ellipseY >= height-35 || ellipseY <= 35){
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
    // state = "gameOver";
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



  
//round timer
  strokeWeight(1);
  fill(255);
  stroke(255);
  textSize(30);
  textFont('Courier New');

  currentTime = millis()/60000;
  text("Round:", width/2-55, height/8);
  textSize(28);
  text(round(currentTime-prevTime, 2), width/2+45, height/8)

  if (whichPower == 0){
    flash();
  }
  if (whichPower == 1){
    fastfwd();
  }
  if (whichPower == 2){
    slowmo();
  }


  //player 1 and 2 score 
  strokeWeight(2);
  textSize(25);
  text('Player 1:', 105, height/12);
  text('Player 2:', width-130, height/12);
  text(p1Point, 190, height/12)
  text(p2Point, width-50, height/12)




}

function gameB(){
  // soccer theme

  //background color
  background (r,g,b);

  //background border
  image(field, width/2-5, height/2,870,760);


  //ellipse
  strokeWeight(0);
  fill(250,250,250,220);
  image(ball, ellipseX, ellipseY, 200, 125);
  //ellipse incrementation
  ellipseX+= xMove;
  ellipseY+= yMove;

//player 1 paddle
  rectMode(CENTER);
  strokeWeight(6);
  stroke(225,0,0);
  fill(255,100,100);
  rect(p1X+40, p1Y, 15, 100);
  image(goalieL, p1X, p1Y, 200, 100);


//player 2 paddle
  strokeWeight(6);
  stroke(0,0,255);
  fill(100,100,220);
  rect(p2X-55, p2Y, 15, 100);
  image(goalieR, p2X-25, p2Y, 200, 100);
 


  // ellipse bounce for bot
if (ellipseX > p2X-75 && ellipseY > p2Y-50 && ellipseY < p2Y +50){
  xMove = -xMove
}
  // else if (ellipseX > p2X){
    //add point for bot
  // }

  //ellipse bounce for player
if (ellipseX < p1X+75 && ellipseY > p1Y-50 && ellipseY < p1Y +50){
  xMove = -xMove
}


  //if ellipse hits top or botton wall, reverse yMove
  if (ellipseY >= height-35 || ellipseY <= 35){
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

  //round timer
    strokeWeight(1);
    fill(255);
    stroke(255);
    textSize(30);
    textFont('Courier New');

    currentTime = millis()/60000;
    text("Round:", width/2-55, height/8);
    textSize(28);
    text(round(currentTime-prevTime, 2), width/2+45, height/8)

  if (whichPower == 0){
    flash();
  }
  if (whichPower == 1){
    fastfwd();
  }
  if (whichPower == 2){
    slowmo();
  }

  //player 1 and 2 score 
  strokeWeight(2);
  textSize(25);
  text('Player 1:', 105, height/12);
  text('Player 2:', width-130, height/12);
  text(p1Point, 190, height/12)
  text(p2Point, width-50, height/12)

}

function gameC(){

  //background color
  background (r,g,b);

  //background border
  image(space, width/2-5, height/2,870,760);

  //ellipse
  strokeWeight(0);
  fill(250,250,250,220);
  image(astronaut, ellipseX, ellipseY, 250, 175);
  //ellipse incrementation
  ellipseX+= xMove;
  ellipseY+= yMove;

//player 1 paddle
  rectMode(CENTER);
  strokeWeight(6);
  stroke(225,0,0);
  fill(255,100,100);
  rect(p1X+40, p1Y, 15, 100);
  image(alienL, p1X, p1Y, 200, 100);


//player 2 paddle
  strokeWeight(6);
  stroke(0,0,255);
  fill(100,100,220);
  rect(p2X-55, p2Y, 15, 100);
  image(alienR, p2X-25, p2Y, 200, 100);
 

  // ellipse bounce
if (ellipseX > p2X-85 && ellipseY > p2Y-60 && ellipseY < p2Y +60){
  xMove = -xMove
}

if (ellipseX < p1X+85 && ellipseX>=p1X-85 && ellipseY > p1Y-60 && ellipseY < p1Y +60){
  xMove = -xMove
}


  //if ellipse hits top or botton wall, reverse yMove
  if (ellipseY >= height-35 || ellipseY <= 35){
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

  
//round timer
  strokeWeight(1);
  fill(255);
  stroke(255);
  textSize(30);
  textFont('Courier New');

  currentTime = millis()/60000;
  text("Round:", width/2-55, height/8);
  textSize(28);
  text(round(currentTime-prevTime, 2), width/2+45, height/8)

  if (whichPower == 0){
    flash();
  }
  if (whichPower == 1){
    fastfwd();
  }
  if (whichPower == 2){
    slowmo();
  }

  //player 1 and 2 score 
  strokeWeight(2);
  textSize(25);
  text('Player 1:', 105, height/12);
  text('Player 2:', width-130, height/12);
  text(p1Point, 190, height/12)
  text(p2Point, width-50, height/12)
}


function gameOver(){
  background (255,0,0);
  fill(255);
  textSize(45);
  text("Game Over!!!", width/2, height/3);
  textSize(25);
  text("Press 'r' to Restart", width/2, height/2.5);
  image(skull, width/2, height/1.8, 300, 200);

}

function player1WinA(){
  background (r,g,b);
  fill(255);
  textSize(45);
  text("Player 1 Wins!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);
}

function player2WinA(){
  background (r,g,b);
  fill(255);
  textSize(45);
  text("Player 2 Wins!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);

    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;
}

function player1WinB(){
  //background soccer field
  background (r-100,g+100,b);
  //soccer ball png as ball and pixelated goalie as paddle
  image(field, width/2-5, height/2,870,760);
  strokeWeight(1);
  stroke(0);
  fill(0);
  textSize(45);
  text("Player 1 Wins!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);

    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;
}

function player2WinB(){
  //background soccer field
  background (r-100,g+100,b);
  //soccer ball png as ball and pixelated goalie as paddle
  image(field, width/2-5, height/2,870,760);
  strokeWeight(1);
  stroke(0);
  fill(0);
  textSize(45);
  text("Player 2 Wins!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);

    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;
}

function player1WinC(){
  //background color
  background (r,g,b);

  //background border
  image(space, width/2-5, height/2,870,760);

  fill(255);
  textSize(45);
  text("Player 1 Wins!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);

    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;
}

function player2WinC(){
  //background color
  background (r,g,b);

  //background border
  image(space, width/2-5, height/2,870,760);

  fill(255);
  textSize(45);
  text("Player 2 Wins!", width/2, height/3);
  textSize(25);
  text("Press Mouse for Main Menu", width/2, height/2.5);
  text("Press 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);

    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;
}

//powerup functions
function flash(){
  image(flashbang, fbX, fbY, flashbang.width/8, flashbang.height/8);

  if(ellipseX >= fbX-30 && ellipseX <= fbX+30 && ellipseY >= fbY-30 && ellipseY <= fbY+30)
    {
      fbX = 900;
      r = 255;
      g = 255;
      b = 255;
    }
}

function fastfwd(){
  image(fastforward, fX, fY, fastforward.width/8, fastforward.height/8);
   if (ellipseX >= fX-30 && ellipseX <= fX+30 && ellipseY >= fY-30 && ellipseY <= fY+30)
      {
        fX = 800;
        xMove = xMove*1.6;
        yMove = yMove*1.6;
        pMove = pMove*1.8;
        
      }
}

  function slowmo(){
    image(slowmotion, sX, sY, slowmotion.width/9, slowmotion.height/9);
    if (ellipseX >= sX-30 && ellipseX <= sX+30 && ellipseY >= sY-30 && ellipseY <= sY+30)
      {
        sX = 800;
        xMove = xMove/2.5;
        yMove = yMove/2.5;
        pMove = pMove/3;
      }
}


//press mouse to transition from preGame -> game -> gameOver -> preGame
function mousePressed(){
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

    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;
    xMove = 4;
    yMove = 3;
    pMove = 8;

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
    state = "preGame";
    r = 155;
    g = 100;
    b = 255;

    ellipseX = 350;
    ellipseY = 350;
    xMove = 10;
    yMove = 7;

    p1X = 30;
    p1Y = 375
    p2X = 670;
    p2Y = 375;
    pMove = 15;

    fbX = 250;
    fX = 350;
    sX = 450;
    whichPower = 4;

    p1Point = 0;
    p2Point = 0;

    prevTime = currentTime;
  }


  if (key === 'd' || key === '/'){
  //returns powerup pngs to a position on the canvas
    fbX = 200;
    fX = 350;
    sX = 450;
  //selects a random power up between the three functions assigned in the array
    whichPower = int(random(powerArray.length));
  
  //selects a random x and y coordinate for each powerup each time key is pressed
    fbX = powerPosX[int(random(powerPosX.length))];
    fbY = powerPosY[int(random(powerPosY.length))];
    fX = powerPosX[int(random(powerPosX.length))];
    fY = powerPosY[int(random(powerPosY.length))];
    sX = powerPosX[int(random(powerPosX.length))];
    sY = powerPosY[int(random(powerPosY.length))];

    // print(whichPower);
    print(fbX, fbY);
    print(fX, fY);
    print(sX, sY);
      

  }


    
  }

  

// in each game function : 
// if millis() > xxx number, increments xMove + yMove;
// use double quotes around mp3 file when adding music/sound fx