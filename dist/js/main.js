'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
// Main
$(document).ready(function () {
	$(".nav-link").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function () {
				window.location.hash = hash;
			});
		}
		$('.navbar-collapse').removeClass('show');
	});
	$(".navbar-brand").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function () {
				window.location.hash = hash;
			});
		}
		$('.navbar-collapse').removeClass('show');
	});

	// Phần Slider-1
	$('.slider-1 .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		loop: true
	});
	$('.stories .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		loop: true,
		navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>']
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
			}
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

$(document).keydown(function (e) {
	if (e.which === 123) {
		return false;
	}
});

AOS.init();

$(document).keydown(function (event) {
	if (event.keyCode == 123) {
		// Prevent F12
		return false;
	} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
		// Prevent Ctrl+Shift+I        
		return false;
	}
});
$(document).bind('keydown', 'f12', function (e) {
	e.preventDefault();
	return false;
});
document.onkeydown = function (e) {
	e = e || window.event; //Get event
	if (e.ctrlKey) {
		var c = e.which || e.keyCode; //Get key code
		switch (c) {
			case 83:
				//Block Ctrl+S
				e.preventDefault();
				e.stopPropagation();
				break;
			default:
				e.preventDefault();
				e.stopPropagation();
		}
	}
};
$(document).ready(function () {
	$('body').bind('cut copy', function (e) {
		e.preventDefault();
	});
});
$(document).ready(function () {
	$("body").on("contextmenu", function (e) {
		return false;
	});
});
//# sourceMappingURL=main.js.map
