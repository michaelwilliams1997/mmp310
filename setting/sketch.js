var mrlair;
var jerry;

/* 
	runs before setup
	when preload is done, 
	setup gets called
*/
function preload() {
	mrlair = loadImage('mr.lair1.png');
    jerry  = loadImage('jerry .png');
	
	
} 

// location variables
var mrlairX = 100;
var mrlairY = 200;
var jerryX  = 150;
var jerryY  = 260;

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

	// narration
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);
}






