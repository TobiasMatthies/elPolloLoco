class MovableObject extends DrawableObject {
    speed = 0.3;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.5;
    walking_sound = new Audio('audio/step.mp3');
    jumping_sound = new Audio('audio/jump.mp3');
    energy = 100;
    lastHit = 0;
    isAlive = true;


    constructor() {
      super();
    }


    /**
     * 
     * applying gravity to object above ground
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } else {
                this.speedY = 0;
            }
        }, 1000 / 60);
    }


    /**
     * 
     * @returns object above ground
     */
    isAboveGround() {
        if (this instanceof Character) {
        return this.y < 449.9;
        } else if (this instanceof ThrowableObject) {
            return this.y < 759.9;
        }
    }


    /**
     * 
     * drawing blue border around objects for orientation
     * @param {context} ctx 
     */
         drawBorder(ctx) {
            ctx.lineWidth = '5';
            ctx.beginPath();
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }


    /**
     * 
     * checking if object is colliding with enemy
     * @param {object} mo 
     * @returns object is colliding with enemy
     */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }


    /**
     * 
     * playing animation for object
     * @param {array} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * 
     * moving the object to the right
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }


    /**
     * 
     * moving the object to the left
     */
    moveLeft() {
        this.x -= this.speed;
    }


    /**
     * 
     * setting the speedY of an object to 18 and letting it jump
     */
    jump() {
        this.jumping_sound.play();
        this.speedY = 18;
    }


    /**
     * 
     * reducing the energy and setting the time of the last hit
     */
    hit() {
        if (this.energy > 0) {
            this.energy -= 5;
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * 
     * checking the time passed since the last hit
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; //time passed in ms
        timePassed = timePassed / 1000; //time passed in seconds
        return timePassed < 0.5;
    }
}