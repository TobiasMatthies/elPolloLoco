class BackgroundObject extends MovableObject {
    height = 1000;
    width = 1800;
    speed = 4;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}    