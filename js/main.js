$( document ).ready(function() {
    $( "li" ).click(function( event ) {
        event.preventDefault();
        $( this ).hide( "slow" );
    });
    
    h1 = $( '.xp1' ).css('height');
    h2 = $( '.xp2' ).css('height');
    h3 = $( '.xp3' ).css('height');
    h4 = $( '.xp4' ).css('height');
    
    $( '.xp1' ).tween({
        height:{
            stop: 50,
            time: 0,
            duration: 0.8,
            units: 'px',
            effect: 'quadIn'
        }
    }); 
    
    $( '.xp2' ).tween({
        height:{
            stop: 68,
            time: 0,
            duration: 0.8,
            units: 'px',
            effect: 'quadIn'
        }
    }); 
    
    $( '.xp3' ).tween({
        height:{
            stop: 80,
            time: 0,
            duration: 0.8,
            units: 'px',
            effect: 'quadIn'
        }
    });
    
    
    $( '.xp4' ).tween({
        height:{
            stop: 100,
            time: 0,
            duration: 0.8,
            units: 'px',
            effect: 'quadIn'
        }
    });
    
    
    $.play();
});