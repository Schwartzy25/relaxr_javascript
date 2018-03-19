$(document).ready(function() {


//Prevent the page jumping when the anchor is clicked

$('a').on('click', function(event) {
	event.preventDefault();
});

//Select the appropriate DOM elements with CSS selectors upon a user's click using the $.click() handler

//If a user clicks "Read More" on the primary column

$('.readmore').on('click', function() {
	// content slides down
  	$('#show-this-on-click').slideDown();
  	//Read more becomes Read Less
  	$('.readless').show();
  	$('.readmore').hide();

});

//if a user clicks the "Learn More" link in the sidebar, have the <span> inside that <p> slide down and hide the "Learn More" link using $.slideDown() and $.hide()
$('.learnmore').on('click', function() {
	// content slides down
	$('p span').slideDown();
	//Learn More hides
	$('.learnmore').hide();
});

});