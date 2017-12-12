$('.meaningtitle').hide();

$(document).ready(function(){
  	window.sr = ScrollReveal();
		sr.reveal('#aboutimagecontainer');
		sr.reveal('#ourworkvideorow');

	
	$('.meaningimg').hover(function () {
		console.log('works');
        $('.meaningtitle').slideToggle("slow");
    });
});