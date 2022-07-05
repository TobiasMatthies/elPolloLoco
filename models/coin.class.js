class Coin extends CollectableItem{
    height = 200;
    width = 200;
    offsetTop = 50;
    offsetRight = 50;
    offsetBottom = 50;
    offsetLeft = 50;


    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}