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
var mrlairX = 200;
var mrlairY = 700;
var cloudsX = 750;
var cloudsY = 170;
var houseX  = 950;
var houseY = 470;
var sunX   =40;
var sunY   =35;
var currentSetting = "outside" 
    

var story = "Mr.lair is Outside chilling and thinking about doing something stupid.";

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
   
   
   

	// conditional statement
	if (currentSetting == "outside") {
		background('lightblue');

		fill('SANDYBROWN');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);
	} 

	// ocean setting
	else if (currentSetting == "talk") {
		background('lightblue');

		fill('darkblue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

		// mr.lair,jerry
		image(mrlair, mrlairX, mrlairY);
	image (jerry, jerryX,  jerryY);

	}


	// draw characters
	imageMode(CENTER);
	image(mrlair, mrlairX, mrlairY);

	// narration
	fill('black');
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);

	// instructions
	textSize(18);
	fill('white');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("Right arrow to advance story", width - 100, height - 70, 100);
}

/*
	event listener
	user interaction with browser
	mousePressed
	p5 running in background to call this function when user clicks
*/



function mousePressed() {
	// change scene 
	// scene order: beach, ocean, island
	if (currentSetting == "outside") {

		// change setting
		currentSetting = "ot";

		// update story
		story = "Mr.lair see jerry house to go tell a lie for fun so he can get a joke out off it .";

		// update characters position
		mrlairX = 400;
		jerryX = 500;

	} else if (currentSetting == "talk") {
		currentSetting = "outside";
		story = "mr.lester and Jerry went to talk and mr.lair went and told his lie which upset jerry.";

		
        jerryX = 100;
		mr.lairX = 300;
	}

}

