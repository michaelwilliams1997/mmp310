function setup() { 
	createCanvas(600, 400);
	rectMode(CENTER);
} 
function draw() { 
	background(50,100, 200) ;
    fill("lavender")
     

	
	var x = mouseX;
	var y = mouseY;
	var offset = 100;

	noStroke();
	circle( x, y, 140, height);
	rect( x, y, 100, height); // face

	stroke("black");
	fill("red");
	ellipse(x - offset, y - offset, 40); // right eye
	ellipse(x + offset, y - offset, 40); // left eye
	rect(x, y + offset, 40, 20, 10); // mouth
	rect(x, y + offset,150, 168, 50, 100);
	
	fill('green');
	
    var w = map(x, 0, width, 100, 250)
    
	ellipse(x, y, w, 10);
}

