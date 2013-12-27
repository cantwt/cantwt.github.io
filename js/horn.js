var mySound = new buzz.sound( "AirHorn", {
    formats: [ "ogg", "mp3" ]
});

mySound.play()
    .bind( "timeupdate", function() {
        var timer = buzz.toTimer( this.getTime() );
        document.getElementById( "timer" ).innerHTML = timer;
    });

function play() {
    mySound.stop();
    mySound.play();
}