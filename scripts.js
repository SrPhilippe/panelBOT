
$(document).ready(function() {

	// Mostra a página inicial
	$('.page.home').fadeIn(1000);

	// Ao clicar no elemento com classe 'action', executa a função (menuSelect)
	$('.action').on('click', menuSelect);

});


function menuSelect() {

	if ($(this).hasClass('home')) {

		$('.page').slideUp();
		$('.page.home').slideDown();
	}

	else if ($(this).hasClass('bots')) {

		$('.page').slideUp();
		$('.page.bots').slideDown();
	}

	else if ($(this).hasClass('execution-details')) {

		$('.page').slideUp();
		$('.page.execution-details').slideDown();
	}

	else { alert("Este item não possuí uma classe para o redirecionamento atribuída"); }
}