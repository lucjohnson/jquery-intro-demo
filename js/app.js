/* app.js
* main script file for our little application
* */

"use strict";

//select all navigation links
var allNavLinks = $('nav a');

//select all images
var allImages = $('img');

//select all sections
var allSections = $('section');

function onReady() {
	
	//$('nav').slideUp(2000);
	//$('nav').slideDown();
	allSections.hide();

}

$('#exit-button').click(function() {
	//show the modal to the world
	$('#confirm-exit-modal').modal();
});

$('#confirm-exit-button').click(function() {
	//user clicked yes button
	window.location.href = 'http://courses.washington.edu/info343/morris';
});

allImages.hover(function() {
	//console.log($(this));
	$(this).addClass('awesomesauce');
});

allImages.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

allNavLinks.click(function() {
	//the cooler jQuery 'this' it's totally money
	console.log($(this).attr('href'));

	//the plain version of 'this'... it's ok.
	console.log(this);
	
	//acts on the jQuery object containing this object
	
	allSections.hide();
	$($(this).attr('href')).fadeToggle(1000).addClass('awesomesauce');
});

$(onReady);