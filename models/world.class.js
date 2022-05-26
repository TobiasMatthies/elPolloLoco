class World {


    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
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
     * this function is used to draw all the elements
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);

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

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

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