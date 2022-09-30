$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".sub").slideToggle("fast");

	$('nav ul li.no-on').each(function(index, el) {
		var subID = el.id.split('-')[1];
		$('.sub#' + subID).hide();
	});
});

$('nav').delegate('.no-on', 'click', function(event) {
	var pilihSub = this.id.split('-')[1];
	console.log(pilihSub);
	document.location.hash = pilihSub;

	$('.sub:visible').fadeOut('slow', function() {
		$('.sub#' + pilihSub).fadeIn('slow');
	});

	var $this = $(this);
	$this.removeClass('no-on').addClass("on");
    $this.siblings().addClass('no-on').removeClass('on');

    });
});