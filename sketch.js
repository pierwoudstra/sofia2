let stk = 50;
let bg;
let pg;

function preload() {
  // Always use preload to ensure your image is ready before setup()
  bg = loadImage('assets/questionmark.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(width, height);
  pg.background(255);
  pg.noStroke();

  // let a = createA('https://p5js.org/', 'p5*js');
  // a.position(25, 35);
}

function draw() {

  background(255,10)
  image(bg, 0, 0, width, height, 0, 0, bg.width, bg.height, CONTAIN);

  pg.blendMode(REMOVE);

  fill(200,230,0,100)
  noStroke();
    
  for (let i = 0; i < 10; i++) {
    circle(mouseX + random(random(stk)) - stk/2, mouseY - random(random(stk)) + stk/2, random(stk/2))
    circle(mouseX - random(random(stk)) + stk/2, mouseY + random(random(stk)) - stk/2, random(stk/2))

    pg.circle(mouseX + random(random(stk)) - stk/2, mouseY - random(random(stk)) + stk/2, random(stk/2))
    pg.circle(mouseX - random(random(stk)) + stk/2, mouseY + random(random(stk)) - stk/2, random(stk/2))
  }
 
  pg.blendMode(BLEND);

  image(pg, 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}