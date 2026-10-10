$(document).ready(function () {
	$("#values-carousel").carouFredSel({
		items: {
			width: null
		},
		responsive: true,
		auto: {
			timeoutDuration: 5000
		},
		swipe: {
			onTouch: true
		}
	});


	function glowPhoneScreen(id, interval) {
		var fadeInterval = 2000;
		$(id).fadeToggle(fadeInterval);

		window.setInterval(function () {
			$(id).fadeToggle(fadeInterval);
		}, interval);
	}

	$(".white-screen-1-hover-area").hover(function () {
	});

	$(".white-screen-2-hover-area").hover(function () {
	});

	$(".white-screen-3-hover-area").hover(function () {
	});

	$(".white-screen-4-hover-area").hover(function () {
	});

	glowPhoneScreen("#white-screen-1", 2000);
	glowPhoneScreen("#white-screen-2", 2100);
	glowPhoneScreen("#white-screen-3", 2200);
	glowPhoneScreen("#white-screen-4", 1900);

});