
$(document).ready(function() {

	currentPage = 'bots';
	atualPage();

	// Mostra a página inicial
	$('.page.bots').fadeIn(1000);

	// Ao clicar no elemento com classe 'action', executa a função (menuSelect)
	$('.action').click(menuSelect);

});


function menuSelect() {

	if ($(this).hasClass('home')) {

		$('.page').slideUp();
		$('.page.home').slideDown();
		currentPage = 'home';
		atualPage();
	}

	else if ($(this).hasClass('bots')) {

		$('.page').slideUp();
		$('.page.bots').slideDown();
		currentPage = 'bots';
		atualPage();
	}

	else if ($(this).hasClass('execution-details')) {

		$('.page').slideUp();
		$('.page.execution-details').slideDown();
	}

	else { alert("Este item não possuí uma classe para o redirecionamento atribuída"); }
}

function atualPage() {

	if ($('.action').hasClass(currentPage)) {
		$('.action').removeClass('active');
		$('.'+ currentPage).addClass('active');
	}
}