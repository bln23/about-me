'use strict';

// var button = document.querySelector('.button-arrow.down');
// button.addEventListener('click', showDown);
//
// function showDown(event) {
//   event.preventDefault();
//   var buttonDown = document.getElementById('next-section');
//   buttonDown.scrollIntoView({block: "start", behavior: "smooth"});
// }

// Variables
var hero = document.querySelector('.hero');
var menuOpen = hero.querySelector('.menu-open');
var menuClose = hero.querySelector('.menu-close');

// Functions
function openNavMenu() {
	hero.classList.add('menu-visible');
};

function closeNavMenu() {
	hero.classList.remove('menu-visible');
};


// Magic
menuOpen.addEventListener('click', openNavMenu);
menuClose.addEventListener('click', closeNavMenu);
