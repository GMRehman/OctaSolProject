/* jQuery Initialization */
$(document).ready(function(){
	// Initialize main menu
	$('.bfw_sub_lvl_2').parent('li').addClass('bfw_sub_lvl_1_item');
	
	$('li.bfw_top_lvl').hoverIntent( // jquery.hoverIntent.js plugin
		function() { $('.bfw_sub_lvl_1', this).show(); },
		function() { $('.bfw_sub_lvl_1', this).hide(); }
	);
	$('.bfw_sub_lvl_1_item').hoverIntent( // jquery.hoverIntent.js plugin
		function() { $('.bfw_sub_lvl_2', this).show(); $(this).addClass('current'); },
		function() { $('.bfw_sub_lvl_2', this).hide(); $(this).removeClass('current'); }
	);
	
	// Log in toggle
	$('#bfw_btn_log_in').click(function(){
		$('#bfw_log_in_box').toggle();
		return false;
	});
	
	// Clear search value on focus
	var defaultMessage = $('#bfw_search_text').val();
	$('#bfw_search_text').focus(function(){
		$(this).val('').css('color', '#333333');
	});
	$('#bfw_search_text').blur(function(){
		var searchText = $(this).val();
		if (searchText == ''){
			$(this).val(defaultMessage).css('color', '#999999');
		}
	});
	
	// Dynamic Bookcover Icons
	//
	// This script automatically adds media icons to the specified bookcovers.
	//
	// How to use:
	// Add a class name 'bfw_thumb' to any <img> tag in HTML to activate this script and use one of the following format types as 'title' attribute.
	//
	// Available formats:
	// as_testbank, audiovrtn, blog, cd, combbinding, download, ebook, hardback, hardcover_ie, im, looseleaf, paperback, present, prtl_class, puzzle, spiral, tradeup, transp, video, website
	//
	// Example:
	// <img class="bfw_thumb" title="ebook" src="cover.jpg" alt="Example 1" />
	// <img class="bfw_thumb" title="looseleaf" src="cover2.jpg" alt="Example 2" />
	
	var imagePath = 'resources/common/images/icons/'; // path to the icons
	
		// Call this function to dynamically add media icons to the bookcovers
		function addThumb(mediaType, coverHeight, target){
			var filename = 'thumb_media_'+mediaType+'.gif'; // icon file name
			var thumbWidth = 22;
			var thumbHeight = 23;
			var offsetX = (-thumbWidth + 3); // (icon width) + (offset amount)
			var offsetY = coverHeight + 4 - thumbHeight + 3; // (bookcover height) + (borders) - (icon height) + (offset amount)
			var thumb = new Image();
			// places media icon next to the bookcover image then adds a class name. CSS handles the positioning of the icon.
			$(thumb).insertAfter(target)
			.attr({ src: imagePath+filename, alt: mediaType, title: mediaType  })
			.addClass('bfw_thumb')
			.css({ 'width': thumbWidth+'px', 'height': thumbHeight+'px', 'margin-top': offsetY+'px', 'margin-left': offsetX+'px' });
		}
		
		// Looks for images with 'bfw_cover' class name and adds the icons
		$(window).load(function(){	
			$('img.bfw_cover').each(function(){
				var imgHeight = $(this).height(); // get height of current bookcover
				var format = $(this).attr('title');
				var selector = $(this);
				
				addThumb(format, imgHeight, selector);
			});
		});
});