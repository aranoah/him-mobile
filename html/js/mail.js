$(document).ready(function () {

	$('.mailBox').on('click', function () {
		$(".mailViewContainer").hide();
		$(".mailBox").show();
		$(this).next().toggle().animate(300);
		$(this).hide();
	});
    
	$('.button.comp').on('click', function () {
            if($(window).scrollTop() < 100 ) {
               $('#composeMail').css({"bottom":"35px", "position":"absolute"}).slideToggle(500); 
            }else{
                $('#composeMail').css({"bottom":"35px", "position":"absolute"}).slideToggle(500);
            }
        });
});