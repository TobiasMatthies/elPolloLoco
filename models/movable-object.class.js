class MovableObject {
    x = 120;
    y = 600;
    img;
    width = 200;
    height = 300;


    constructor() {
        this.moveLeft();
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {
        console.log('Moving right')
    }

    moveLeft() {
        
    }
}