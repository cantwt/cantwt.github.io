var mySound;

$( document ).ready(function() {
    buzz.defaults.formats = [ 'ogg', 'mp3' ];
    
    mySound = new buzz.sound('AirHorn');

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 81) {
            sound.stop();
        }
    });
});

function play () {
    mySound.stop();
    mySound.play();
}