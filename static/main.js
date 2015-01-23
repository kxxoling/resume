(function($){

	"use strict";

	$(document).ready(function() {

		//	FastClick

	    FastClick.attach(document.body);

		//	Smooth scroll

		try {
	        $.browserSelector();
	          if($("html").hasClass("chrome" || "opera")) {
	            $.smoothScroll();
	          }
	    } catch(err) {}

	    //	Text rotator

	    $(".occupation").Morphext({
		    animation: "fadeIn",
		    separator: ",",
		    speed: 2500
		});

		// Preloader
      	$(window).load(function() {
      		$(".preloader").fadeOut("slow", function(){
      			$("#resume, #blog, #portfolio, #contact").removeClass("absolute");
      			$(".preloader-left").addClass("slide-left");
      			$(".preloader-right").addClass("slide-right");
      			//	Typerjs function - Edit the sentences below
/*
				$('.hi .detail')
					.typeTo("I'm Katya. Front-end developer based on Saint Petersburg, Russia. While not coding, i love to play guitar and read comic books.");
*/
      		});
		});

	    //	Features animation function

	    $("#profile .expand, #profile .expand-profile").on("click", function() {
			$("#profile").toggleClass("full-height").removeClass("profile");
			$("#profile .expand").hide();
		});

		$("#profile .expand-profile").on("click", function() {
			$("#profile").addClass("profile");
			$("#profile .expand").show();
		});

		$("#resume .expand").on("click", function() {
			$("#resume").toggleClass("full").toggleClass("full-height");
			$("#blog, #portfolio, #contact").toggleClass("zero").toggleClass("zero-height");
			$("#profile").toggleClass("profile-off");
			$(this).hide();
		});

		$("#resume .close-icon").on("click", function() {
			$("#resume .expand").show();
			$(this).hide();
		});

		$("#blog .expand").on("click", function() {
			$("#blog").toggleClass("full").toggleClass("full-height");
			$("#resume, #portfolio, #contact").toggleClass("zero").toggleClass("zero-height");
			$("#profile").toggleClass("profile-off");
			$(this).hide();
		});

		$("#blog .close-icon").on("click", function() {
			$("#blog .expand").show();
			$(this).hide();
		});

		$("#portfolio .expand").on("click", function() {
			$("#portfolio").toggleClass("full").toggleClass("full-height");
			$("#resume, #blog, #contact").toggleClass("zero").toggleClass("zero-height");
			$("#profile").toggleClass("profile-off");
			$(this).hide();
		});

		$("#portfolio .close-icon").on("click", function() {
			$("#portfolio .expand").show();
			$(this).hide();
		});

		$("#contact .expand").on("click", function() {
			$("#contact").toggleClass("full").toggleClass("full-height");
			$("#resume, #blog, #portfolio").toggleClass("zero").toggleClass("zero-height");
			$("#profile").toggleClass("profile-off");
			$(this).hide();
		});

		$("#contact .close-icon").on("click", function() {
			$("#contact .expand").show();
			$(this).hide();
		});

		//	Skill bars function

		function skillBars() {
		$('.skill-bar-bg').each(function() {
			 var skillBarBg = $(this);
			 skillBarBg.find('.skill-bar').css('width', skillBarBg.attr('data-percent') + '%' );
			});
		}

		skillBars();

		// owl carousel function

        $("#carousel-container").owlCarousel({
          	autoPlay : 3000,
		    slideSpeed : 300,
		    paginationSpeed : 300,
		    singleItem: true
        });

		//	Masonry function

		var masCon = jQuery("#masonry-container");
			masCon.masonry({
		  		columnWidth: 0,
		  		itemSelector: ".masonry-item"
			});

		//	Shuffle function

		masCon.shuffle({
			itemSelector: ".masonry-item" // the selector for the items in the grid
		});

		$('#filter a').click(function (e) {
			e.preventDefault();

			$('#filter a').removeClass('active');
			$(this).addClass('active');

			var groupName = $(this).attr('data-group');

			masCon.shuffle('shuffle', groupName);
		});

		//	CSS Correct

		var dateHeight = $(".date").outerHeight();
		$(".blog-title").css("min-height", dateHeight);

		// Ajax contact function

		$(":input[placeholder]").each (function () {
		    var input = $(this);
		    input.addClass("placeholder");
		    input.val(input.attr("placeholder"));

		    $(this).focus(function() {
		      	var input = $(this);
		      	if (input.val() == input.attr("placeholder")) {
		        	input.val("");
		        	input.removeClass("placeholder");
		      	}
		    });

		    $(this).blur(function() {
		      	var input = $(this);
		      	if (input.val() == "" || input.val() == input.attr("placeholder")) {
			        input.addClass("placeholder");
			        input.val(input.attr("placeholder"));
		      	}
		    });
		});
    });

})(jQuery);
