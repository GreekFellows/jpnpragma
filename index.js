let arr = [
	"https://goo.gl/forms/vTYQDUoZwHzJZjz42",
	"https://goo.gl/forms/PkPqLMXq8DZ5LtB03",
	"https://goo.gl/forms/9hdlogTAvNZZbLkf1",
	"https://goo.gl/forms/9oFhXdcjsgHar3Uk2",
	"https://goo.gl/forms/l3yKrIwWppugG8fT2",

	"https://goo.gl/forms/N5f0ttQV5vglUsor2",
	"https://goo.gl/forms/wtcEGfc1BifY9qQl1\'",
	"https://goo.gl/forms/imbEyO6BKrhVGMhm1",
	"https://goo.gl/forms/C7ETi6hbjff4A0uh2",
	"https://goo.gl/forms/AvBHpB4RC0EvLhsp1",

	"https://goo.gl/forms/nIaO0vPqogiMBATE3",
	"https://goo.gl/forms/ZPGHhSiJnSG5Sbkk1",
	"https://goo.gl/forms/zu6Lb5y9iLY8cHeO2",
	"https://goo.gl/forms/3EO7IROnMRYVNit72"
];

function f() {
	let ind = Math.floor(Math.random() * arr.length);
	document.getElementById("flyer").setAttribute("action", arr[ind]);
}

window.setInterval(f, 10);
document.getElementById("main").setAttribute("style", "");
