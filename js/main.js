'use strict';


// Button down/up

var buttonDown = document.querySelector('.button-arrow.down');
var buttonUp = document.querySelector('.button-arrow.up');
buttonDown.addEventListener('click', showDown);
buttonUp.addEventListener('click', showUp);

function showDown(event) {
  event.preventDefault();
  var buttonDown = document.getElementById('next-section');
  buttonDown.scrollIntoView({block: "start", behavior: "smooth"});
}


function showUp(event) {
  event.preventDefault();
  var buttonDown = document.getElementById('up');
  buttonDown.scrollIntoView({block: "end", behavior: "smooth"});
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
