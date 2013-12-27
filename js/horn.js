var sound = new Howl({
    urls: ['AirHorn.ogg', 'AirHorn/mp3']
}).play();

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 81) {
        sound.pause();
    }
});

function play () {
    sound.stop();
    sound.play();
}