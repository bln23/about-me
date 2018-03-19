'use strict';

var button = document.querySelector('.button-arrow.down');
button.addEventListener('click', showDown);

function showDown(event) {
  event.preventDefault();
  var buttonDown = document.getElementById('next-section');
  buttonDown.scrollIntoView({block: "start", behavior: "smooth"});
}
