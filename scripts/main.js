(function($){

	"use strict";

	$(document).ready(function() {
        angular.bootstrap(document, ['app'])

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
				$('.hi .detail')
					.typeTo("我是王然，这是我的个人简历。页面正在施工中，你可以随便看看，也欢迎稍后再来！");
            });
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

    });

})(jQuery);
