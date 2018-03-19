$(document).ready(function() {


//Prevent the page jumping when the anchor is clicked

$('a').on('click', function(event) {
	event.preventDefault();
});

//If a user clicks "Read More" on the primary column

$('.readmore').on('click', function() {
	// content slides down
  	$('#show-this-on-click').slideDown();
  	//Read more becomes Read Less
  	$('.readless').show();
  	$('.readmore').hide();

});

//if a user clicks the "Learn More" link in the sidebar
$('.learnmore').on('click', function() {
	// content slides down
	$('p span').slideDown();
	//Learn More hides
	$('.learnmore').hide();
});

});