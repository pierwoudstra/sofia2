let stk = 70;
let bg;
let pg;

let cv;
let contact;
let about;
let embodied;
let sound;
let perf;
let writing;

function preload() {
  // Always use preload to ensure your image is ready before setup()
  // bg = loadImage('assets/questionmark.png');
  bg = loadImage('assets/sofia_bg1.webp');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(width, height);
  pg.background(255);
  pg.noStroke();

  cv = createA('curriculum.html', 'curriculum');
  cv.style('opacity', 0);
  cv.size(100);
  cv.style('font-size', '2rem')

  contact = createA('contact.html', 'contact');
  contact.style('opacity', 0);
  contact.size(100);
  contact.style('font-size', '2rem');

  about = createA('about.html', 'about');
  about.style('opacity', 0);
  about.size(100);
  about.style('font-size', '2rem');

  embodied = createA('embodied.html', 'embodied practices');
  embodied.style('opacity', 0);
  embodied.size(200);
  embodied.style('font-size', '1.2rem');

  sound = createA('sound.html', 'sound');
  sound.style('opacity', 0);
  sound.size(100);
  sound.style('font-size', '1.2rem');

  perf = createA('performance.html', 'performance');
  perf.style('opacity', 0);
  perf.size(150);
  perf.style('font-size', '1.2rem');

  writing = createA('writing.html', 'writing');
  writing.style('opacity', 0);
  writing.size(100);
  writing.style('font-size', '1.2rem');

}

function draw() {

  // background(255,10);
  background(190, 230, 152, 10);
  // image(bg, 0, 0, width, height, 0, 0, bg.width, bg.height, CONTAIN);
  image(bg, 0, 0, width, height);

  cv.position(windowWidth/1.6, windowHeight/2);
  contact.position(windowWidth/1.6, windowHeight/3.6);
  about.position(windowWidth/2.7, windowHeight/1.53);

  embodied.position(windowWidth/3.7,windowHeight/5.5);
  sound.position(windowWidth/3.7,windowHeight/4.5);
  perf.position(windowWidth/3.7,windowHeight/3.85);
  writing.position(windowWidth/3.7,windowHeight/3.3);

  pg.blendMode(REMOVE);
  // a.blendMode(REMOVE)

  fill(200,230,0,100)
  noStroke();
    
  for (let i = 0; i < 10; i++) {
    circle(mouseX + random(random(stk)) - stk/2, mouseY - random(random(stk)) + stk/2, random(stk/2))
    circle(mouseX - random(random(stk)) + stk/2, mouseY + random(random(stk)) - stk/2, random(stk/2))

    pg.circle(mouseX + random(random(stk)) - stk/2, mouseY - random(random(stk)) + stk/2, random(stk/2))
    pg.circle(mouseX - random(random(stk)) + stk/2, mouseY + random(random(stk)) - stk/2, random(stk/2))
  }
 
  pg.blendMode(BLEND);

  // rect(windowWidth/1.6, windowHeight/2.1, windowWidth/8, windowHeight/12)
  // rect(windowWidth/1.6, windowHeight/3.6, windowWidth/8, windowHeight/12)
  // rect(windowWidth/2.7, windowHeight/1.6, windowWidth/8, windowHeight/12)

  image(pg, 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // Create a temporary copy of the current reveal progress
  let tempPg = createGraphics(width, height);
  tempPg.image(pg, 0, 0, width, height); 
  
  // Resize the pg graphics buffer
  pg.resizeCanvas(windowWidth, windowHeight);
  
  // Restore the reveal progress so it stretches with the window
  pg.image(tempPg, 0, 0, width, height);
}