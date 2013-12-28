var sound;

$( document ).ready( function() {
    sound = new Howl({
        urls: ['AirHorn.ogg', 'AirHorn.mp3']
    });
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 81) {
        sound.stop();
    }
});

function play () {
    sound.stop();
    sound.play();
}