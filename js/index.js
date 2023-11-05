let bg;
let base;
let hero;
let mapWidth = 288;
let mapHeight = 512;
let baseX = 0;
let baseSpeed = 2; // Adjust the speed as needed

function preload() {
  bg = loadImage("/assets/imgs/background-day.png");
  base = loadImage("/assets/imgs/base.png");
  bird = loadImage("/assets/imgs/yellowbird-midflap.png");
}

function setup() {
  createCanvas(mapWidth, mapHeight);
  hero = new Bird();
}


function draw() {
  baseX -= baseSpeed;
  if (baseX <= -mapWidth) {
    baseX = 0;
  }
  background(bg);
  image(base, baseX, 425);
  image(base, baseX + mapWidth, 425);
  hero.draw()
  hero.flap()
}

