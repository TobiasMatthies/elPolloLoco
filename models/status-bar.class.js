class StatusBar extends DrawableObject {
    x = 20;
    height = 100;
    width = 500;
    percentage = 100;
    img = new Image();


    constructor(y) {
        super().y = y;
    }


    setPercentage(percentage, images) {
        this.percentage = percentage;
        let path = images[this.resolveImageIndex()];
        this.img.src = this.imageCache[path];
    }


    resolveImageIndex() {
        return Math.floor(this.percentage / 20);
    }
}