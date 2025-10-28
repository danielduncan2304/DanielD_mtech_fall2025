  let r = 155;
  let g = 100;
  let b = 255;

  let ellipseX = 350;
  let ellipseY = 350;
  let xMove = 10;
  let yMove = 6;

  let skull;
  let field;
  let ball;
  let goalieL;
  let goalieR;
  let space;
  let astronaut;
  let alienL;
  let alienR;

  let state = "preGame";
  let scene = "preA";
  let gameState = "gameA";
  let end = "gameOver"
  

  let p1X = 30; 
  let p1Y = 375;
  let p2X = 670;
  let p2Y = 375

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
}

function setup() {
  //sets up canvas, textalign, textsize, textfont, and imagemode
  createCanvas(700, 700);
  textAlign(CENTER);
  textSize(45);
  textFont('Courier New');
  imageMode(CENTER);


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
  // player control instructions
  textSize(18);
  strokeWeight(1);
  stroke(255,200,200,255);
  fill(255,200,200,255);
  text("Player 1 Controls:", width/4, height/1.8);
  text("'W' and 'S'", width/4, height/1.65);
  stroke(180,180,255);
  fill(180,180,255);
  text("Player 2 Controls:", width/1.3, height/1.8);
  text("'UP ARROW' and 'DOWN ARROW'", width/1.3, height/1.65);

  p1Point = 0;
  p2point = 0;
  }
// soccer theme: soccer field, soccer ball, goalies as paddles
  function preB(){
 //background soccer field
  background (r-100,g+100,b);
  //soccer ball png as ball and pixelated goalie as paddle
  image(field, width/2-5, height/2,870,760);


  // // ellipse = soccer ball
  // strokeWeight(0);
  // fill(255)
  // ellipse(ellipseX, ellipseY, 40, 40);
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
  //player control instructions
  strokeWeight(1);
  textSize(18);
  fill(0);
  text("Player 1 Controls:", width/4, height/1.8);
  text("'W' and 'S'", width/4, height/1.65);
  fill(0);
  text("Player 2 Controls:", width/1.3, height/1.8);
  text("'UP ARROW' and 'DOWN ARROW'", width/1.3, height/1.65);

  //player points reset
  p1Point = 0;
  p2Point = 0; 
  }

// space theme: starry background, astronaut as ball, aliens as paddles
function preC(){
  
  background (r,g+100,b);
  image(space, width/2, height/2, 900,750);

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
  // player control instructions
  textSize(18);
  strokeWeight(1);
  stroke(255,200,200);
  fill(255,200,200);
  text("Player 1 Controls:", width/4, height/1.8);
  text("'W' and 'S'", width/4, height/1.65);
  stroke(180,180,255);
  fill(180,180,255);
  fill(200,200,255);
  text("Player 2 Controls:", width/1.3, height/1.8);
  text("'UP ARROW' and 'DOWN ARROW'", width/1.3, height/1.65);
  image(astronaut,ellipseX, ellipseY, 250,150);

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
  // else if (ellipseX > p2X){
    //add point for bot
  // }

if (ellipseX < p1X+25 && ellipseY > p1Y-50 && ellipseY < p1Y +50){
  xMove = -xMove
}
  // else if (ellipseX < p1X){
     // add point for player 1
  // }

  //if ellipse hits top or botton wall, reverse yMove
  if (ellipseY >= height-35 || ellipseY <= 35){
    yMove = -yMove;
  }

   //player 1 movement
  if (keyIsDown(87)){
    p1Y = p1Y - 20;
  }
  if (keyIsDown(83)){
    p1Y = p1Y + 20;
  }

  //player 2 movement
  if (keyIsDown(UP_ARROW))
	  {
		  p2Y = p2Y - 20;
	  }
  if (keyIsDown(DOWN_ARROW))
	  {
		  p2Y = p2Y + 20;
	  }
  
 

  //ellipseX hits back wall, gameOver
  // if (ellipseX >= width || ellipseX <= 0){
  //   state = "gameOver";
  // }
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


  let elapsedTime = millis() / 1000; 
  
  //round timer
  textSize(20);
  strokeWeight(2.5);
  stroke(255,255,255,190);
  fill(255,255,255,190);
  // Get the number of seconds the sketch has run.
  let s = millis() / 1000;
  // Display how long the sketch has run.
  text(`Round: ${nf(s, 1, 1)} sec`, width/2, height/12, 0);


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
  // else if (ellipseX < p1X){
     // add point for player 1
  // }

  //if ellipse hits top or botton wall, reverse yMove
  if (ellipseY >= height-35 || ellipseY <= 35){
    yMove = -yMove;
  }

  //player 1 movement
  if (keyIsDown(87)){
    p1Y = p1Y - 20;
  }
  if (keyIsDown(83)){
    p1Y = p1Y + 20;
  }

  //player 2 movement
  if (keyIsDown(UP_ARROW))
	  {
		  p2Y = p2Y - 20;
	  }
  if (keyIsDown(DOWN_ARROW))
	  {
		  p2Y = p2Y + 20;
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

  // if (p1Point >= 5 || p2Point >= 5){
  //   state = "gameOver";
  // }
  // //ellipseX hits back wall, gameOver
  // if (ellipseX >= width || ellipseX <= 0){
  //   state = "gameOver";
  // }


  let elapsedTime = millis() / 1000; 
  
  //round timer
  textSize(20);
  strokeWeight(2.5);
  stroke(255,255,255,190);
  fill(255,255,255,190);
  // Get the number of seconds the sketch has run.
  let s = millis() / 1000;
  // Display how long the sketch has run.
  text(`Round: ${nf(s, 1, 1)} sec`, width/2, height/12, 0);


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
if (ellipseX > p2X-75 && ellipseY > p2Y-50 && ellipseY < p2Y +50){
  xMove = -xMove
}
  // else if (ellipseX > width){
  //   // add point for bot
  // }

if (ellipseX < p1X+75 && ellipseY > p1Y-50 && ellipseY < p1Y +50){
  xMove = -xMove
}
  // else if (ellipseX < p1X){
     // add point for player 1
  // }

  //if ellipse hits top or botton wall, reverse yMove
  if (ellipseY >= height-35 || ellipseY <= 35){
    yMove = -yMove;
  }
     //player 1 movement
  if (keyIsDown(87)){
    p1Y = p1Y - 15;
  }
  if (keyIsDown(83)){
    p1Y = p1Y + 15;
  }

  //player 2 movement
  if (keyIsDown(UP_ARROW))
	  {
		  p2Y = p2Y - 15;
	  }
  if (keyIsDown(DOWN_ARROW))
	  {
		  p2Y = p2Y + 15;
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
  textSize(20);
  strokeWeight(2.5);
  stroke(255,255,255,190);
  fill(255,255,255,190);
  // Get the number of seconds the sketch has run.
  let s = millis() / 1000;
  // Display how long the sketch has run.
  text(`Round: ${nf(s, 1, 1)} sec`, width/2, height/12, 0);


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
  text("Press Mouse to Restart", width/2, height/2.5);
  image(skull, width/2, height/1.8, 300, 200);



}
function player1WinA(){
  background (r,g,b);
  fill(255);
  textSize(45);
  text("Player 1 Wins!", width/2, height/3);
  textSize(25);
  text("Press Mouse to Restart", width/2, height/2.5);
  text("or 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);
}
function player2WinA(){
  background (r,g,b);
  fill(255);
  textSize(45);
  text("Player 2 Wins!", width/2, height/3);
  textSize(25);
  text("Press Mouse to Restart", width/2, height/2.5);
  text("or 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);
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
  text("Press Mouse to Restart", width/2, height/2.5);
  text("or 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);
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
  text("Press Mouse to Restart", width/2, height/2.5);
  text("or 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);
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
  text("Press Mouse to Restart", width/2, height/2.5);
  text("or 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);
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
  text("Press Mouse to Restart", width/2, height/2.5);
  text("or 'c' to continue playing", width/2, height/2.25);
  image(skull, width/2, height/1.65, 300, 200);
}


//press mouse to transition from preGame -> game -> gameOver -> preGame
function mousePressed(){
  if (state === "preGame"){
    state = "game";
  } 
  else if (state === "game"){
    state = "gameOver";
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
  if (key === 'c'){
    state = "game";
    ellipseX = 355-6;
    ellipseY = 350;
  }

  if (key === '1'){
    scene = "preA"
   
  }
  if (key === '2'){
    scene = "preB"
    
  }
  if (key === '3'){
    scene = "preC"
    
  }
    
  }

  

// in each game function : 
// if millis() > xxx number, increments xMove + yMove;
// use double quotes around mp3 file when adding music/sound fx
