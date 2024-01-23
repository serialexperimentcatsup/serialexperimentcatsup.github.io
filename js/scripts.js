/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var slideLeft = {
    reset: true,
    distance: '1200px',
    duration: '2000',
	delay: '200',
	origin: 'right',
    opacity: null
};

ScrollReveal().reveal('.slide-left', slideLeft);

var slideRight = {
    reset: true,
    distance: '1200px',
	duration: '2000',
	delay: '200',
    origin: 'left',
    opacity: null
};

ScrollReveal().reveal('.slide-right', slideRight);