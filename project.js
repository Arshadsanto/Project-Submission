/*accessing the DOM elements
@color-- with getElementById
*/
var color = document.getElementById('colorPicker');
// Select size input
var heightInput = document.getElementById('inputHeight');
var widthInput = document.getElementById('inputWidth');
const submit = document.getElementById("submitBtn");
const canvas = document.getElementById('pixelCanvas');

/* event listerner for the submit button
to delete the old input used .innerHTml as null
to prevent the
*/
submit.addEventListener('click', function(event) {

	console.log("Sucessfully submitted");

	canvas.innerHTML = " ";


	event.preventDefault();

	makeGrid(event);

});
// creating dynamic tables with makeGrid method
function makeGrid() {
	for (let index = 0; index < heightInput.value; index++) {
		let row = canvas.insertRow(0);
		for (let j = 0; j < widthInput.value; j++) {
			row.insertCell(0);
		}
	}
}
// filling the grid with colors
canvas.addEventListener('click', function(event) {
	if (event.target.nodeName === 'TD') {
		event.target.style.backgroundColor = color.value;
	}
});