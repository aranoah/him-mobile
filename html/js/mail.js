$(document).ready(function () {

	$('.mailBox').on('click', function () {
		$(".mailViewContainer").hide();
		$(".mailBox").show();
		$(this).next().toggle().animate(300);
		$(this).hide();
	});
});