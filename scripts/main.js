window.addEventListener('keydown', playNoteKeyboard);

function playNoteKeyboard(e) {
    if (e.repeat) return;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('key-active');
    }
