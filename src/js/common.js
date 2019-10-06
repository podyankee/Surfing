$(document).ready(function() {
	const headerSlider = $(".owl-carousel");

	headerSlider.on('initialized.owl.carousel', function(e) {

		$('.slide-controls-number__active').text(e.item.index + 1);
		$('.slide-controls-number__total').text(e.item.count);
	});

	headerSlider.owlCarousel({
		items: 1,
		dots: false,
		smartSpeed: 1000
	});
	$('#headerSliderLeft').click(function() {
		headerSlider.trigger('prev.owl.carousel')
	});
	$('#headerSliderRight').click(function() {
		headerSlider.trigger('next.owl.carousel')
	});

	headerSlider.on('changed.owl.carousel', function(e) {

	$('.slide-controls-number__active').text(e.item.index + 1);
	$('.slide-controls-number__total').text(e.item.count);
	});

	});
