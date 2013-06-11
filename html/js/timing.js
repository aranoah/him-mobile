timeaftr = '<div class="cellparent rightTime"><div class="leftArrow"></div><div class="timeText">Time</div></div>';	
timebefor = '<div class="cellparent leftTime"><div class="timeText">Time</div><div class="rightArrow"></div></div>';
var timeout;
var enable = false;
var dir = true;

// CREDIT : http://stackoverflow.com/questions/8043026/javascript-format-number-to-have-2-digit

function n(n){
    return n > 9 ? "" + n: "0" + n;
}

// END CREDIT

$(document).ready(function(){
	
	$(document).mouseup(function (e)
	{
		var container = $("#timingDetails");
		if (container.has(e.target).length === 0)
		{
			$(".timingBox.active").removeClass('active');
		}
	});
	
	bindTiming();
	$('.timingFragmentContainer').mousedown(function(e) {
		var checker = $(this).parent().parent().parent();
		if(!checker.hasClass('active')) {
			checker.siblings('.active').removeClass('active');
			checker.addClass('active');
		}
		var code = ( e.keyCode ? e.keyCode : e.which );
		enable = true;
		if(code == 3) {
			dir = false;
		} else {
			dir = true;
		}
		e.originalEvent.preventDefault();
	}).mouseup(function() {
		enable = false;
		dir = true;
		$(".fragment.active, .fragment").off();
		bindTiming();
	}).mouseleave(function() {
		enable = false;
		bindTiming();
	});
	
});

function bindTiming() {
	$('.fragment, .fragment.active').mousemove(function() {
		if(enable) {
			if(dir == true) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		}
	}).click(function() {
		if(dir == true) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});
	$('.fragfirst').removeClass('fragfirst');
	$('.fraglast').removeClass('fraglast');
	$(".fragment").each(function() {
		if($(this).hasClass('active')){
			if(!(!$(this).prev().hasClass('active') && !$(this).next().hasClass('active'))) {
				if(!$(this).prev().hasClass('active')) {
					$(this).addClass('fragfirst');
				}
				if(!$(this).next().hasClass('active')){
					$(this).addClass('fraglast');
				}
			}
		}
	});
	$(".fragment.active").click(function(){
		if(!(!$(this).prev().hasClass('active') && !$(this).next().hasClass('active'))) {
			$(".rightTime, .leftTime").remove();
			var befor = $(this);
			var aftr = $(this);
			var befortim;
			var aftrtim;
			var i;
			for(i = $(this).index();i >=0; i--) {
				befor = befor.prev();
				if(befor.hasClass('fragfirst')) {
					break;
				}
			}
			for(i = $(this).index();i <=47; i++) {
				aftr = aftr.next();
				if(aftr.hasClass('fraglast')) {
					break;
				}
			}
			var temp = Math.floor(befor.index()/2)%12;
			befortim = (temp == 0 ? 12 : temp)+":"+n((befor.index()%2)*30)+(befor.index() > 23? "PM":"AM");
			var append = $(timebefor);
			append.children('.timeText').text(befortim);
			befor.html(append);
			append = $(timeaftr);
			temp = Math.floor(aftr.index()/2)%12;
			aftertim = (temp == 0 ? 12 : temp)+":"+n((aftr.index()%2)*30)+(aftr.index() > 23? "PM":"AM");
			append.children('.timeText').text(aftertim);
			aftr.html(append);
			timeout = setTimeout(function() {
				$(".rightTime, .leftTime").fadeOut(200, function(){$(this).remove();});
			}, 1000)
		}
	});
}