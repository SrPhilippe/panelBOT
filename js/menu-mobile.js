$(document).ready(function() {


	$(window).on("resize", function() {
		// Recebe largura atual da página
		var w = $(window).width();
		// Adiciona a classe
		if (w < 740) {
			$('#menu-left').addClass('mobile');
			$('#mobile-menu').show();
		// Remove a classe
		} else {
			$('#menu-left').removeClass('mobile');
			$('#mobile-menu').hide();
		}
	}).resize();


	$('#mobile-menu').click(function() {
		$('#menu-left.mobile').toggleClass('active');
		$('#mobile-menu').toggleClass('active');
	});


});