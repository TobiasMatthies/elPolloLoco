class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    bottleBar = new BottleBar(20);
    healthBar = new HealthBar(100);
    coinBar = new CoinBar(180);
    throwableObjects = [];
    coinCollectSound = new Audio('audio/coin.mp3');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }


    /**
     * 
     * this function sets the world of the character to this world
     */
    setWorld() {
        this.character.world = this;
    }


    /**
     * 
     * checking if character is colliding
     */
    checkCollisions() {
        setInterval(() => {
            this.checkCollisionsEnemies();
            this.checkCollectingCoins();
            this.checkCollectingBottles();
            this.checkThrow();
            this.checkBottleHit();
        }, 200);
    }


    /**
     * 
     * checking if character is colliding with enemies
     */
    checkCollisionsEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.healthBar.setPercentage(this.character.energy, this.healthBar.IMAGES);
            }
        });
    }


    /**
     * 
     * check if the character is collecting a coin
     */
    checkCollectingCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.coinCollectSound.pause();
                this.coinCollectSound.play();
                this.character.coins += 5;
                this.coinBar.setPercentage(this.character.coins, this.coinBar.IMAGES);
                let coinPosition = this.level.coins.indexOf(coin);
                this.level.coins.splice(coinPosition, 1);
            }
        });
    }


    /**
     * 
     * check if the character is collecting a bottle
     */
    checkCollectingBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.bottles += 20;
                this.bottleBar.setPercentage(this.character.bottles, this.bottleBar.IMAGES);
                let bottlePosition = this.level.bottles.indexOf(bottle);
                this.level.bottles.splice(bottlePosition, 1);
            }
        });
    }


    /**
     * 
     * check if the bottle hits an enemy
     */
    checkBottleHit() {
        this.level.enemies.forEach((e) => {
            if (this.throwableObjects.length > 0) {
                let bottle = this.throwableObjects[0];

                if (bottle.isColliding(e)) {
                    console.log('collision with bottle');
                }
            }
        })
    }


    /**
     * 
     * check if the d key was pressed, if true creating a throwable object
     */
    checkThrow() {
        if (this.keyboard.KeyD && this.character.bottles > 19) {

            if (this.throwableObjects.length == 0) {
                this.throwableObjects.push(new ThrowableObject(this.character.x, this.character.y));
                this.character.bottles -= 20;
                this.bottleBar.setPercentage(this.character.bottles, this.bottleBar.IMAGES);

            }
        }
    }


    /**
     * 
     * this function is used to draw all the elements
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        //----- space for fixed objects -----
        this.addToMap(this.bottleBar);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);

        /*if (this.throwableObject) {
            this.addToMap(this.throwableObject);
        }*/

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies)
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    /**
     * 
     * this function is used to add each object of an array to the map
     * @param {Array} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
     * 
     * this function is used to add a single object to the map
     * @param {object} mo 
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);

        /*if (mo instanceof Character || mo instanceof Coin || mo instanceof Bottle) {
            mo.drawBorder(this.ctx);
        }*/

        if (mo.otherDirection) {
            this.flipBack(mo);
        }
    }


    /**
     * 
     * this function is used to flip the image to the left
     * @param {object} mo 
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * 
     * this function is used to flip the image back to the right
     * @param {object} mo 
     */
    flipBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}