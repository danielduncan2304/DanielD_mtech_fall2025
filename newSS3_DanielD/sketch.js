
let r = 100
let g = 100
let b = 255


let stop = false;

let xsnow = 200;
let ysnow = 200;

/*Daniel D
The Snowman
Ideas: 
- declared variables r, g, b, i, xsnow, ysnow
- if statements utilizes for changing the scenerey 
and setting bounds for snowflakes
- use of random() function to change snowflake sizes
as well as determine new positions for snowflakes once they 
leave bounds of the canvas

- keyboard input : 
    - press 'd' for a scenery of a happy snowman in the sun
during the day with his hat on
    - press 'n' to change the scenery to nighttime with the 
moon out as well as an angry snowman who has lost his hat
*/

function setup() {
  createCanvas(800, 800);
  frameRate(7);
}
//press 'n' for angry snowman in the nighttime
function keyPressed() {
  if (key === 'n') {
    r = 40
    g = 50
    b = 60
  //moonn
     strokeWeight(0);
   fill(255,255,240,220);
    ellipse(60,60,110);
   fill(255,255,240);
   ellipse(60,60,100);
   fill(245,245,230);
   ellipse(46,80,15);
   ellipse(80,46,12);
   ellipse(80,90,12, 5);
   ellipse(30,25,12, 5);
   ellipse(25,45,12, 15);

    fill(255,255,255)
    ellipse(400,220,120);   
    //snowman eyes
    fill(0,0,0)
    ellipse(370,210,10);
    ellipse(400,210,10);

    //snowman nose
    fill(255,100,0);
    strokeWeight(0.5);
    triangle(mouseX/2.5,225,385,220,385,232);
     fill(0, 0, 0); 
     //angry mouth
    strokeWeight(0.5); 
    ellipse(373, 250, 8); 
    ellipse(383, 248, 8); 
    ellipse(395, 247, 8); 
    ellipse(407, 248, 8); 
    ellipse(417, 250, 8); 
    //eyebrows
    stroke(0,0,0);
    strokeWeight(2.5)
    line(355,200,376,208);
    line(395,208,416,200);
    //angry arms
    stroke(0,0,0);
    strokeWeight(2.5);
    line(291,350,230,500)
    line(509,350,580,500)

  }
//press 'd' for happy snowman in the daytime
    if (key === 'd'){
  r = 100 
  g = 100
  b = 255
  fill(255,255,255);
    ellipse(400,220,120);   
    //snowman eyes
    fill(0,0,0);
    ellipse(370,210,10);
    ellipse(400,210,10);

    //snowman nose
    fill(255,100,0);
    strokeWeight(0.5);
    triangle(mouseX/2.5,225,385,220,385,232);

    //snowman hat
    fill(0,0,0);
    rect(335,158,130,30)
    rect(357,98,90,67)

    //happy mouth
    fill(0, 0, 0); 
    strokeWeight(0.5);
    ellipse(371, 248, 8); 
    ellipse(383, 250, 8); 
    ellipse(395, 250, 8); 
    ellipse(407, 248, 8); 
    ellipse(417, 245, 8); 

    //happy arms
    strokeWeight(0);
    stroke(0,0,0);
    strokeWeight(2.5);
    line(290,350,180,260)
    line(508,350,618,260)

     //sun
    fill(240,250,200,255);
    strokeWeight(0);
    ellipse(30,30,100);
    fill(240,250,200,200)
    ellipse(30,30,105)
    fill(240,250,200,150)
    ellipse(30,30,110)
    fill(240,250,200,100)
    ellipse(30,30,115)
    fill(240,250,200,50)
    ellipse(30,30,120)
    fill(240,250,200,50)
    ellipse(30,30,130)
    }
  }

  

function draw() {
  background(r,g,b);  
length = 200
//snowfall
  for (let i = 0; i < length; i += 4){
     // snow falling
    fill(255,255,255,150);
    strokeWeight(0);   //ellipse shape and starting position
    ellipse(xsnow,ysnow, random(1,10),random(5,10));

    xsnow+=
    ysnow+=
    //xsnow += random(-10,10); //incrementing movement for snowfall
    ysnow += random(0,800)

    //if snow's x position is >=800 or <= 0, then place snow
    //at a random point within the width of canvas 
    if (xsnow >= 800 || xsnow <= 0){ 
    xsnow = random(width);
    }
    //if snow's y position is >=800, place snow at y =
    if (ysnow >= 800){
    ysnow = -10;}
  }
    //snow on ground
    fill(238,238,238);
    strokeWeight(0);
    rect(0,600,800,800);

    //road
    fill(20,30,40);
    strokeWeight(0);
    triangle(260,600,0,600,0,800);
    triangle(540,600,800,600,800,800);


    // snowman body
    fill(255,255,255);
    stroke(0)
    strokeWeight(0.5);
    ellipse(400,550,300);
    ellipse(400,370,220);
    ellipse(400,220,120);


  //  //angry arms
  //   stroke(0,0,0);
  //   strokeWeight(2.5);
  //   line(291,350,230,500)
  //   line(509,350,580,500)

  
    //snowman buttons
    fill(0,0,0);
    strokeWeight(0);
    ellipse(395,400,10);
    ellipse(393,380,10);
    ellipse(391,360,10);
    ellipse(392,340,10);
      
    //snowman eyes
    ellipse(370,210,10);
    ellipse(400,210,10);

    //snowman nose
    fill(255,100,0);
    strokeWeight(0.5);
    triangle(mouseX/2.5,225,385,220,385,232);

    //snowman neutral mouth
    fill(0);
    ellipse(383, 248, 8); 
    ellipse(395, 248, 8); 
    ellipse(407, 248, 8); 



    // strokeWeight(0);
    // fill(220,220,220,220);
    // ellipse(50,20,500,150)
    // fill(220,220,220,250);
    // ellipse(750,15,500,150)
    // ellipse(400,20,300,150)

   

  }








  