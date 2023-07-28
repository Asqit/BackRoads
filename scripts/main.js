"use strict";

function appendDateToFooter() {
	document.querySelector(".js-year").innerHTML = new Date().getFullYear();
}

function main(e) {
	appendDateToFooter();
}

window.addEventListener("load", main, false);
