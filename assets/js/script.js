/* Author: 

*/

console.log('connect');

// tabs

function tabs() {
	let tabs = document.querySelectorAll('.product-list li');
	let tabs_content = document.querySelectorAll('.product-content li');

	tabs.forEach(function (tab, tab_index) {
		tab.addEventListener('click', function () {
			tabs.forEach(function (tab) {
				tab.classList.remove('active');
			})
			tab.classList.add('active');

			tabs_content.forEach(function (val, index) {
				if (index === tab_index) {
					val.classList.add('active');
				}
				else {
					val.classList.remove('active');
				}
			})
		})
	});
}
tabs();


function toggle() {

	let hamburger = document.querySelector('.hamburger');
	let menu = document.querySelector('.menu');

	hamburger.addEventListener('click', function () {
		hamburger.classList.toggle('active');
		menu.classList.toggle('active');
	});
}

toggle();



$(document).ready(function () {
	$('.product-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});

	$('.testimonials-list').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});

})
















