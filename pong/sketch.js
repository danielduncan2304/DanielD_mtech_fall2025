
  let r = 155;
  let g = 100;
  let b = 255;

  let ellipseX = 350;
  let ellipseY = 350;
  let xMove = 15;
  let yMove = 12;

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

  }

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
  }

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

  image(astronaut,ellipseX, ellipseY, 250,150);
}



function game(){

  if (scene = "preA"){
    gameState = "gameA";
      if (gameState === "gameA"){
      gameA();
    }
  }

  if (scene === "preB"){
    gameState = "gameB";

     if (gameState === "gameB"){
      gameB();
    }
  }

  if (scene === "preC"){
    gameState = "gameC";
     if (gameState === "gameC"){
      gameC();
    }
  }
 

}



function gameA(){
  //normal theme
  // player and bot positions
  let playerX = 30; 
  let playerY = mouseY;
  let botX = 670;
  let botY = ellipseY/1.05;


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
  rect(playerX, playerY, 15, 100);


//player 2 paddle
  strokeWeight(6);
  stroke(0,0,255);
  fill(100,100,220);
  rect(botX, botY, 15, 100);
 


  // ellipse bounce

if (ellipseX > botX-25 && ellipseY > botY-50 && ellipseY < botY +50){
  xMove = -xMove
}

// else if (ellipseX > botX){
  //add point bot
// }

if (ellipseX < playerX+25 && ellipseY > playerY-50 && ellipseY < playerY +50){
  xMove = -xMove
}
// else if (ellipseX < playerX){
     // add point player 1
// }

  //if ellipse hits top or botton wall, reverse yMove
  if (ellipseY >= height-35 || ellipseY <= 35){
    yMove = -yMove;
  }

  
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
  text('Round:',  width/2, height/8);
  print('elapseTime', elapsedTime);


  //player 1 and 2 score 
  // need to add variables pScore and bScore and increment using an if statement
  strokeWeight(2);
  textSize(25);
  text('Player 1:', 105, height/12);
  text('Player 2:', width-130, height/12);
}


function gameB(){
  // soccer theme
  // player and bot positions
  let playerX = 30; 
  let playerY = mouseY;
  let botX = 670;
  let botY = ellipseY/1.05;


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
  rect(playerX+40, playerY, 15, 100);
  image(goalieL, playerX, playerY, 200, 100);


//player 2 paddle
  strokeWeight(6);
  stroke(0,0,255);
  fill(100,100,220);
  rect(botX-55, botY, 15, 100);
  image(goalieR, botX-25, botY, 200, 100);
 


  // ellipse bounce

//ellipseX hits player paddle, reverse xMove
if (ellipseX < playerX+55 || ellipseX > botX-55){
  xMove = -xMove
}

// //ellipseX bounces no matter what
// if (ellipseX <= 50 || ellipseX >= 640){
//   xMove = -xMove;
// }
  
  //ellipseX hits back wall, gameOver
  if (ellipseX >= width || ellipseX <= 0){
    state = "gameOver";
  }

  //if ellipse hits top or botton wall, reverse yMove
  if (ellipseY >= height-35 || ellipseY <= 35){
    yMove = -yMove;
  }

  let elapsedTime = millis() / 1000; 
  
  //round timer
  textSize(20);
  strokeWeight(2.5);
  stroke(255,255,255,190);
  fill(255,255,255,190);
  text('Round:',  width/2, height/8);
  print('elapseTime', elapsedTime);


  //player 1 and 2 score 
  // need to add variables pScore and bScore and increment using an if statement
  strokeWeight(2);
  textSize(25);
  text('Player 1:', 105, height/12);
  text('Player 2:', width-130, height/12);

}

function gameC(){
  // space theme
  // player and bot positions
  let playerX = 30; 
  let playerY = mouseY;
  let botX = 670;
  let botY = ellipseY/1.05;


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
  rect(playerX+40, playerY, 15, 100);
  image(alienL, playerX, playerY, 200, 100);


//player 2 paddle
  strokeWeight(6);
  stroke(0,0,255);
  fill(100,100,220);
  rect(botX-55, botY, 15, 100);
  image(alienR, botX-25, botY, 200, 100);
 


  // ellipse bounce

//ellipseX hits player paddle, reverse xMove
if (ellipseX < playerX+55 || ellipseX > botX-55){
  xMove = -xMove
}

// //ellipseX bounces no matter what
// if (ellipseX <= 50 || ellipseX >= 640){
//   xMove = -xMove;
// }
  
  // //ellipseX hits back wall, gameOver
  // if (ellipseX >= width || ellipseX <= 0){
  //   state = "gameOver";
  // }

  //if ellipse hits top or botton wall, reverse yMove
  if (ellipseY >= height-35 || ellipseY <= 35){
    yMove = -yMove;
  }

  let elapsedTime = millis() / 1000; 
  
  //round timer
  textSize(20);
  strokeWeight(2.5);
  stroke(255,255,255,190);
  fill(255,255,255,190);
  text('Round:',  width/2, height/8);
  print('elapseTime', elapsedTime);


  //player 1 and 2 score 
  // need to add variables pScore and bScore and increment using an if statement
  strokeWeight(2);
  textSize(25);
  text('Player 1:', 105, height/12);
  text('Player 2:', width-130, height/12);

}


function gameOver(){
  background (255,0,0);
  fill(255);
  textSize(45);
  text("Game Over!!!", width/2, height/3);
  textSize(25);
  text("Press Mouse or 'r' to Restart", width/2, height/2.5);
  image(skull, width/2, height/1.75, 300, 200);

}

//press mouse to transition from preGame -> game -> gameOver -> preGame
//need to remove game->gameOver because the requirement needs to be ellipse hitting edge
function mousePressed(){
  if (state === "preGame"){
    state = "game";
  } else if (state === "game"){
    state = "gameOver";
  } else if (state === "gameOver"){
    state = "preGame";
    ellipseX = 355;
    ellipseY = 350;
  }
}

//resets game when 'r' is pressed
function keyPressed(){
  if (key === 'r'){
    state = "preGame";
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

  



  
