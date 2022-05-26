class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    level_start_x = -1590;
    level_end_x = 5500;

    constructor(enemies, clouds, backgroundObjects, bottles, coins) {
      this.enemies = enemies;
      this.clouds = clouds;
      this.backgroundObjects = backgroundObjects;
      this.bottles = bottles;
      this.coins = coins
    }
}