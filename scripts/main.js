window.addEventListener('keydown', playNoteKeyboard);
window.addEventListener('keyup', stopNoteKeyboard);
//keyboard
function playNoteKeyboard(e) {
    if (e.repeat) return; //если клавиша залипает чтобы не убивались уши 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('key-active');
    }
function stopNoteKeyboard(e) {
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.remove('key-active');
};
// mouse 
/*
let isMouseDown = false;
window.addEventListener('mousedown', playNoteMousedown, false);
window.addEventListener('mouseup', stopNoteMousedown);
window.addEventListener('mouseover', playNoteMouseover);
window.addEventListener('mouseout', stopNoteMouseover);

function playNoteMousedown(e) {
    if (!e.target.classList.contains('key')) return;
    const audio1 = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    e.target.classList.add('key-active');
    audio.currentTime = 0;
    audio1.play();
    isMouseDown = true;
};

function stopNoteMousedown(e) {
    e.target.classList.remove('key-active');
    e.target.removeEventListener('mouseover', playNoteMouseover);
    isMouseDown = false;
};

function playNoteMouseover(e) {
    if (!isMouseDown) return;
    if (!e.target.classList.contains('key')) return;
    const audio1 = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    e.target.classList.add('key-active');
    audio1.currentTime = 0;
    audio.play();
};

function stopNoteMouseover(e) {
    e.target.classList.remove('key-active');
    e.target.removeEventListener('mouseover', playNoteMouseover);
};
