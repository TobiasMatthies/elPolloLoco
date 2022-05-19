class Cloud extends MovableObject {
    x = 0;
    y = 50;
    height = 800;
    width = 1800;
    img = 'img/5.Fondo/Capas/4.nubes/1.png';

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.animate();
    }

    /**
     * 
     * this function is used to move the clouds
     */
    animate() {
       this.moveLeft();
    }


}