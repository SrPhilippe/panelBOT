
$(document).ready(function() {

	currentPage = 'bot1';
	atualPage();

	// Mostra a página inicial
	$('.page.bot1').fadeIn(1000);

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

	else if ($(this).hasClass('bot1')) {

		$('.page').slideUp();
		$('.page.bot1').slideDown();
		currentPage = 'bot1';
		atualPage();
	}

	else { alert("Este item não possuí uma classe para o redirecionamento atribuída"); }
}

function atualPage() {

	if ($('.action').hasClass(currentPage)) {
		$('.action').removeClass('active');
		$('.'+ currentPage).addClass('active');
	}
}