$(document).ready(function(){

	$('.abt').click(function() {
		$('html, body').animate({
			scrollTop: $('.about').offset().top -20
		}, 2000);
	});

	$('.wrk').click(function() {
		$('html, body').animate({
			scrollTop: $('.work').offset().top -80
		}, 2000);
	});

	$('.ctc').click(function() {
		$('html, body').animate({
			scrollTop: $('.contact').offset().top -80
		}, 3000);
	});

	$('.arrow').click(function() {
		$('html, body').animate({
			scrollTop: $('header').offset().top -80
		}, 3000);
	});

});