class Cloud extends MovableObject {
    y = 50;
    height = 800;
    width = 1800;

    constructor(x, img) {
        super().loadImage(`img/5.Fondo/Capas/4.nubes/${img}`);
        this.x = x;
        this.animate();
    }

    /**
     * 
     * this function is used to move the clouds
     */
    animate() {
        setInterval(() => {
            if (this.isAlive) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }


}