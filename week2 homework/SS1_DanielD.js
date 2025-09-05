/* Daniel D

Title: Chill Guy
 
Concept: Using simple 2D shapes and fill commands I aim to create an
image of a snowman
*/

function setup() {
  /*you must include a setup function to run code
  you only include ONE setup function per sketch */
  createCanvas(800, 800);
  //sets the size of the canvas in pixels, X and Y axis
background(170,255,255);


//Snow on ground
fill(255,255,255);
rect(0,700,800,200)


//snowman body
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
line(190,300,305,370)

line(600,300,495,370)

line(190,320,220,320)
line(220,290,225,320)

line(570,320,610,320)
line(570,320,580,290)


//snowman hat
fill(0,0,0);
rect(355,195,90,20)
fill(0,0,0);
rect(370,140,60,60)

}