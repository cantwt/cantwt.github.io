<<<<<<< HEAD
var sound;

$( document ).ready( function() {
    sound = new Howl({
        urls: ['AirHorn.ogg', 'AirHorn.mp3']
    });
});
=======
<<<<<<< HEAD
var sound;

$( document ).ready( function() {
    sound = new Howl({
        urls: ['AirHorn.ogg', 'AirHorn.mp3']
    });
});
=======
var mySound;

$( document ).ready(function() {
    buzz.defaults.formats = [ 'ogg', 'mp3' ];
>>>>>>> parent of 8972b85... Audio Improving
>>>>>>> Fix stuff

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 81) {
        sound.stop();
    }
});

function play () {
    sound.stop();
    sound.play();
}