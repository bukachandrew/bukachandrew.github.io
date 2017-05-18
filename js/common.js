$(function() {

	$(".arrow-b").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+10 }, "slow");
		return false;
	});
	
	var $btns = $('.btn').click(function() {
	  if (this.id == 'all') {
	    $('#parent > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#parent > div').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	})


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
