class Coin extends CollectableItem{
    y = 500 - Math.random() * 100;
    height = 200;
    width = 200;


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}