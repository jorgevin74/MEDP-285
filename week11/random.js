// Declare variables for the position and color of the circle

let circleX;
let circleY;
let circleColor;

let squareX;
let squareY;
let squareColor;

let triangleX;
let triangleY;
let triangleColor;

let rectX;
let rectY;
let rectColor;

let ellipseX;
let ellipseY;
let ellipseColor;

function setup() {
  createCanvas(1200, 500);

  // Set the initial position and color of the circle
  setPositionAndColor();

  describe(
    'A circle whose position and color change randomly when the user clicks the canvas.'
  );
}

function setPositionAndColor() {
  // Set the position to a random value (within the canvas)
  circleX = random(2, width);
  circleY = random(3, height);
  
  squareX = random(20, width);
  squareY = random(30, height);
  
  triangleX = random(10, width);
  triangleY = random(15, height);
  
  rectX = random(7, width);
  rectY = random(12, height);
  
  ellipseX = random(22, width);
  ellipseY = random(44, height);

  // Set R, G, and B to random values in the range (100, 256)
  circleColor = color(random(50, 256), random(50, 256), random(50, 256));
  squareColor = color(random(20, 200), random(20, 200), random(20, 200));
  triangleColor =  color(random(10, 210), random(10, 210), random(20, 210));
  rectColor =  color(random(30, 111), random(20, 120), random(40, 180));
  ellipseColor =  color(random(11, 99), random(43, 234), random(15, 160));
}

function draw() {
  background(50,111,11);
  

  strokeWeight(3);

  // Draw a circle at (x,y) with color c
  fill(circleColor);
  circle(circleX, circleY, 100);
  
  fill(squareColor);
  square(squareX, squareY, 50);
  
  fill(triangleColor);
  triangle(triangleX, triangleY, triangleX + 50, triangleY + 100,     triangleX - 50, triangleY + 100);
  
  fill(rectColor);
  rect(rectX, rectY, 800,200);
  
  fill(ellipseColor);
  ellipse(ellipseX, ellipseY, 200,50);
}

function mousePressed() {
  // On mouse press (re)set the position and color
  setPositionAndColor();
  
}