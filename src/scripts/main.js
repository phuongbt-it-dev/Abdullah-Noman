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
	});
	$('.stories .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		loop: true,
		navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
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

$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});

AOS.init();


$(document).keydown(function(event) {
	if (event.keyCode == 123) { // Prevent F12
		return false;
	} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
		return false;
	}
})
$(document).bind('keydown', 'f12', function(e) {
	e.preventDefault();
	return false;
});
document.onkeydown = function(e) {
	e = e || window.event; //Get event
	if (e.ctrlKey) {
		var c = e.which || e.keyCode; //Get key code
		switch (c) {
			case 83: //Block Ctrl+S
				e.preventDefault();
				e.stopPropagation();
				break;
			default:
				e.preventDefault();
				e.stopPropagation();
		}
	}
};
$(document).ready(function() {
	$('body').bind('cut copy', function(e) {
		e.preventDefault();
	});
});
$(document).ready(function() {
	$("body").on("contextmenu", function(e) {
		return false;
	});
});

