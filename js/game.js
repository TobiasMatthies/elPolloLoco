let canvas;
let world;
let keyboard = new Keyboard();


function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
}


document.addEventListener("keydown", (e) => {
  let keyCode = e['keyCode'];
  let key = e['code'];

  if(keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 32) {
  keyboard[`${key}`] = true;
  }
});


document.addEventListener("keyup", (e) => {
  let keyCode = e['keyCode'];
  let key = e['code'];

  if(keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 32) {
  keyboard[`${key}`] = false;
  }
});