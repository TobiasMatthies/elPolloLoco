class BackgroundObject extends MovableObject {
    height = 1000;
    width = 1800;

    constructor(imagePath, x, y, speed) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (keyboard.ArrowRight && world.level.enemies) {
                this.moveLeft();
            } else if (keyboard.ArrowLeft && world.level.enemies) {
                this.moveRight();
            }
        }, 1000 / 60);
    }
}    