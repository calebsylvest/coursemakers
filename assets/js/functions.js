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
	
	});

})(window.jQuery);