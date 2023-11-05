
class Bird {
    constructor(birdX, birdY, img, gravity) {
        this.birdX= mapWidth / 2.2;
        this.birdY=240;
        this.img=img;
        this.gravity = 3;
    }
    draw(){
        image(bird, mapWidth / 2.2, this.birdY);
    }
    flap(){
        let nuevaY = this.birdY
        if (keyIsDown(32)){
            this.birdY -= 10;
        }
        this.birdY += this.gravity;
        nuevaY += this.birdY;
    }
  }