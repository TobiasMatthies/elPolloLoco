class ThrowableObject extends MovableObject {
    height = 140;
    width = 120;
    speed = 14;
    shatterSound = new Audio('audio/bottle.mp3');

    IMAGES_FLYING = [
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 6.png',
    ];

    IMAGES_SHATTERING = [
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];


    constructor(x, y) {
        super().loadImages(this.IMAGES_FLYING);
        this.loadImages(this.IMAGES_SHATTERING);
        this.loadImage(this.IMAGES_FLYING[0]);
        this.x = x;
        Object.freeze(this.x);
        this.y = y;
        this.throw(100, 500);
        this.animate();
    }


    throw() {
        this.speedY = 18;
        this.applyGravity();

        setInterval(() => {
            if (this.isAboveGround()) {
                if (world.character.otherDirection) {
                    this.x -= 10;
                } else {
                    this.x += 10;
                }
            }
        }, 1000 / 60);
    }


    animate() {
        let intervall = setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_FLYING);
            } else {
                this.shatterSound.play();
                this.playAnimation(this.IMAGES_SHATTERING);

                setTimeout(() => {
                    this.deleteObject(intervall);
                }, 400);
            }
        }, 100);
    }


    deleteObject(intervall) {
        clearInterval(intervall);
        world.throwableObjects.pop();
    }
}