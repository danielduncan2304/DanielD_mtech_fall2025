let ellipseX = 100;
let ellipseY = 100;

let p1X = 700;
let p1Y = 375;
let p2X = 50;
let p2Y = 375;
let xMove = 7;
let yMove = 5;


function setup(){
  createCanvas(750,750)
  

}

function draw(){
  background (200,100,255);
//ellipse and ellipse movement
  ellipse(ellipseX, ellipseY, 50, 50);  
  ellipseX = ellipseX + xMove;
  ellipseY = ellipseY + yMove ;



 //player 1 paddle
  rectMode(CENTER);
  strokeWeight(5)
  stroke(0,0,255);
  fill(75,75,255)
  rect(p1X, p1Y, 20, 100);

//player 2 paddle
  rectMode(CENTER);
  strokeWeight(5)
  stroke(255,0,0);
  fill(255,75,75)
  rect(p2X, p2Y, 20, 100);



  if (ellipseX > p1X-25 && ellipseY > p1Y-50 && ellipseY < p1Y+50){
    xMove = -xMove;
  }  

  if (ellipseX < 30){
    xMove = -xMove;
  }

   if (ellipseY >= height-15 || ellipseY <= 35){
    yMove = -yMove;
  }
//player 1 movement
  if (keyIsDown(UP_ARROW))
	  {
		  p1Y = p1Y - 15;
	  }
  if (keyIsDown(DOWN_ARROW))
	  {
		  p1Y = p1Y + 15;
	  }

//player 2 movement
if (keyIsDown(87)){
  p2Y = p2Y - 15;
}
if (keyIsDown(83)){
  p2Y = p2Y + 15;
}

}



