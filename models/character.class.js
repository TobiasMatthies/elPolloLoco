class Character extends MovableObject {
    height = 400;
    width = 250;
    y = 500;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ];
    world;
    speed = 8;

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    /**
     * 
     * this function is used to animate the character
     */
    animate() {
        setInterval( () => {
            if (keyboard.ArrowRight) {
                this.otherDirection = false;
                this.x += this.speed;
            };

            if (keyboard.ArrowLeft) {
                this.otherDirection = true;
                this.x -= this.speed;
            };
        }, 1000 / 60);

        setInterval(() => {
            if (keyboard.ArrowRight || keyboard.ArrowLeft) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img.src = path;
                this.currentImage++;
            };
        }, 80);
    }


    jump() {

    }
}