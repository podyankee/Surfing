$(document).ready(function() {
	const headerSlider = $("#headerSlider");
	const shopSlider = $("#shopSlider");

	headerSlider.on('initialized.owl.carousel', function(e) {

		$('.slide-controls-number__active').text(e.item.index + 1);
		$('.slide-controls-number__total').text(e.item.count);
	});

	headerSlider.owlCarousel({
		items: 1,
		dots: false,
		smartSpeed: 2000
	});
	shopSlider.owlCarousel({
		items: 3,
		//loop: true,
		dots: false,
		smartSpeed: 5000,
		margin: 2
	});
	$('#headerSliderLeft').click(function() {
		headerSlider.trigger('prev.owl.carousel');
	});
	$('#headerSliderRight').click(function() {
		headerSlider.trigger('next.owl.carousel');
	});
	$('#shopSliderLeft').click(function() {
		shopSlider.trigger('prev.owl.carousel');
	});
	$('#shopSliderRight').click(function() {
		shopSlider.trigger('next.owl.carousel');
	});

	headerSlider.on('changed.owl.carousel', function(e) {

	$('.slide-controls-number__active').text(e.item.index + 1);
	$('.slide-controls-number__total').text(e.item.count);
	});

	});
