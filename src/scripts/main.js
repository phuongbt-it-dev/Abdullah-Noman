// Main
$(document).ready(function() {
    // Phần cmt
    $('.comment .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        // autoplay: true,
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
            800: {
                items: 4
            }
        }
    });
});