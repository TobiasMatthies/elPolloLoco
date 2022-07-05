class Bottle extends CollectableItem {
    y = 760;
    height = 140;
    width = 120;
    offsetTop = 10;
    offsetRight = 10;


    constructor(imagePath, x, offsetLeft) {
        super().loadImage(imagePath);
        this.x = x;
        this.offsetLeft = offsetLeft;
    }
}