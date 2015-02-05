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

		// faux tooltip menu bold button
		$('.bold-button').click(function() {
			$('.bold-button').toggleClass("active");
			$('.example-highlight').toggleClass("bold");			
		});

		// faux tooltip menu italic button
		$('.italic-button').click(function() {
			$('.italic-button').toggleClass("active");
			$('.example-highlight').toggleClass("italic");
		});

		// faux tooltip menu underline button
		$('.underline-button').click(function() {
			$('.underline-button').toggleClass("active");
			$('.example-highlight').toggleClass("underline");
		});
	
	});

})(window.jQuery);