var mySound;

$( document ).ready(function() {
    buzz.defaults.formats = [ 'ogg', 'mp3' ];

    mySound = new buzz.sound( "AirHorn" );
    
    mySound.play()
        .bind( "timeupdate", function() {
            var timer = buzz.toTimer( this.getTime() );
            document.getElementById( "timer" ).innerHTML = timer;
        });
});

function play() {
    mySound.stop();
    mySound.play();
}