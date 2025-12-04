

let ellipses = []; // object array for pongballs
ellipses.length = 3; // sets length of array to 3

function setup() 
{
	createCanvas(800, 800);
	//each iteration of the loop creates a new MultiPong object for the array at a random x and y
	for (let i = 0; i < ellipses.length; i++) 
	{
		ellipses[i] = new MultiPong(350,350);
	}
}

function draw() 
{
	background(150, 100, 255);
	//each iteration of the loop calls the display and move methods for each object in the array
	for (let i = 0; i < ellipses.length; i++) 
	{
		ellipses[i].display();
		ellipses[i].move();
	}
}

class MultiPong 
{
	constructor(tempX, tempY)
	{
		this.x = tempX;
		this.y = tempY;
		this.xMove = random(-8,8);
    	this.yMove = random(2,5);
		this.StrokeWeight = 0;
	}

	display() 
	{
		strokeWeight(this.StrokeWeight);
		fill(255, 255, 255);
    	ellipseMode(CENTER);
		ellipse(this.x, this.y, 50);
	}

	move() 
	{
		this.x += this.xMove;
		this.y += this.yMove

		if (this.x >= width-30 || this.x <= 20) 
		{
			this.xMove = -this.xMove;
		}

		if (this.y >= height-30 || this.y <= 30)
		{
			this.yMove = -this.yMove;
    	}

  
	}


  
}