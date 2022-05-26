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


    constructor() {

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
        setInterval( () => {
            this.x += this.speed;
        }, 1000 / 60);
    }

    moveLeft() {
        setInterval( () => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}