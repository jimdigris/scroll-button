// "Появление кнопки при прокрутке"
// 16-08-2019

'use strict';

(function () {
	
	const appearsButton = document.querySelector('.appearsButton');
	
	window.onscroll = onScrollMouse;
	appearsButton.addEventListener('click', onAppearsButtonClick);
	
	function onScrollMouse () {
		if (window.pageYOffset > 100) {
			appearsButton.style.display = 'block';
			setTimeout(function (){appearsButton.style.opacity = '1';}, 300);
		} else {
			appearsButton.style.opacity= '0';
			setTimeout(function (){appearsButton.style.display = 'none';}, 200);
		}
	}
	
	function onAppearsButtonClick () {
		window.scrollTo(0,0);
	}
})();
