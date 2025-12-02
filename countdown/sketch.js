
//countdown variable
let countdown = 3;

//player pos and movement variables
let p1X = 20;
let p1Y = 200;
let p2X = 380;
let p2Y = 200;
let pMove = 10;

//ball variables
let ellipseX = 200;
let ellipseY = 200;
let xMove = 9;
let yMove = 4
let eOpactiy = 0;



//class variables
let ellipse1;
let ellipse2;
let ellipse3;


function setup() {
  createCanvas(400, 400);
  textFont('Arial', 64);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

  // ellipse1 = new ellipse(200, 200, 30, 255,255,255); 
  // ellipse2 = new ellipse(100, 100, 30,255,255,255);
  // ellipse3 = new ellipse(300, 300, 30,255,255,255);


}


function draw() {
  background(150, 100, 255);
  stroke(255,0,0);
  fill(255,100,100);
  strokeWeight(5);
  rect(p1X, p1Y, 20, 100);

  stroke(0,0,255);
  fill(100,100,255);
  strokeWeight(5);
  rect(p2X, p2Y, 20, 100);


//if countdown is greater than 0 and framecount divided by 60 has no remainder,
//then 1 second has passed. Decrease countdown by 1.
  if (frameCount % 60 == 0 && countdown > 0) {
    countdown--;
  }

  if (countdown > 0){
    //if countdown is greater than 0, display countdown and
    // prevent player + ball movement
    stroke(0);
    fill(0);
    strokeWeight(1);

    //display countdown number
    text(countdown, width / 2, height / 2);

    //prevent player movement
    pMove = 0;
    eOpacity = 0;
  }
  else{
    //allow player movement
    pMove = 10;
    eOpacity = 255;
    //ball movement
    ellipseX += xMove;
    ellipseY += yMove;
    stroke(255);
    fill(255,255,255,eOpacity);
    ellipse(ellipseX, ellipseY, 30);
  }


  //player 1 movement 
  if (keyIsDown(87)) {
    p1Y -= pMove;
  }
  if (keyIsDown(83)) {
    p1Y += pMove;
  }

  //player 2 movement
  if (keyIsDown(UP_ARROW)) {
    p2Y -= pMove;
  }
  if (keyIsDown(DOWN_ARROW)) {
    p2Y += pMove;
  }










    // ellipse1.display();
    // ellipse1.move();
    
    // ellipse2.display();
    // ellipse2.move();

    // ellipse3.display();
    // ellipse3.move();


}



// class ellipse{

//   constructor(tempX, tempY, tempSize, eR, eG, eB){
//     this.x = tempX;
//     this.y = tempY;
//     this.size = tempSize;
//     this.r = eR;
//     this.g = eG;
//     this.b = eB;
//   }
//   display(){
//     ellipse(this.tempX, this.tempY, this.tempSize);
//   }
//   move(){
//     this.x += xMove;
//     this.y += yMove;
//   }
// }





