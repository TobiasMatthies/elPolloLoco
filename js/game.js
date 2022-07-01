let canvas;
let world;
let keyboard = new Keyboard();


/**
 * 
 * starting the game
 */
// remove fullscreen
function init() {
  document.getElementById('intro_image').classList.add('d-none');
  document.getElementById('intro_span').classList.add('d-none');
  document.getElementById('game_over_screen').classList.add('d-none');
  canvas = document.getElementById('canvas');
  document.getElementById('attribution').classList.add('d-none');
  checkForMobileDevice();
  addKeyboardEventListeners();
  addMobileButtonsEventListeners();
  initLevel();
  world = new World(canvas, keyboard);
  checkForGameOver();
}


/**
 * 
 * animating the intro text
 */
function animateIntroSpan() {
  if (!level1) {
    document.getElementById('intro_span').style = "transform: scale(1.2);";

    setTimeout(() => {
      document.getElementById('intro_span').style = "transform: scale(1);";
    }, 1000);

    setTimeout(() => {
      animateIntroSpan();
    }, 2000);
  }
}


function checkForGameOver() {
   setInterval(() => {
     if (!world.level.enemies) {
       document.getElementById('game_over_screen').classList.remove('d-none');
     }
   }, 1000 / 60);
}


function checkForMobileDevice() {
  if (window.innerWidth < 1000) {
    screen.orientation.lock('landscape');
  }
}