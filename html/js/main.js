$(document).ready(function () {

	$('#tickerUp').on('click', function () {
		var margin = $('#tick').css('margin-top').replace('px', '');
		var number = $('.tick').length;
		number = (number - 1) * (-50) + 10;
		if (margin > number) {
			$('#tick').css({ marginTop: '-=50' });
		} else {
			$('#tick').css({ marginTop: 10 });
		}

	});

	setInterval(function () {
		$('#tickerUp').trigger('click');
	}, 1500);

	$('#tickerDown').on('click', function () {
		var margin = $('#tick').css('margin-top').replace('px', '');
		var number = $('.tick').length;
		number = (number - 1) * -50 + 10;

		if (margin < 10) {
			$('#tick').css({ marginTop: '+=50' });
		} else {
			$('#tick').css({ marginTop: number });
		}

	});
});