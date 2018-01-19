
define(function () {
  	var $overlay;

	var toggleOverlay = function toggleOverlay() {
		$overlay.toggle();
		$overlay.css('marginTop',$(window).scrollTop());
		var overlayVisible = $overlay.css('display')!=='none';
		if(overlayVisible){
			disableScrolling();
		} else{
			enableScrolling();
		}
	};

	var setNewOverlayImage = function setNewOverlayImage(src){
		$overlay.find('img').attr('src','');
        $overlay.find('img').attr('src',src);
	};

	var imageclickHandler = function imageclickHandler(event) {
		var img = $(event.target);
		setNewOverlayImage(img.attr('data-originsrc'));
		toggleOverlay();
	};

	var disableScrolling = function disableScrolling(){
		$('html').css({
			overflow: 'hidden',
			height: '100%'
		});
	};

	var enableScrolling = function enableScrolling(){
		$('html').css({
			overflow: 'auto',
			height: 'auto'
		});
	};

	var init = function() {
		$overlay = $('.overlay');
		$('.image-container').on('click', imageclickHandler);
		$overlay.on('click', toggleOverlay);
	};

	 return {
		 init: init 
	 }
});
