//FUNCTIONS
function retinaCheck() {
	if(window.devicePixelRatio >= 2) {
    $('.main-img').attr("src", "http://localhost:8888/blog/wp-content/themes/blog/images/forest-trees-path-moss-@2x.jpg");
  }
}
function blogTitlePosition() {
	$.each( $('.title-container'), function() {
  	var thisHeight = $(this).height();
  	var marginMinus = (thisHeight / 2) * -1;
  	$(this).css('margin-top', marginMinus);
	});
}
function setBlogImgSize() {
	$('.blog-container .post img').attr({'width': '1000', 'height': 'auto'})
}
function imageMediaQueries() {
	if ($(window).width() < 1200) {
		$('.main-img').attr({'width': '960', 'height': 'auto'})
		$('.blog-container .post img').attr({'width': '960', 'height': 'auto'})
	}
	if ($(window).width() < 980) {
		$('.main-img').attr({'width': '768', 'height': 'auto'})
		$('.blog-container .post img').attr({'width': '960', 'height': 'auto'});
		$('.blog-item-container .post img').attr({'width': '300', 'height': 'auto'});
	}
	if ($(window).width() < 768) {
		$('.main-img').attr({'width': '100%', 'height': 'auto'})
		$('.blog-container .post img').attr({'width': '100%', 'height': 'auto'})
	}
	// if ($(window).width() < 480) {
	// 	$('.main-img').attr({'width': '100%', 'height': 'auto'})
	// 	$('.blog-container .post img').attr({'width': '960', 'height': 'auto'})
	// }
	if ($(window).width() > 1200) {
		$('.main-img').attr({'width': '1170', 'height': 'auto'})
		$('.blog-container .post img').attr({'width': '1000', 'height': 'auto'})
	}
	if ($(window).width() > 980) {
		$('.main-img').attr({'width': '960', 'height': 'auto'})
		$('.blog-container .post img').attr({'width': '960', 'height': 'auto'})
		$('.blog-item-container .post img').attr({'width': '400', 'height': 'auto'});
	}
	if ($(window).width() > 768) {
		$('.main-img').attr({'width': '768', 'height': 'auto'})
		$('.blog-container .post img').attr({'width': '100%', 'height': 'auto'})
	}
}
//DOCUMENT READY
$( document ).ready(function() {
    retinaCheck();
    blogTitlePosition();
    setBlogImgSize();
    imageMediaQueries();

    //Event Listeners

    //post hover
    $('.blog-item-container .post').on('mouseenter', function() {
    	if ($(window).width() > 768) {
	    	$(this).stop().transition({
	    											'-webkit-box-shadow': '0 0 20px black', 
														'-moz-box-shadow': '0 0 20px black', 
														'box-shadow': '0 0 20px black',
	    										}, {duration:300, queue: false});
	    	var titleContainer = $(this).find('.title-container');
	    	$(titleContainer).stop().transition({scale: 1.05}, {duration:300, queue: false});
	    }
    });
    $('.blog-item-container .post').on('mouseleave', function() {
    	if ($(window).width() > 768) {
	    	$(this).stop().transition({
	    											'-webkit-box-shadow': 'none', 
														'-moz-box-shadow': 'none', 
														'box-shadow': 'none',
	    										}, {duration:300, queue: false});
	    	var titleContainer = $(this).find('.title-container');
	    	$(titleContainer).stop().transition({scale: 1}, {duration:300, queue: false});
	    }
    });

    //nav item hover
    $('.nav-bar li').on('mouseenter', function() {
    	if ($(window).width() > 768) {
    		$(this).stop().transition({'color': 'gray'}, {duration: 300})
    	}
    })
    $('.nav-bar li').on('mouseleave', function() {
    	if ($(window).width() > 768) {
    		$(this).stop().transition({'color': 'black'}, {duration: 300});
    	}
    })
    if($(window).width() > 480) {
	    var $grid = $('.blog-item-container').masonry({
		  	// options...
		  	"isFitWidth": true,
		  	itemSelector: '.blog-item-container .post',
			});
		// layout Masonry after each image loads
		$grid.imagesLoaded().progress( function() {
		  $grid.masonry('layout');
		});

  	}
}); // end document ready

$( window ).resize(function() {
  imageMediaQueries();
  if($(window).width() > 480) {
    $('.blog-item-container').masonry({
	  	// options...
	  	"isFitWidth": true,
	  	itemSelector: '.blog-item-container .post',
		});
	}
});