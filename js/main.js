'use strict';


// Button down/up

var button = document.querySelector('.button-arrow.down');
button.addEventListener('click', showDown);

function showDown(event) {
  event.preventDefault();
  var buttonDown = document.getElementById('next-section');
  buttonDown.scrollIntoView({block: "start", behavior: "smooth"});
}


// Menu

var hero = document.querySelector('.hero');
var menuOpen = hero.querySelector('.menu-open');
var menuClose = hero.querySelector('.menu-close');
var menuItem = document.querySelectorAll('.menu-item');

function openNavMenu() {
	hero.classList.add('menu-visible');
}

function closeNavMenu() {
	hero.classList.remove('menu-visible');
}

for (var i=0;i < menuItem.length;i++) {
 menuItem[i].addEventListener('click', closeNavMenu);
}

menuOpen.addEventListener('click', openNavMenu);
menuClose.addEventListener('click', closeNavMenu);
