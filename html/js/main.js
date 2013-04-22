$(document).ready(function () {

	var int;

	$('#tickerUp').on('click', function () {
		clearInterval(int);
		int = null;
		
		int = setInterval(function () {
			$('#tickerUp').trigger('click');
		}, 1500);


		var margin = $('#tick').css('margin-top').replace('px', '');
		var number = $('.tick').length;
		number = (number - 1) * (-50) + 10;
		if (margin > number) {
			$('#tick').animate({ marginTop: '-=50' }, 100);
		} else {
			$('#tick').animate({ marginTop: 10 }, 200);
		}

	});

	int = setInterval(function () {
		$('#tickerUp').trigger('click');
	}, 1500);

	$('#tickerDown').on('click', function () {
		clearInterval(int);
		int = null;
		
		int = setInterval(function () {
			$('#tickerUp').trigger('click');
		}, 1500);

		var margin = $('#tick').css('margin-top').replace('px', '');
		var number = $('.tick').length;
		number = (number - 1) * -50 + 10;

		if (margin < 10) {
			$('#tick').animate({ marginTop: '+=50' }, 100);
		} else {
			$('#tick').animate({ marginTop: number }, 200);
		}

	});
});