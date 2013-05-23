$(document).ready(function () {

	var int;
	
	var local = $("#location").val();

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
	
	$("#location").focus(function() {
		$(this).val("");
	}).blur(function() {
		if($(this).val() == "") {
			$(this).val(local);
		}
	});
	
	// PLACEHOLDER FIX
	// CREDITS : http://webdesignerwall.com/demo/html5-placeholder-text/
	
	if (!Modernizr.input.placeholder) {

	    $('[placeholder]').focus(function () {
	        var input = $(this);
	        if (input.val() == input.attr('placeholder')) {
	            input.val('');
	            input.removeClass('placeholder');
	        }
	    }).blur(function () {
	        var input = $(this);
	        if (input.val() == '' || input.val() == input.attr('placeholder')) {
	            input.addClass('placeholder');
	            input.val(input.attr('placeholder'));
	        }
	    }).blur();
	    $('[placeholder]').parents('form').submit(function () {
	        $(this).find('[placeholder]').each(function () {
	            var input = $(this);
	            if (input.val() == input.attr('placeholder')) {
	                input.val('');
	            }
	        })
	    });

	}

	$('#cart').on('click', function () {
		$('.cartContainer').slideToggle(500);
	});
	
});