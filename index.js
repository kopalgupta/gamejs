var ele = document.getElementById('ball');
document.addEventListener('keydown', func);

// var offsets = document.getElementById('ball').getBoundingClientRect();



function func(event) {
	ev = event.which;
	switch(ev) {
		case 37: moveLeft();
				break;
		case 38: moveUp();
				break;
		case 39: moveRight();
				break;
		case 40: moveDown();
				break;
	}
}

function moveLeft() {
	var offsets = document.getElementById('ball').getBoundingClientRect();
	// console.log(offsets.left);
	ele.style.left = (offsets.left - 10) + "px";
}

function moveUp() {
	var offsets = document.getElementById('ball').getBoundingClientRect();
	// console.log(offsets.top);
	ele.style.top = (offsets.top - 10) + "px";
}

function moveRight() {
	var offsets = document.getElementById('ball').getBoundingClientRect();
	ele.style.left = (offsets.right + 10) + "px";
}

function moveDown() {
	var offsets = document.getElementById('ball').getBoundingClientRect();
	ele.style.top = (offsets.bottom + 10) + "px";
}

var arr = [-1, 0, 1];
var curr, funccurr, funccurr2; 
var arRL = [autoLeft, autoRight];
var arTB = [autoTop, autoBottom];
var num1, num2;

// window.onload = function () {



// 	// function autoMove () {
// 	// 	var offsets = document.getElementById('ball').getBoundingClientRect();
// 	// 	// console.log(offsets.left);
// 	// 	var num1 = Math.floor(Math.random() * 3) - 1;
// 	// 	ele.style.left = (offsets.left + num1) + "px";
// 	// 	var num2 = Math.floor(Math.random() * 3) - 1;
// 	// 	var offsets = document.getElementById('ball').getBoundingClientRect();
// 	// 	// console.log(offsets.top);
// 	// 	ele.style.top = (offsets.top + num2) + "px";

// 	// 	window.setInterval (autoMove, 300);
// 	// }

// 	// window.setInterval (function() {
// 	function autoMover () {
// 		var rand;
// 		while ((rand = Math.floor(Math.random() * arr.length)) === curr);
// 		var num1 = arr[(curr = rand)];
// 		var offsets = document.getElementById('ball').getBoundingClientRect();
// 		ele.style.left = (offsets.left + num1) + "px";

// 		rand = Math.floor(Math.random() * arr.length);
// 		var num2 = arr[rand];
// 		var offsets = document.getElementById('ball').getBoundingClientRect();
// 		ele.style.top = (offsets.top + num2) + "px";

// 		window.setTimeout(autoMover, 300);
// 	}

// 	// }, 300);

// 	window.setTimeout(autoMover, 300);

// 	// function autoLeft()
// }

window.setInterval(function() {
	var rand, funcrand, funcrand2;
	// while ((rand = Math.floor(Math.random() * arr.length)) === curr);
	// while ((funcrand = Math.floor(Math.random() * arRL.length)) === funccurr);
	// num1 = arr[(curr = rand)];
	// arRL[(funccurr = funcrand)](num1);

	rand = Math.floor(Math.random() * arr.length);
	funcrand = Math.floor(Math.random() * arRL.length);
	num1 = arr[rand];
	arRL[funcrand](num1);


	// console.log(num1);

	rand = Math.floor(Math.random() * arr.length);
	funcrand2 = Math.floor(Math.random() * arTB.length);
	num2 = arr[rand];
	arTB[funcrand2](num2);

	// console.log(num2);
	

	// rand = Math.floor(Math.random() * arr.length);
	// num1 = arr[rand];
	// console.log(num1);
	// var offsets = document.getElementById('ball').getBoundingClientRect();
	// ele.style.left = (offsets.right + num1) + "px";

	// rand = Math.floor(Math.random() * arr.length);
	// num1 = arr[rand];
	// console.log(num1);
	// var offsets = document.getElementById('ball').getBoundingClientRect();
	// ele.style.top = (offsets.bottom + num1) + "px";
}, 80);




function autoLeft(num1) {
	var offsets = document.getElementById('ball').getBoundingClientRect();
	ele.style.left = (offsets.left - num1) + "px";
}

function autoRight(num1) {
	var offsets = document.getElementById('ball').getBoundingClientRect();
	ele.style.left = (offsets.right + num1) + "px";
}

function autoTop(num2) {
	var offsets = document.getElementById('ball').getBoundingClientRect();
	ele.style.top = (offsets.top - num1) + "px";
}

function autoBottom(num2) {
	var offsets = document.getElementById('ball').getBoundingClientRect();
	ele.style.top = (offsets.bottom + num1) + "px";
}


// document.addEventListener('DOMContentLoaded', AutoMover);

// function AutoMove() {
	
// 	var offsets = document.getElementById('ball').getBoundingClientRect();
// 	console.log(offsets.left);
// 	var num1 = Math.floor(Math.random() * 3) - 1;
// 	ele.style.left = (offsets.left + num1) + "px";
// 	var num2 = Math.floor(Math.random() * 3) - 1;
// 	var offsets = document.getElementById('ball').getBoundingClientRect();
// 	console.log(offsets.top);
// 	ele.style.top = (offsets.top + num2) + "px";

// }

// window.onload = function () {
// 	while(1) {
// 		setInterval(AutoMove, 300);
// 	};
// }

