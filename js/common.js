$(document).ready(function() {
	$(".toggle-menu").click(function(e){
		e.preventDefault();
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});
	$(".main-footer .toggle-menu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});
	$(".arrow-b").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
		return false;
	});
	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	$(".section_1 .section-content .info-item-wrap").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".s2-item").equalHeights();
	$(".s2-item .img-wrap").equalHeights();
	$(".section_3 .section-content .info-item").equalHeights();

	$(".section_4").waypoint(function() {

		$(".section_4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});
	var waypointsvg = new Waypoint({

		element: $(".section_5"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section_5 .tc-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".tc-content").addClass("tc-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

	$(".section_6").waypoint(function() {

		$(".section_6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-off").addClass("team-on");
			}, 200*index);
		});

	}, {
		offset : "35%"
	});
	
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});
	$(".section-head h2, .section-head p").animated("fadeIn");
	$(".info-item-wrap").animated("zoomIn");
	$(".slider .slide").animated("fadeIn");
	$(".homesect.section_8 .forms").animated("fadeInRight");
	$(".homesect.section_8 .p").animated("fadeIn");

	$(".section_2").waypoint(function() {
		$(".s2-item-wrap").each(function(index) {
			var ths = $(this);
				setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	$(".section_8").waypoint(function() {
		$(".s8-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	$(".homesect .section-bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});
	
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});
});
