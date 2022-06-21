let canvas;
let world;
let keyboard = new Keyboard();


function init() {
  document.getElementById('intro_image').classList.add('d-none');
  document.getElementById('intro_span').classList.add('d-none');
  canvas = document.getElementById('canvas');
  canvas.requestFullscreen();
  initLevel();
  world = new World(canvas, keyboard);
}


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


document.addEventListener("keydown", (e) => {
  let keyCode = e['keyCode'];
  let key = e['code'];

  if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 32 || keyCode == 68) {
    keyboard[key] = true;
  }
});


document.addEventListener("keyup", (e) => {
  let keyCode = e['keyCode'];
  let key = e['code'];

  if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 32 || keyCode == 68) {
    keyboard[key] = false;
  }
});