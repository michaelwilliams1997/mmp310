
let y = 100;
// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(920, 700); 
  stroke(355);
  frameRate(40);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read,
function draw(center) {
  background(0); 
  y = y - 1;
  if (y < 10) {
    y = height;
  }
  square(0, y, width, y);
}