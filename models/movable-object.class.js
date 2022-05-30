class MovableObject {
    x = 120;
    y = 450;
    img;
    height = 450;
    width = 250;
    imageCache = {};
    currentImage = 0;
    speed = 0.3;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.5;
    walking_sound = new Audio('audio/step.mp3');
    jumping_sound = new Audio('audio/jump.mp3');
    energy = 100;


    constructor() {

    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60); 
    }


    isAboveGround() {
        return this.y <= 450;
    }


    /**
     * 
     * this function is used to load the first image
     * @param {string} path 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawBorder(ctx) {
        ctx.lineWidth = '5';
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }


    isColliding(mo) {
      return this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height;
    }


    /**
     * 
     * @param {Array} array 
     */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = path;
        });

    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img.src = path;
        this.currentImage++;
    }


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }


    moveLeft() {
       this.x -= this.speed;
    }


    jump() {
        this.jumping_sound.play();
        this.speedY = 18;
    }

    hit() {
        if (this.energy > 0) {
            this.energy -= 5;
            }
    }
}