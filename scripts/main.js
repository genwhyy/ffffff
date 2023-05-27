window.addEventListener('keydown', function(e){
const audioKey = document.querySelector('audio[data-key="${e.keyCode}"]');
console.log(audioKey);
});