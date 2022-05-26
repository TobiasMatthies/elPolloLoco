class MovableObject {
    x = 120;
    y = 780;
    img;
    width = 120;
    height = 120;
    imageCache = {};
    currentImage = 0;
    speed = 0.3;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.5;
    walking_sound = new Audio('audio/step.mp3');
    jumping_sound = new Audio('audio/jump.mp3');


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
        this.speedY = 14;
    }
}