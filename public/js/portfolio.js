'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

}

function popup(e) {
	var popupImg = document.getElementById("imgPopup");
	popupImg.src = e.getAttribute("data-imgSrc");
	var popupImgWidth = popupImg.width;
	
	if (popupImgWidth > 1000 || popupImgWidth == 0) {
		popupImgWidth = 1000;
	}

	$('#myModalImg').find('.modal-dialog').css({
		width: popupImgWidth
	});
}
