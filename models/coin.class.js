class Coin extends CollectableItem{
    height = 160;
    width = 160;


    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}