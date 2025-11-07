/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
Title: Hypnotic Illusions
Daniel D.
4 slightly different designs of spiral illusions 
Design 1.5 allows user to control depth with the mouse X and Y position

<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*/

r = 20;
g = 20;
b = 20;
a = 255;
angle = 0;
let state = 'pre'

function setup() {
  createCanvas(700, 700);
  strokeWeight(4);
}


function draw() {
  background(r, g ,b);
  if (state == 'pre'){
    pre();
  }
  if (state == 'Illusion1'){
    Illusion1();
  }
  else if (state == 'Illusion1_5'){
    Illusion1_5();
  }
  else if (state == 'Illusion2'){
    Illusion2();
  }
  else if (state == 'Illusion3'){
    Illusion3();
  }


}


function pre(){

  fill(255);
  textSize(22)
  stroke(255);
  strokeWeight(1);
  textFont('Times New Roman');
  text('Press 1 for Illusion 1', width/2 - 75, height/2-100);
  text('Press 2 for Illusion 1.5', width/2 - 85, height/2-70);
  text('Press 3 for Illusion 2', width/2 - 75, height/2-40);
  text('Press 4 for Illusion 3', width/2 - 75, height/2-10);  
  text('Press "r" to return to this screen', width/2 - 120, height/2+20);  

    // rectMode(CENTER);
    // noFill();
    // stroke(255);
    // rect(width/2+15, height/2-45, 330, 170);
  //   for (let i = 15; i < 5000; i+=25) 
  // {

  //   push()
  //   translate(width/2+15, height/2-90);
  //   rectMode(CENTER);
  //   noFill();
  //   stroke(i, i ,i, a);
  //   rect(0, 50, i+275, i+150);
  //   pop();

  // }

}
function Illusion1(){
  //center point ellipse (currently invisible, change from variables to const to see)
  noStroke();
  fill(r,g,b);
  ellipse(width/2,  height/2, 10,10);

  //very slightly incrementing color values
  for ( let r = 0; r < 255; r+= 2);{
    r+= 0.025
    
  }
  for ( let g = 0; g < 255; g+= 2);{
    g+= 0.025
    
  }

  for ( let b = 0; b < 255; b+= 2);{
    b+= 0.025
    
  }
  for ( let a = 255; a > 0; a-= 2);{
    a-= 0.0005
  }

  //option 1:

  for (let i = 15; i < 5000; i+=25) 
  {
    let i2 = i - 100;
    let i3 = i - 75;
    push()
    translate(width/2, height/2);
    rotate(i + angle *1.5);
    noFill();
    strokeWeight(3);
    stroke(i, i ,i, a);
    ellipse(0, 0, i2/2.5, i3/3);
    pop();
    // print('should be drawing', i);
    angle += 0.0001;
  }
}

function Illusion1_5(){
  //  // option1.5
  //center point ellipse (currently invisible, change from variables to const to see)
  noStroke();
  fill(r,g,b);
  ellipse(width/2,  height/2, 10,10);

  //very slightly incrementing color values
  for ( let r = 0; r < 255; r+= 2);{
    r+= 0.025
    
  }
  for ( let g = 0; g < 255; g+= 2);{
    g+= 0.025
    
  }

  for ( let b = 0; b < 255; b+= 2);{
    b+= 0.025
    
  }
  for ( let a = 255; a > 0; a-= 2);{
    a-= 0.0005
  }

  for (let i = 15; i < 5000; i+=25) 
  {
    let i2 = i - 100;
    let i3 = i - 75;
    push()
    translate(width/2, height/2);
    rotate(i + angle *1.5);
    noFill();
    strokeWeight(3)
    stroke(i, i ,i, a);
    ellipse(mouseX/30, mouseY/16, i2/2.5, i3/3);
    pop();
    // print('should be drawing', i);
    angle += 0.0001;
  }
}

function Illusion2(){
  //option 2:
  //center point ellipse (currently invisible, change from variables to const to see)
  noStroke();
  fill(r,g,b);
  ellipse(width/2,  height/2, 10,10);

  //very slightly incrementing color values
  for ( let r = 0; r < 255; r+= 2);{
    r+= 0.025
    
  }
  for ( let g = 0; g < 255; g+= 2);{
    g+= 0.025
    
  }

  for ( let b = 0; b < 255; b+= 2);{
    b+= 0.025
    
  }
  for ( let a = 255; a > 0; a-= 2);{
    a-= 0.0005
  }

  for (let i = 15; i < 5000; i+=21.5) 
  {
    let i2 = i - 100;
    let i3 = i - 75;
    push()
    translate(width/2, height/2);
    rotate(i + angle *2.75);
    noFill();
    strokeWeight(2);
    stroke(i, i ,i, a);
    ellipse(0, 0, i2/2, i3/2);
    pop();
    // print('should be drawing', i);
    angle += 0.000075;
  }

}

function Illusion3(){
  //option 3:
  //center point ellipse (currently invisible, change from variables to const to see)
  noStroke();
  fill(r,g,b);
  ellipse(width/2,  height/2, 10,10);

  //very slightly incrementing color values
  for ( let r = 0; r < 255; r+= 2);{
    r+= 0.025
    
  }
  for ( let g = 0; g < 255; g+= 2);{
    g+= 0.025
    
  }

  for ( let b = 0; b < 255; b+= 2);{
    b+= 0.025
    
  }
  for ( let a = 255; a > 0; a-= 2);{
    a-= 0.0005
  }

  for (let i = 15; i < 5000; i+=25) 
  {
    push()
    translate(width/2, height/2);
    rotate(i + angle +500);
    noFill();
    strokeWeight(3.5)
    stroke(i, i ,i);
    ellipse(0, 0, i-500, i-480);
    pop();
    // print('should be drawing', i);
    angle += 0.0002;
  }

}


function keyPressed(){
  if (key == '1'){
    state = 'Illusion1'; }
  if (key == '2'){
    state = 'Illusion1_5'; }
  if (key == '3'){
    state = 'Illusion2'; }
  if (key == '4'){
    state = 'Illusion3'; }

  if (key == 'r'){
    r = 20;
    g = 20;
    b = 20;
    a = 255;
    state = 'pre';
  }
}