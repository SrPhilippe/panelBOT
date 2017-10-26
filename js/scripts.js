$(document).ready(function() {

	// Mostra a página inicial
	$('.page0').fadeIn(1000);

	// Carrega documento dos comandos
	$('.page.normal.commands ul.list').load('commands.html');

	$('.action.page').each(function(index, el) {
		$(el).click(function() {
			$('.action').removeClass('active');
			$('#main .page').slideUp();
			$('.page.normal.page' + index).slideDown();
			$(el).addClass('active');
		});
	});

	$('.action.bot').each(function(index, el) {	
		$(el).click(function() {
			$('.action').removeClass('active');
			$('#main .page').slideUp();
			$('.page.bot.page'+ index).slideDown();
			$(el).addClass('active');
		});
	});

	$('.action.bot').each(function(index, el) {
		$('#main').append('<div class="page bot page' + index + '"></div>');
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