class Character extends MovableObject {
    height = 450;
    width = 250;
    y = 450;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ];
    world;
    speed = 10;
    walking_sound = new Audio('audio/step.mp3')

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
            this.walking_sound.pause();
            if (keyboard.ArrowRight && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            };

            if (keyboard.ArrowLeft && this.x > this.world.level.level_start_x) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            };

            this.world.camera_x = -this.x + 200;
        }, 1000 / 60);

        setInterval(() => {
            if (keyboard.ArrowRight || keyboard.ArrowLeft) {
                this.playAnimation(this.IMAGES_WALKING);
            };
        }, 80);
    }


    jump() {

    }
}