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
            duration: 10,
            units: 'px',
            effect: 'easeInOut'
        }
    }); 
    
    $( '.xp2' ).tween({
        height:{
            stop: 68,
            time: 0,
            duration: 10,
            units: 'px',
            effect: 'easeInOut'
        }
    }); 
    
    $( '.xp3' ).tween({
        height:{
            stop: 80,
            time: 0,
            duration: 10,
            units: 'px',
            effect: 'easeInOut'
        }
    });
    
    
    $( '.xp4' ).tween({
        height:{
            stop: 100,
            time: 0,
            duration: 10,
            units: 'px',
            effect: 'easeInOut'
        }
    });
    
    
    $.play();
});