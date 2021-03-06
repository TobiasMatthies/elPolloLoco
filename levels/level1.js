let level1;
function initLevel() {

level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chick(),
        new Chick(),
        new Chick(),
        new Chick(),
        new Endboss()
    ],
    [
        new Cloud(0, '1.png'),
        new Cloud(1799, '2.png'),
        new Cloud(3598, '1.png')
    ],
    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -1799, 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1799, 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 3598, 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 5397, 0, 0),

        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -1799, 0, 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0, 0, 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1799, 0, 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 3598, 0, 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 5397, 0, 2),
        

        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -1799, 0, 1),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0, 0, 1),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1799, 0, 1),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 3598, 0, 1),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 5397, 0, 1),

        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -1799, 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0, 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1799, 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 3598, 0, 0), 
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 5397, 0, 0)
    ],
    [
        new Bottle('img/6.botella/2.Botella_enterrada2.png', 700 + Math.random() * 200, 10),
        new Bottle('img/6.botella/2.Botella_enterrada1.png', 1700 + Math.random() * 200, 30),
        new Bottle('img/6.botella/2.Botella_enterrada2.png', 2700 + Math.random() * 200, 10),
        new Bottle('img/6.botella/2.Botella_enterrada1.png', 3700 + Math.random() * 200, 30),
        new Bottle('img/6.botella/2.Botella_enterrada2.png', 4300 + Math.random() * 200, 10)
    ],
    [
        new Coin('img/8.Coin/Moneda2.png', 620, 380),
        new Coin('img/8.Coin/Moneda2.png', 680, 300),
        new Coin('img/8.Coin/Moneda2.png', 760, 220),
        new Coin('img/8.Coin/Moneda2.png', 860, 180),
        new Coin('img/8.Coin/Moneda2.png', 960, 220),
        new Coin('img/8.Coin/Moneda2.png', 1040, 300),
        new Coin('img/8.Coin/Moneda2.png', 1100, 380),

        new Coin('img/8.Coin/Moneda2.png', 1800, 600),
        new Coin('img/8.Coin/Moneda2.png', 2000, 600),
        new Coin('img/8.Coin/Moneda2.png', 2200, 600),

        new Coin('img/8.Coin/Moneda2.png', 3120, 380),
        new Coin('img/8.Coin/Moneda2.png', 3180, 300),
        new Coin('img/8.Coin/Moneda2.png', 3260, 220),
        new Coin('img/8.Coin/Moneda2.png', 3360, 180),
        new Coin('img/8.Coin/Moneda2.png', 3460, 220),
        new Coin('img/8.Coin/Moneda2.png', 3540, 300),
        new Coin('img/8.Coin/Moneda2.png', 3600, 380),

        new Coin('img/8.Coin/Moneda2.png', 4000, 600),
        new Coin('img/8.Coin/Moneda2.png', 4200, 600),
        new Coin('img/8.Coin/Moneda2.png', 4400, 600),
    ]);
}