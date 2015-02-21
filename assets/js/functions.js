// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// listen for click of email signup button. two buttons on page.
		$('.email-signup-button').click(function() {
			$(this).addClass("active"); // add class to button when clicked
			$(this).siblings('.email-signup-submit').addClass("show"); // add class to submit button
			$(this).attr('placeholder','Email Address...'); // change text in input field
		});

		// smooth scroll to hash points
		/*$(function() {
			$('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
		});*/
	
	});

})(window.jQuery);