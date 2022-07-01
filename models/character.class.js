class Character extends MovableObject {
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-39.png',
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-43.png',
    ];

    IMAGES_DYING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-57.png',
    ];

    world;
    speed = 10;
    coins = 0;
    bottles = 0;
    level = level1;

    
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DYING);
        this.IMAGE_STANDING.src = 'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-1.png';
        this.applyGravity();
        this.animate();
    }

    /**
     * 
     * this function is used to animate the character
     * line 60, 87, 99: as long as there are enemies, character is able to move, meaning that when the game is over the character cannot move anymore.
     */
    animate() {
        setInterval(() => {
            this.walking_sound.pause();

            if (this.level.enemies) {
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
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.level.enemies) {
                if (this.isDead()) {
                    this.playAnimation(this.IMAGES_DYING);
                    this.isAlive = false;
                    
                    setTimeout(() => {this.level.enemies = undefined;}, 2000);
                } else if (this.isHurt()) {
                    this.playAnimation(this.IMAGES_HURT);
                } else if (this.isAboveGround()) {
                    this.playAnimation(this.IMAGES_JUMPING);
                }
            }
        }, 195);

        setInterval(() => {
            if (this.level.enemies) {
                if (this.isRunning() && this.isAlive) {
                    this.playAnimation(this.IMAGES_WALKING);
                };
            }
        }, 80);
    }


    /**
     * 
     * checking if character is dead
     * @returns value of energy = 0
     */
    isDead() {
        return this.energy == 0;
    }


    /**
     * 
     * checking if character is alive, on the ground, not hurt and running
     * @returns character is running and not in the air or dead
     */
    isRunning() {
        return keyboard.ArrowRight && !this.isAboveGround() && !this.isHurt() && !this.isDead() || keyboard.ArrowLeft && !this.isAboveGround() && !this.isHurt() && !this.isDead();
    }
}