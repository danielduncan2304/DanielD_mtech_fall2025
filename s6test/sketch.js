
  let r = 155;
  let g = 100;
  let b = 255;

  let ellipseX = 350;
  let ellipseY = 250;
  let xMove = 9;
  let yMove = 7;
  

  let p1X = 30; 
  let p1Y = 375;
  let p2X = 670;
  let p2Y = 375
  let pMove = 12;

  
  //png icons
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

  // //powerup timer
  // let timeElapsed = 0;
  // let goalTime = 5000;

  // variable for tracking which power up is chosen
  let whichPower = 4;

  //arrays
  let powerArray = []; // array containing power up 3 types 
  let powerPosX = [175, 190, 200, 225, 280, 315, 375, 400, 450, 500, 550]; // array containing x positions of power ups
  let powerPosY = [150, 200, 250, 300, 375, 400, 450, 500, 550]; //array containing y positions of power ups

  //timer
  let currentTime = 0;
  let prevTime = 0;


function preload(){
  flashbang = loadImage("powerups/flashbang.png");
  fastforward = loadImage("powerups/fastforward.png");
  slowmotion = loadImage("powerups/slowmotion.png");
}

function setup() {
  createCanvas(700, 700);
  imageMode(CENTER);

    powerArray[0] = flash();
    powerArray[1] = fastfwd();
    powerArray[2] = slowmo();

    

}

function draw() {
//run gameA
  gameA()
   

  //timer
  strokeWeight(1);
  fill(255)
  stroke(255);
  textSize(30);
  textFont('Courier New')

  currentTime = (millis()/1000);
  text("Round:", width/2 - 110, height/8);
  textSize(28);
  text(round(currentTime-prevTime,2), width/2, height/8)
}





function gameA(){
  background(220);

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


  //delete afterwards
  if (ellipseX >= width-35 || ellipseX <= 35){
    xMove = -xMove;
  }

   //player 1 movement
  if (keyIsDown(87)){
    p1Y = p1Y - pMove;;
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



    // whichPower = int(random(powerArray.length));
    // whichPower = 2;
    // print(whichPower);


    if (whichPower == 0){
      flash();
     
    }
    if (whichPower == 1){
      fastfwd();
     
    }
    if (whichPower == 2){
      slowmo();
 
    }
      

}

function flash(){


    image(flashbang, fbX, fbY, flashbang.width/8, flashbang.height/8);
  
    if(ellipseX >= fbX-30 && ellipseX <= fbX+30 && ellipseY>= fbY-30 && ellipseY <= fbY+30)
        {
          fbX = 800;
          r = 255
          g = 255;
          b = 255;  
        }


}

function fastfwd(){
  image(fastforward, fX, fY, fastforward.width/8, fastforward.height/8);

   if (ellipseX >= fX-30 && ellipseX <= fX+30 && ellipseY >= fY-30 && ellipseY <= fY+30)
      {
        fX = 800;
        xMove = xMove*1.75;
        yMove = yMove*1.5;
        pMove = pMove*1.5;
        //setTimeout
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
            //setTimeout
      }


}


function keyPressed(){
  if (key === 'r'){
    r = 155;
    g = 100;
    b = 255;

    ellipseX = 350;
    ellipseY = 250;
    xMove = 9;
    yMove = 7;
    

    p1X = 30; 
    p1Y = 375;
    p2X = 670;
    p2Y = 375
    pMove = 12;

    fbX = 250;
    fX = 350;
    sX = 450;
    whichPower = 4;

    prevTime = currentTime;

  }

  if (key === 'd' || key === '/'){
    fbX = 200;
    fX = 350;
    sX = 450;
    whichPower = int(random(powerArray.length));
    fbX = powerPosX[int(random(powerPosX.length))];
    fbY = powerPosY[int(random(powerPosY.length))];
    fX = powerPosX[int(random(powerPosX.length))];
    fY = powerPosY[int(random(powerPosY.length))];
    sX = powerPosX[int(random(powerPosX.length))];
    sY = powerPosY[int(random(powerPosY.length))];


    print(fbX, fbY)
    print(fX, fY)
    print(sX, sY)
  }

}