// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }

/* Daniel D
SS2
Title: Chill Guy
 
Concepts: 
variables established: RGB for background colors, XY for snowflake positions

Snowman arm following mouseX and mouseY

clicking keys on the keyboard will increment/decrement RBG values,
turning the sky from a daytime blueish/purple to nighttime 



*/

let r = 200
let g = 170
let b = 255
function setup() {
  /*you must include a setup function to run code
  you only include ONE setup function per sketch */
  createCanvas(800, 800);
  //sets the size of the canvas in pixels, X and Y axis

}

function draw() { 
//sets background color to light blue
  background(r,g,b);


//Snow on ground
strokeWeight(0)
fill(255,255,255);
rect(0,590,800,800)

//Road
fill(0,0,0,200)
triangle(0,590,250,590, 0,800)
triangle(550,590,800,590, 800,800)

//clouds
fill(150,150,150,255)
ellipse(0,20,300,150)
ellipse(200,20,300,150)
ellipse(450,30,300,150)
ellipse(695,20,300,150)



//snowman body
strokeWeight(1)
fill(255,255,255,255)
circle(400,600,300);
circle(400,400,200);
circle(400,250,100);


//snowman eyes and triangle nose
fill(0,0,0);
circle(375,240,10);
fill(0,0,0);
circle(400,240,10);
fill(255,100,0)
triangle(310,250,390,250,390,260);


//snowman mouth
fill(0,0,0);
circle(400,270,5);
fill(0,0,0);
circle(390,270,5);
fill(0,0,0);
circle(380,269,5);
fill(0,0,0);
circle(410,268,5);
fill(0,0,0);
circle(420,265,5);


//snowman buttons
fill(0,0,0);
circle(390,400,10);
fill(0,0,0);
circle(389,380,10);
fill(0,0,0);
circle(389,360,10);
fill(0,0,0);
circle(391,420,10);



//snowman arms
stroke(0,0,0);
strokeWeight(3);
line(mouseX-175,mouseY,305,370)
line(mouseX,mouseY,495,370)



// line(190,320,220,320)
// line(220,290,225,320)

// line(570,320,610,320)
// line(570,320,580,290)


//snowman hat
fill(0,0,0);
rect(355,195,90,20)
fill(0,0,0);
rect(370,140,60,60)


//snowflakes flying around 
let x = random (200,800)
let y = random (150,800)

  fill(255,255,255,130)
strokeWeight(0)
ellipse(x-100, y-100, 10,10)
ellipse(x-200, y, 10,10)
ellipse(x, y-200, 10,10)
ellipse(x-600, y, 10,10)
ellipse(x*1.5, y-300, 10,10)


}
// sky changes from day to night
function keyPressed() {
r = r - 7
g = g - 7
b = b - 10
}


/* How to get snowflakes moving: slowing down the random tick speed so it is
smoother? or figure out why my movement commands don't work
  // //snowfall 
// let xLocation = 100
// let yLocation = 100

let xLocation = 100
let yLocation = 100
// fill (255,255,255,200);
// strokeWeight(0);
// // ellipse(xLocation, yLocation, 10,10);
// // xLocation++
// // yLocation++
*/






