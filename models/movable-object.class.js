class MovableObject {
    x = 120;
    y = 700;
    img;
    width = 150;
    height = 200;


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