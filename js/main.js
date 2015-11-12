$(document).ready(function(){
	$("#one").hover(function() {
		$(".dim-one").removeClass('clear');
		$(".dim-one").addClass("dim")
		$(".one").removeClass('unactive');
		$(".one").addClass('active');
	}, function (){
		$(".dim-one").removeClass('dim');
		$(".dim-one").addClass('clear');
		$(".one").removeClass('active');
		$(".one").addClass('unactive');
	});
	$("#two").hover(function() {
		$(".dim-two").removeClass('clear');
		$(".dim-two").addClass("dim")
		$(".two").removeClass('unactive');
		$(".two").addClass('active');
	}, function (){
		$(".dim-two").removeClass('dim');
		$(".dim-two").addClass('clear');
		$(".two").removeClass('active');
		$(".two").addClass('unactive');
	});
	$("#three").hover(function() {
		$(".dim-three").removeClass('clear');
		$(".dim-three").addClass("dim")
		$(".three").removeClass('unactive');
		$(".three").addClass('active');
	}, function (){
		$(".dim-three").removeClass('dim');
		$(".dim-three").addClass('clear');
		$(".three").removeClass('active');
		$(".three").addClass('unactive');
	});
	$("#four").hover(function() {
		$(".dim-four").removeClass('clear');
		$(".dim-four").addClass("dim")
		$(".four").removeClass('unactive');
		$(".four").addClass('active');
	}, function (){
		$(".dim-four").removeClass('dim');
		$(".dim-four").addClass('clear');
		$(".four").removeClass('active');
		$(".four").addClass('unactive');
	});
	$("#five").hover(function() {
		$(".dim-five").removeClass('clear');
		$(".dim-five").addClass("dim")
		$(".five").removeClass('unactive');
		$(".five").addClass('active');
	}, function (){
		$(".dim-five").removeClass('dim');
		$(".dim-five").addClass('clear');
		$(".five").removeClass('active');
		$(".five").addClass('unactive');
	});
	$("#six").hover(function() {
		$(".dim-six").removeClass('clear');
		$(".dim-six").addClass("dim")
		$(".six").removeClass('unactive');
		$(".six").addClass('active');
	}, function (){
		$(".dim-six").removeClass('dim');
		$(".dim-six").addClass('clear');
		$(".six").removeClass('active');
		$(".six").addClass('unactive');
	});
});
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing');
	});

});
});