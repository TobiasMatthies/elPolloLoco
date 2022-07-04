let canvas;
let world;
let keyboard = new Keyboard();


/**
 * 
 * starting the game
 */
function init() {
  HideIntroShowGame();
  canvas = document.getElementById('canvas');
  checkForMobileDevice();
  addKeyboardEventListeners();
  addMobileButtonsEventListeners();
  initLevel();
  world = new World(canvas, keyboard);
  checkForGameOver();
}


/**
 * hiding the intro elements and showing the game elements
 */
function HideIntroShowGame() {
  document.getElementById('intro_image').classList.add('d-none');
  document.getElementById('intro_span').classList.add('d-none');
  document.getElementById('game_over_screen').classList.add('d-none');
  document.getElementById('right_button_container').classList.remove('d-none');
  document.getElementById('left_button_container').classList.remove('d-none');
  document.getElementById('attribution').classList.add('d-none');
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


/**
 * checking if the gamie is over
 */
function checkForGameOver() {
   setInterval(() => {
     if (!world.level.enemies) {
       document.getElementById('game_over_screen').classList.remove('d-none');
       document.getElementById('right_button_container').classList.add('d-none');
  document.getElementById('left_button_container').classList.add('d-none');
     }
   }, 1000 / 60);
}


/**
 * checking for a mobile device
 */
function checkForMobileDevice() {
  if (window.innerWidth < 1000) {
    screen.orientation.lock('landscape');
  }
}


/**
 * showing the help window
 */
function showHelp() {
  document.getElementById('help_container').classList.remove('d-none');
}


/**
 * hiding the help window
 */
function hideHelp() {
  document.getElementById('help_container').classList.add('d-none');
}