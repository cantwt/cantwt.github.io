$( document ).ready(function() {
    $( "li" ).click(function( event ) {
        //event.preventDefault();
        //$( this ).hide( "slow" );
    });
    
    h1 = $( '.xp1' ).css('height');
    h2 = $( '.xp2' ).css('height');
    h3 = $( '.xp3' ).css('height');
    h4 = $( '.xp4' ).css('height');
    
    var $cont = $( '#content' );
    var height = $cont.height();
});


function coverAnim(targetURL) {
    var $w = $(window);
    var target = $w.height() + $w.scrollTop() - 100;
    
    $( '#w1' ).tween({
        height:{
            stop: target*0.071,
            time: 0,
            duration: 0.125,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w2' ).tween({
        height:{
            stop: target*0.142,
            time: 0,
            duration: 0.25,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w3' ).tween({
        height:{
            stop: target*0.357,
            time: 0,
            duration: 0.375,
            units: 'px',
            effect: 'linear'
        }
    });
    
    
    $( '#w4' ).tween({
        height:{
            stop: target*0.43,
            time: 0,
            duration: 0.5,
            units: 'px',
            effect: 'linear', 
            onStop: function( element, state ){
                $( '#content' ).load(targetURL, function(){
                    revealAnim( target );
                });
            }
        }
    });
    
    $.play()
}

function revealAnim(target){
    $( '#w1' ).tween({
        height:{
            start: target*0.071,
            stop: 0,
            time: 0,
            duration: 0.5,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w2' ).tween({
        height:{
            start: target*0.142,
            stop: 0,
            time: 0,
            duration: 0.375,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w3' ).tween({
        height:{
            start: target*0.357,
            stop: 0,
            time: 0,
            duration: 0.25,
            units: 'px',
            effect: 'linear'
        }
    });
    
    
    $( '#w4' ).tween({
        height:{
            start: target*0.43,
            stop: 0,
            time: 0,
            duration: 0.125,
            units: 'px',
            effect: 'linear'
        }
    });
    
    $.play();
}