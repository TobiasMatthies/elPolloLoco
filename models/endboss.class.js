class Endboss extends MovableObject {
    height = 600;
    width = 500;
    y = 340;
    x = 5200;
    IMAGES_ALERTED = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G12.png'
    ];
    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G23.png'
    ];
    IMAGES_DYING = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G26.png'
    ];
    energy = 99;
    firstHit = true;
    offsetTop = 80;
    offsetLeft = 20;
    offsetRight = 10;



    constructor() {
        super().loadImage(this.IMAGES_ALERTED[0]);
        this.loadImages(this.IMAGES_ALERTED);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DYING);
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.isAlive) {
                if (!this.isHurt()) {
                    this.playAnimation(this.IMAGES_ALERTED);
                }
            } else {
                this.playAnimation(this.IMAGES_DYING);
            }
        }, 200);

        setInterval(() => {
            if (this.isAlive && this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            }
        }, 200);
    }
}