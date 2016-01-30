$( function() {
	var audio = new Audio('imperial_march.mp3');

	$( 'form' ).submit( function( e ) {
		var checked = $( ':checked', this );

		if ( checked.length && !checked.not( '[value=dark_side]' ).length ) {
			audio.currentTime = 0;
			audio.play();
			e.preventDefault();
		}
	 } );
} );
