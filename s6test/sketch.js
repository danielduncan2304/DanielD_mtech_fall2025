
  let r = 155;
  let g = 100;
  let b = 255;

  let ellipseX = 350;
  let ellipseY = 350;
  let xMove = 5;
  let yMove = 5;
  

  let p1X = 30; 
  let p1Y = 375;
  let p2X = 670;
  let p2Y = 375
  
  //png icons
  let flashbang;
  let fastforward;
  let slowmotion;
  
  //3 types of power ups
  let fbActive = false; 
  let fbX = 250;
  let fbY = 250;
  let fastActive = false; 
  let fX = 350;
  let fY = 350;
  let slowActive = false; 
  let sX = 450;
  let sY = 450;

  //arrays
  let powerArray = []; // array containing power up 3 types 
  let powerPosX = []; // array containing x positions of power ups
  let powerPosY = []; //array containing y positions of power ups

  

function preload(){
  flashbang = loadImage("powerups/flashbang.png");
  fastforward = loadImage("powerups/fastforward.png");
  slowmotion = loadImage("powerups/slowmotion.png");
}

function setup() {
  createCanvas(700, 700);
  imageMode(CENTER);
   powerArray[1] = flash()
}

function draw() {
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

   //player 1 movement
  if (keyIsDown(87)){
    p1Y = p1Y - 12;
  }
  if (keyIsDown(83)){
    p1Y = p1Y + 12;
  }
   //player 2 movement
  if (keyIsDown(UP_ARROW))
	  {
		  p2Y = p2Y - 12;
	  }
  if (keyIsDown(DOWN_ARROW))
	  {
		  p2Y = p2Y + 12;
	  }


  flash();

  
  
   
}

function flash(){
   
    image(flashbang, fbX, fbY, flashbang.width/8, flashbang.height/8);
    
    if(ellipseX == fbX && ellipseY == fbY)
      {
        fbActive = true;
          if (fbActive == true)
            {
              fbX = 800;
              for (let i = 0; i < 1500; i++)
                {
                  r = 255;
                  g = 255;
                  b = 255;
                  print(i);
                }
              fbActive = false;
            }
          if (fbActive = false){
              r = 155;
              g = 100;
              b = 255;
          }            
      }


}

function slowmo(){
  // image(slowmotion, sX, sY, slowmotion.width/8, slowmotion.height/8);
  //   if (ellipseX == sX && ellipseY == sY)
  //     {slowActive = true;
    

  //     }


}

function fastfwd(){
  image(fastforward, fX, fY, fastforward.width/8, fastforward.height/8);
}