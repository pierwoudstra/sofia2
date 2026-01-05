let bg;
let pg;

function preload() {
  // Always use preload to ensure your image is ready before setup()
  bg = loadImage('assets/questionmark.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create an off-screen graphics buffer.
  // We'll draw the "reveal" on this layer.
  pg = createGraphics(width, height);
  pg.background(255); // The initial white "scratch-off" layer
  pg.noStroke();
}

function draw() {
  // First, draw the background image on the main canvas.
  image(bg, 0, 0, width, height, 0, 0, bg.width, bg.height, CONTAIN);
  
  // Next, we'll draw on our off-screen graphics buffer.
  // This is where the magic happens.
  
  // Change the blend mode to REMOVE.
  // Anything we draw will subtract its color from the background.
  pg.blendMode(REMOVE);
  
  // Draw circles on the buffer.
  // The circles will "remove" the white color, revealing the image behind.
  for (let i = 0; i < 5; i++) {
    // We use pg.mouseY and pg.mouseX to draw on the graphics buffer.
    pg.circle(mouseX + random(10) - 5, mouseY + random(10) - 5, random(10, 25));
  }
  
  // Switch back to the default blend mode so it doesn't affect other drawings.
  pg.blendMode(BLEND);
  
  // Finally, draw the off-screen buffer on top of the background image.
  image(pg, 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Also resize the graphics buffer to match
  pg = createGraphics(width, height);
  pg.background(255);
}