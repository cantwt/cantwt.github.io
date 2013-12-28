var mySound;

$( document ).ready(function() {
    buzz.defaults.formats = [ 'ogg', 'mp3' ];

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 81) {
            sound.stop();
        }
    });
});

function play () {
    sound.stop();
    sound.play();
}