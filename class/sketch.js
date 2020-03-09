var mrlair;
var megaman;
var ground;
var clouds;
/* 
	runs before setup
	when preload is done, 
	setup gets called
*/
function preload() {
	mrlair = loadImage('mr.lair1.png');
   megaman  = loadImage('megaman-moving.gif');
	ground = loadImage('mr.lairground.png');
	clouds =loadImage('clouds.png');
   
	
} 

// location variables
var mrlairX = 100;
var mrlairY = 200;
var megamanX  = 650;
var megamanY  = 170;
var groundX = 150;
var groundY = 970;
var cloudsX = 200;
var cloudsY= 88;


var story = "Once upon a time, there were two characters named mr.lester and Jerry.";


/* position variables for images */
var cloudsX = []; // empty array
var cloudsY = [];
var numClouds = 7;

function setup() {
	createCanvas(windowWidth, windowHeight);
	

	// add cloud positions
	let x = -50;
	for (let i = 0; i < numClouds; i++) {
		cloudsX.push( x );
		// update x, distributing number of clouds across canvas
		x += width/numClouds + random(-100, 100);
		cloudsY.push( random(height/3) );
	}
	
}

function draw() {
	background('lightblue');
	// draw clouds
	for (let i = 0; i < numClouds; i++) {
		image(clouds, cloudsX[i], cloudsY[i]);

		// animate x
		cloudsX[i] += 1;

		// check if cloud is beyond right side of canvas
		if (cloudsX[i] > width) {
			// reset cloud back to left side
			cloudsX[i] = -clouds.width;
            
		}
	}
;

	// draw characters
	image(mrlair, mrlairX, mrlairY);
	image (megaman, megamanX,  megamanY);
    image (ground, groundX,  groundY);
	// narration
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);
}




	// for (let x = -50; x <= width; x += 200) {
	// 	let y = random(height/3);
	// 	let offset = random(-100, 100);
	// 	image(cloudImage, x + offset, y);

	// 	// image(cloudImage, random(width), random(height));
	// }










