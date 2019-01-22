function scale() {
	var wrapperWidth = $('#wrapper').width()
	var wrapperHeight = $('#wrapper').height()
	var canvasWidth = 800;
	var scale = (wrapperWidth / canvasWidth);
	$('#canvas').css({ '-webkit-transform' : 'scale3d(' + scale + ',' + scale + ', 1)'});
	$('#canvas').css({ '-moz-transform' : 'scale3d(' + scale + ',' + scale + ', 1)'});
	$('#canvas').css({ '-o-transform' : 'scale3d(' + scale + ',' + scale + ', 1)'});
	$('#canvas').css({ 'transform' : 'scale3d(' + scale + ',' + scale + ', 1)'});
	$('#canvasWrap').css({ 'max-width' : wrapperWidth, 'max-height' : wrapperHeight });
}

$(document).ready(function() {

	document.addEventListener('touchstart', function(){}, true);
	$(window).bind('load resize', function() {
		scale();
	});
	
});