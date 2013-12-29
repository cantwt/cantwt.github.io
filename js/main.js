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
            stop: target*0.1,
            time: 0,
            duration: 0.2,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w2' ).tween({
        height:{
            stop: target*0.2,
            time: 0,
            duration: 0.35,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w3' ).tween({
        height:{
            stop: target*0.3,
            time: 0,
            duration: 0.42,
            units: 'px',
            effect: 'linear'
        }
    });
    
    
    $( '#w4' ).tween({
        height:{
            stop: target*0.4,
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
            start: target*0.1,
            stop: 0,
            time: 0,
            duration: 0.6,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w2' ).tween({
        height:{
            start: target*0.2,
            stop: 0,
            time: 0,
            duration: 0.5,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w3' ).tween({
        height:{
            start: target*0.3,
            stop: 0,
            time: 0,
            duration: 0.35,
            units: 'px',
            effect: 'linear'
        }
    });
    
    
    $( '#w4' ).tween({
        height:{
            start: target*0.4,
            stop: 0,
            time: 0,
            duration: 0.35,
            units: 'px',
            effect: 'linear'
        }
    });
    
    $.play();
}