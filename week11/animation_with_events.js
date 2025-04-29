// Declare variable for the horizontal position of the circle
let x = 25;

let y = 25;

function setup() {
  // Create the canvas
  createCanvas(800, 400);

  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(RGB, 150);

  // Set the text size
  textSize(20);

  // No animation to start
  noLoop();
}

function draw() {
  // Clear the background
  background(180,89,100);
  
  //adjust stroke weight
  strokeWeight(5);
  
  //change stroke color
  stroke(80,70,80);

  // Draw a circle, with hue determined by frameCount
  
    
  fill(x / 3, 90, 90);
  circle(x, height / 66, 50);
  
  fill(x / 3, 90, 90);
  circle(x, height / 6, 50);
  
  fill(x / 3, 90, 90);
  circle(x, height / 2, 50);
  
  fill(x / 3, 120, 120);
  circle(x, height / 3, 50);
  
  fill(x / 3, 120, 120);
  circle(x, height / 1.5, 50);
  
  fill(x / 3, 120, 120);
  circle(x, height / 1.2, 50);
  
  fill(x / 3, 120, 120);
  circle(x, height / 1, 50);
  
  
  
  
  //vertical circles
  
  fill(y / 3, 90, 90);
  circle(width / 70,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 12,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 6,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 4,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 3,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 2.4,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 2,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 1.7,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 1.5,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 1.33,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 1.2,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 1.1,y, 50);
  
  fill(y / 3, 90, 90);
  circle(width / 1.02,y, 50);



  // Increase the x variable by 5
  x += 13;

  // Reset the circle position after it moves off the right side
  if (x > width + 25) {
    x = -25;
  }
  
  y += 20;
  
  if(y > height + 25){
    y = -25;
  }

  describe('circle moving to the right and up and down');
}

function mousePressed() {
  // Start/stop the animation loop
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function keyPressed() {
  // Draw one frame
  redraw();
}