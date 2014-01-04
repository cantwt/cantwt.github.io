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
    
    animate();
});


function coverAnim(targetURL) {
    var $w = $(window);
    var target = $w.height() + $w.scrollTop() - 100;
    
    var $w1 = $( '#w1' );
    var $w2 = $( '#w2' );
    var $w3 = $( '#w3' );
    var $w4 = $( '#w4' );
    
    var tween1 = new TWEEN.Tween( {h: $w1.css('min-height')} )
        .to( { h: target*0.071 }, 200 )
        .easing( TWEEN.Easing.Linear.None )
        .onUpdate( function() {
            $w1.css('height', this.h+'px');
        } )
        .start();
    
    var tween2 = new TWEEN.Tween( {h: $w2.css('min-height')} )
        .to( { h: target*0.142 }, 200 )
        .delay( 100 )
        .easing( TWEEN.Easing.Linear.None )
        .onUpdate( function() {
            $w2.css('height', this.h+'px');
        } )
        .start();
    
   var tween3 = new TWEEN.Tween( {h: $w3.css('min-height')} )
        .to( { h: target*0.357 }, 200 )
        .delay( 200 )
        .easing( TWEEN.Easing.Linear.None )
        .onUpdate( function() {
            $w3.css('height', this.h+'px');
        } )
        .start();
    
    
    var tween4 = new TWEEN.Tween( {h: $w4.css('min-height')} )
        .to( { h: target*0.43 }, 200 )
        .delay( 300 )
        .easing( TWEEN.Easing.Linear.None )
        .onUpdate( function() {
            $w4.css('height', this.h+'px');
        } )
        .onComplete( function () {
            $( '#content' ).load(targetURL, function(){
                setTimeout( function(){
                    revealAnim( target );
                }, 100);
            });
        })
        .start();
}

function revealAnim(target){
    var $w1 = $( '#w1' );
    var $w2 = $( '#w2' );
    var $w3 = $( '#w3' );
    var $w4 = $( '#w4' );
    
    var tween1 = new TWEEN.Tween( { h: target*0.071 } )
        .to( {h: parseInt($w1.css('min-height'))}, 200 )
        .easing( TWEEN.Easing.Linear.None )
        .onUpdate( function() {
            $w1.css('height', this.h+'px');
        } )
        .start();

    var tween2 = new TWEEN.Tween( { h: target*0.142 } )
        .to( {h: parseInt($w2.css('min-height'))}, 200 )
        .delay( 100 )
        .easing( TWEEN.Easing.Linear.None )
        .onUpdate( function() {
            $w2.css('height', this.h+'px');
        } )
        .start();
    
    var tween3 = new TWEEN.Tween( { h: target*0.357 } )
        .to( {h: parseInt($w2.css('min-height'))}, 200 )
        .delay( 200 )
        .easing( TWEEN.Easing.Linear.None )
        .onUpdate( function() {
            $w3.css('height', this.h+'px');
        } )
        .start();
    
    
   var tween4 = new TWEEN.Tween( { h: target*0.43 } )
        .to( {h: parseInt($w2.css('min-height'))}, 200 )
        .delay( 300 )
        .easing( TWEEN.Easing.Linear.None )
        .onUpdate( function() {
            $w4.css('height', this.h+'px');
        } )
        .start();
}

function animate() {
    requestAnimationFrame( animate );
	TWEEN.update();
}