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
    IMAGE_STANDING = new Image();


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
                if (!keyboard.ArrowRight && !keyboard.ArrowLeft && !keyboard.Space && !this.isHurt() && this.isAlive) {
                    this.currentImage = 0;
                    this.img = this.IMAGE_STANDING;
                }
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
        return (this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) &&
            (this.y + this.height) >= mo.y &&
            this.y <= (mo.y + mo.height);
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
            if (this instanceof Character) {
                this.energy -= 5;
            } else if (this instanceof Endboss) {
                this.energy -= 33;
            }
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

        if (this instanceof Character) {
            return timePassed < 0.5;
        } else if (this instanceof Endboss) {
            return timePassed < 1.5;
        }
    }
}