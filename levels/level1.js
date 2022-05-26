const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -1799, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -1799, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -1799, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -1799, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1799, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1799, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1799, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1799, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 3598, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 3598, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 3598, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 3598, 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 5397, 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 5397, 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 5397, 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 5397, 0)
    ],
    [
        new Bottle('img/6.botella/2.Botella_enterrada2.png', 700 + Math.random() * 200),
        new Bottle('img/6.botella/2.Botella_enterrada1.png', 1700 + Math.random() * 200),
        new Bottle('img/6.botella/2.Botella_enterrada2.png', 2700 + Math.random() * 200),
        new Bottle('img/6.botella/2.Botella_enterrada1.png', 3700 + Math.random() * 200),
        new Bottle('img/6.botella/2.Botella_enterrada2.png', 4700 + Math.random() * 200)
    ],
    [
        new Coin('img/8.Coin/Moneda2.png', 600 + Math.random() * 400),
        new Coin('img/8.Coin/Moneda2.png', 1600 + Math.random() * 400),
        new Coin('img/8.Coin/Moneda2.png', 2600 + Math.random() * 400),
        new Coin('img/8.Coin/Moneda2.png', 3600 + Math.random() * 400),
        new Coin('img/8.Coin/Moneda2.png', 4600 + Math.random() * 400)
    ]);