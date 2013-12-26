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
            stop: 50,
            time: 0,
            duration: 0.6,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w2' ).tween({
        height:{
            stop: 68,
            time: 0.16,
            duration: 0.5,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w3' ).tween({
        height:{
            stop: 80,
            time: 0.32,
            duration: 0.35,
            units: 'px',
            effect: 'linear'
        }
    });
    
    
    $( '#w4' ).tween({
        height:{
            start: 0,
            stop: 20,
            time: 0,
            duration: 0.25,
            units: '%',
            effect: 'linear'
        }
    });
    
    
    //$.play();
});