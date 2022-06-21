class Chick extends MovableObject {
    y = 800;
    width = 100;
    height = 100;
    speed = 1.5 + Math.random();
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_b sico/Versi¢n_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_pollito/3.Paso_izquierdo.png'
    ];
    IMAGE_DYING = 'img/3.Secuencias_Enemy_b sico/Versi¢n_pollito/4.Muerte.png';


    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 100 + Math.random() * 6000;
        this.animate();
    }

    /**
     * 
     * this function is used to animate the chicks
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 140);
    }
}