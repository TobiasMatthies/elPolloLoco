class Coin extends CollectableItem{
    height = 200;
    width = 200;


    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}