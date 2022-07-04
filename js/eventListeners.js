/**
 * 
 * adding the keyboard event listeners to the game
 * -setting the pressed key in question to true
 * -setting the released key in question to false
 */
function addKeyboardEventListeners() {
    addKeyDownEventListeners();
    addKeyUpEventListeners();
}


function addKeyDownEventListeners() {
    document.addEventListener("keydown", (e) => {
        let keyCode = e['keyCode'];
        let key = e['code'];

        if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 32 || keyCode == 68) {
            keyboard[key] = true;
        }
    });
}


function addKeyUpEventListeners() {
    document.addEventListener("keyup", (e) => {
        let keyCode = e['keyCode'];
        let key = e['code'];

        if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 32 || keyCode == 68) {
            keyboard[key] = false;
        }

        if (keyCode == 68) {
            world.throwPause = true;
        }
    });
}


/**
 * 
 * adding the mobile buttons event listeners to the game
 */
function addMobileButtonsEventListeners() {
    document.getElementById('left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.ArrowLeft = true;
    });

    document.getElementById('left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.ArrowLeft = false;
    });

    document.getElementById('right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.ArrowRight = true;
    });

    document.getElementById('right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.ArrowRight = false;
    });

    document.getElementById('jump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.Space = true;
    });

    document.getElementById('jump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.Space = false;
    });

    document.getElementById('throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.KeyD = true;
    });

    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.KeyD = false;
        world.throwPause = true;
    });
}