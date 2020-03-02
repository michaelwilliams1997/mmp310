var mrlair;
var jerry;
var ground;
/* 
	runs before setup
	when preload is done, 
	setup gets called
*/
function preload() {
	mrlair = loadImage('mr.lair1.png');
    jerry  = loadImage('jerry .png');
	ground = loadImage('mr.lairground.png');
	
	
} 

// location variables
var mrlairX = 100;
var mrlairY = 200;
var jerryX  = 850;
var jerryY  = 170;
var groundX = 150;
var groundY = 970;
var clouds
var clouds
var story = "Once upon a time, there were two characters named mr.lester and Jerry.";

// runs once to set up browser
function setup() {
	createCanvas(windowWidth, windowHeight);
}

// runs 60fps draws graphics
function draw() {
	background('lightblue');

	// draw characters
	image(mrlair, mrlairX, mrlairY);
	image (jerry, jerryX,  jerryY);
    image (ground, groundX,  groundY);
	// narration
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);
}






