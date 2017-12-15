$('.meaningtitle').hide();

$(document).ready(function(){
	
  	window.sr = ScrollReveal();
		sr.reveal('#aboutimagecontainer');
		sr.reveal('#ourworkvideorow');

	
	$('.meaningimg').mouseenter(function(event) {
		console.log('works');
        $(this).find('.meaningtitle').show();
    });

    $('.meaningimg').mouseleave(function(event) {
		console.log('works');
        $(this).find('.meaningtitle').hide();
    });
});