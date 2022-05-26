class Bottle extends CollectableItem {
    y = 760;
    height = 140;
    width = 120;


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}