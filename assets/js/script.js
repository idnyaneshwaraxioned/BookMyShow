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
	let menu = document.querySelector('.home-menu-left');
	let menu2 = document.querySelector('.home-menu-right')

	hamburger.addEventListener('click', function () {
		hamburger.classList.toggle('active');
		menu.classList.toggle('active');
		menu2.classList.toggle('active');
	});
}

toggle();


function formValidation() {
	let enquiry_form = document.querySelector('.enquiry-form');
	let fname = document.querySelector('.fname');
	let mobno = document.querySelector('.mobno');
	let cname = document.querySelector('.cname');
	let email = document.querySelector('.email');
	let notifycheck = document.querySelector('#notifycheck');

	enquiry_form.addEventListener('submit', function (e) {
		e.preventDefault();
		inputvalid();
		emptyinput();
	})

	function inputvalid() {

		let userCheck = /^[A-Za-z. ]{3,30}$/;
		let number = /^[0-9]{10}$/;
		let emailexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let span = document.createElement('span');

		if (!fname.value || !userCheck.test(fname.value)) {
			span.innerHTML = "* Please enter min 3 and max 30 character";
			fname.parentElement.appendChild(span);
			return false;
		} else if (!cname.value || !userCheck.test(cname.value)){
			span.innerHTML = "* Please enter min 3 and max 30 character";
			cname.parentElement.appendChild(span);
			return false;
		} else if (!mobno.value || !number.test(mobno.value)){
			span.innerHTML = "* Enter valid 10 Digit Mob No.";
			mobno.parentElement.appendChild(span);
			return false;
		} else if (!email.value || !emailexp.test(email.value)) {
			span.innerHTML = "* Enter valid Email ID";
			email.parentElement.appendChild(span);
			return false;
		} else if (!notifycheck.checked){
			span.innerHTML = "* Please select checkbox";
			notifycheck.parentElement.appendChild(span);
			return false;
		}		
		else {
			removeSpan(fname);
			removeSpan(cname);
			removeSpan(mobno);
			removeSpan(email);
			return true;
		}
	}

	function removeSpan(elem) {
		let span = elem.parentElement.querySelectorAll('span');
		for (let i = 0; i < span.length; i++) {
			span[i].remove();
		}
	}

	function emptyinput () {
		fname.value = "";
		cname.value = "";
		mobno.value = "";
		email.value = "";
		notifycheck.checked = false;
	}
}

formValidation();



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
















