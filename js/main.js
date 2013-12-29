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
    var height = $cont.offset().top + $cont.height();
    
    $( '#hook' ).text( height );
});


function anim() {
    $( '#w1' ).tween({
        height:{
            stop: 40,
            time: 0,
            duration: 0.2,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w2' ).tween({
        height:{
            stop: 60,
            time: 0,
            duration: 0.35,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w3' ).tween({
        height:{
            stop: 100,
            time: 0,
            duration: 0.42,
            units: 'px',
            effect: 'linear'
        }
    });
    
    
    $( '#w4' ).tween({
        height:{
            stop: 1798,
            time: 0,
            duration: 0.5,
            units: 'px',
            effect: 'linear'
        }
    });
    
    
    $( '#w1' ).tween({
        height:{
            start: 40,
            stop: 0,
            time: 2,
            duration: 0.6,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w2' ).tween({
        height:{
            start: 60,
            stop: 0,
            time: 2,
            duration: 0.5,
            units: 'px',
            effect: 'linear'
        }
    }); 
    
    $( '#w3' ).tween({
        height:{
            start: 100,
            stop: 0,
            time: 2,
            duration: 0.35,
            units: 'px',
            effect: 'linear'
        }
    });
    
    
    $( '#w4' ).tween({
        height:{
            start: 1798,
            stop: 0,
            time: 2,
            duration: 0.35,
            units: 'px',
            effect: 'linear'
        }
    });
    
    
    $.play();
}