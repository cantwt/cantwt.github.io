$( document ).ready(function() {
    $( "li" ).click(function( event ) {
        event.preventDefault();
        $( this ).hide( "slow" );
    });
    
    h1 = $( '.xp1' ).css('height');
    h2 = $( '.xp2' ).css('height');
    h3 = $( '.xp3' ).css('height');
    h4 = $( '.xp4' ).css('height');
    
    $( '#w1' ).tween({
        height:{
            start: 0,
            stop: 5,
            time: 0,
            duration: 0.6,
            units: '%',
            effect: 'linear'
        }
    }); 
    
    $( '#w2' ).tween({
        height:{
            start: 0,
            stop: 10,
            time: 0.16,
            duration: 0.5,
            units: '%',
            effect: 'linear'
        }
    }); 
    
    $( '#w3' ).tween({
        height:{
            start: 0,
            stop: 30,
            time: 0.32,
            duration: 0.35,
            units: '%',
            effect: 'linear'
        }
    });
    
    
    $( '#w4' ).tween({
        height:{
            start: 0,
            stop: 40,
            time: 0.48,
            duration: 0.35,
            units: '%',
            effect: 'linear'
        }
    });
    
    
    $.play();
    
    $( '#w1' ).tween({
        height:{
            start: 5,
            stop: 0,
            time: 3,
            duration: 0.6,
            units: '%',
            effect: 'linear'
        }
    }); 
    
    $( '#w2' ).tween({
        height:{
            start: 10,
            stop: 0,
            time: 3,
            duration: 0.5,
            units: '%',
            effect: 'linear'
        }
    }); 
    
    $( '#w3' ).tween({
        height:{
            start: 30,
            stop: 0,
            time: 3,
            duration: 0.35,
            units: '%',
            effect: 'linear'
        }
    });
    
    
    $( '#w4' ).tween({
        height:{
            start: 40,
            stop: 0,
            time: 3,
            duration: 0.35,
            units: '%',
            effect: 'linear'
        }
    });
    
    $.play();
});