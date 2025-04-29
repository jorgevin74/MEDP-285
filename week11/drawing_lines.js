strokes = [];

function setup() {
  // Create the canvas
  createCanvas(1000, 500);

  // Set background to black
  background(80,80,80);

  // Set width of the lines
  strokeWeight(25);

  // Set color mode to hue-saturation-brightness (HSB)
  colorMode(RGB, 130);

  // Set screen reader accessible description
  describe('A blank canvas where the user draws by dragging the mouse');
}

function draw() {
  // Clear the background every frame
  background(80, 80, 80);

  for (let i = 0; i < strokes.length; i++) {
    let s = strokes[i];
    stroke(s.hue, 90, 90);
    line(s.x1, s.y1, s.x2, s.y2);
  }
}


function mouseDragged() {
  // Set the color based on the mouse position, and draw a line
  // from the previous position to the current position
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 90, 90);
  strokes.push({
    x1: pmouseX,
    y1: pmouseY,
    x2: mouseX,
    y2: mouseY,
    hue: lineHue
  });
}

function keyPressed() {
  if (key === 'z' || key === 'Z') {
    strokes.pop(); 
  }
  redraw();
}