$(document).ready(function() {

	// Mostra a página inicial
	$('.page0').fadeIn(1000);

	$('.action').each(function(index, el) {
		$(el).click(function() {
			$('.action').removeClass('active');
			$('.page').slideUp();
			$('.page'+ index).slideDown();
			$(el).addClass('active');
		});
	});

	$('.action.bot').each(function(index, el) {
		$('#main').append('<div class="page page' + (index + 1) + ' bot"></div>');
	});

	$('.page.bot').load('content.html');


	// Mostrar modal
	$(document).on('click', '.buttons .edit', function() {
		$('.modal').addClass('active');
	})
	
	// Ocultar modal
	$(document).on('click', '.modal', function() {
		$('.modal').removeClass('active');
	});

});