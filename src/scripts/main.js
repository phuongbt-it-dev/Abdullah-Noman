// Main
$(document).ready(function () {
	$(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
        $('.navbar-collapse').removeClass('show')
	});
	$(".navbar-brand").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
        $('.navbar-collapse').removeClass('show')
	});
	
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
	// Phần cmt
	$('.comment .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		loop: true,
		autoplay: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
		}
	});
	// Phần logotdk
	$('.logotdk .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			800: {
				items: 4
			}
		}
	});
});

AOS.init();

