// Main
$(document).ready(function () {
	// Phần Slider-1
	$('.slider-1 .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		loop: true,
		// navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		// responsive: {
		// 	// breakpoint from 480 up
		// 	480: {
		// 		items: 2,
		// 	},
		// 	// breakpoint from 768 up
		// 	768: {
		// 		items: 4,
		// 	},
		// 	// breakpoint from 992 up
		// 	992: {
		// 		items: 6,
		// 	}
		// }
	});
	$('.stories .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		loop: true,
		navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
		// responsive: {
		// 	// breakpoint from 480 up
		// 	480: {
		// 		items: 2,
		// 	},
		// 	// breakpoint from 768 up
		// 	768: {
		// 		items: 4,
		// 	},
		// 	// breakpoint from 992 up
		// 	992: {
		// 		items: 6,
		// 	}
		// }
	});
});
