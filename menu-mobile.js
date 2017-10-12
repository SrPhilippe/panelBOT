$(document).ready(function() {

	var deviceWidth = $(window).width();

	if (deviceWidth < 480) {
		$('#menu-left').addClass('mobile');
		$('#mobile-menu').show();
	} else {
		$('#menu-left').removeClass('mobile');
		$('#mobile-menu').hide();
	}


	$('#mobile-menu').click(function() {
		$('#menu-left.mobile').toggleClass('active');
		$('#mobile-menu').toggleClass('active');
	});


});