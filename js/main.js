$(document).ready(function(){
	
  	window.sr = ScrollReveal();
		sr.reveal('#aboutimagecontainer');
		sr.reveal('#ourworkvideorow');

	
	$("#aboutuslink").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutus").offset().top
    }, 2000);
});

	$("#ourworklink").click(function() {
    $('html, body').animate({
        scrollTop: $("#ourwork").offset().top
    }, 2000);
});

	$("#contactuslink").click(function() {
    $('html, body').animate({
        scrollTop: $(".contactus").offset().top
    }, 2000);
});

});