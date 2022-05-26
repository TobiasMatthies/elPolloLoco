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

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-40.png'
    ];

    world;
    speed = 10;

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    /**
     * 
     * this function is used to animate the character
     */
    animate() {
        setInterval(() => {
            this.walking_sound.pause();

            if (keyboard.ArrowRight && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
            };

            if (keyboard.ArrowLeft && this.x > this.world.level.level_start_x) {
                this.otherDirection = true;
                this.moveLeft();
                this.walking_sound.play();
            };

            if (keyboard.Space && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 200;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            }
        }, 136.65);

        setInterval(() => {
                if (keyboard.ArrowRight && !this.isAboveGround() || keyboard.ArrowLeft && !this.isAboveGround()) {
                    this.playAnimation(this.IMAGES_WALKING);
                };
        }, 80);
    }
}