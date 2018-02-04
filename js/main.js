'use strict';

var page = document.querySelector('.page');
var menuTrigger = page.querySelector('.menu-trigger');
var menuCloseBTN = page.querySelector('.menu-close');
var buttonMore = document.querySelector('.button-more');
var menuItem = document.querySelectorAll('.menu-item');

/*up and down slow*/
document.querySelector('.principal-button.down').addEventListener('click', function (e) {
 e.preventDefault();
 document.querySelector('#next-section').scrollIntoView({behavior: 'smooth', block: 'start'});
});
document.querySelector('.principal-button.up').addEventListener('click', function (e) {
 e.preventDefault();
 document.querySelector('#Anonymous').scrollIntoView({behavior: 'smooth', block: 'start'});
});

/*Menu*/
function openNavMenu() {
	page.classList.add('page-menu-visible');
}

function closeNavMenu() {
	page.classList.remove('page-menu-visible');
}

for (var i=0;i < menuItem.length;i++) {
 menuItem[i].addEventListener('click', closeNavMenu);
}


/*function moreReasons() {
	fetch('https://three-random-reasons-izwfjpgbqm.now.sh/')
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		var reasons = json.reasons;
		var reasonsList = document.querySelector('.reasons-container');
		for (var i = 0; i < reasons.length; i++) {
			reasonsList.appendChild(createReason(reasons[i]));
		}
	});
}
*/

function moreReasons() {
	fetch('https://three-random-reasons-izwfjpgbqm.now.sh/')
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		var reasons = json.reasons;
		var reasonsList = document.querySelector('.reasons-container');
    reasons.map(function (reason) {
          return '<div><h3 class="title-reason">' + reason.title + '</h3></div>';
        })
        .forEach(function (div) {
          reasonsList.innerHTML += div;
        });
  });
}

var buttonGo = document.querySelector('.button-go');

function textLoremGo() {
  var textGo =document.createTextNode('Donec accumsan, nulla ut volutpat porttitor, quam odio tempus felis, at luctus ex diam nec lectus. Vivamus semper sodales rutrum.');
   var containerInfo = document.querySelector('.textLoremGo');
  // containerInfo.innerHTML += '<p class="text-info">' + textGo + '</p>';

  var containerP = document.createElement('p');
  containerP.classList.add('text-info');
  containerP.append(textGo);
  containerInfo.append(containerP);
}


buttonGo.addEventListener('click', textLoremGo);

function createReason(reason) {
	var reasonDiv = document.createElement('div');
	var reasonH3 = document.createElement('h3');
	var reasonP = document.createElement('p');
	reasonH3.classList.add('title-reason');
	reasonH3.textContent = reason.title;
	reasonP.classList.add('text-reason');
	reasonP.textContent = reason.description;
	reasonDiv.appendChild(reasonH3);
	reasonDiv.appendChild(reasonP);
	return reasonDiv;
}

menuTrigger.addEventListener('click', openNavMenu);
menuCloseBTN.addEventListener('click', closeNavMenu);
buttonMore.addEventListener('click', moreReasons);
