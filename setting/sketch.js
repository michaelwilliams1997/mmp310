var mrlair;
var clouds;
var house;
var sun;
/* 
	runs before setup
	when preload is done, 
	setup gets called
*/
function preload() {
	mrlair = loadImage('mr.lair1.png');
    clouds  = loadImage('clouds-1.png (1).png');
	 house  = loadImage('house-1.png (1).png');
	 sun = loadImage('sun-1.png (1).png');
} 

// location variables
var mrlairX = 100;
var mrlairY = 200;
var cloudsX = 750;
var cloudsY = 170;
var houseX  = 950;
var houseY = 470;
var sunX   =40;
var sunY   =35;


var story = "Mr.lair see jerry at his house to go tell a lie for fun .";

// runs once to set up browser
function setup() {
	createCanvas(windowWidth, windowHeight);
}

// runs 60fps draws graphics
function draw() {
	background('lightblue');

	// draw characters
	image(mrlair, mrlairX, mrlairY);
	image (clouds, cloudsX,  cloudsY);
    image (house, houseX,  houseY);
    image (sun, sunX,  sunY); 
    
    
	// narration
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);
}






