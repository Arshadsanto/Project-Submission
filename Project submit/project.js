// accessing the DOM elements
var color = document.getElementById('colorPicker');
// Select size input
var heightInput = document.getElementById('inputHeight');
var widthInput = document.getElementById('inputWidth');
const submit = document.getElementById("submitBtn");
const canvas = document.getElementById('pixelCanvas');
const rowNumber = heightInput.value;
const cellNumber = widthInput.value;
// event listerner for submit button
submit.addEventListener('click' , function(event){
	
	console.log("Sucessfully submitted");
	
	canvas.innerHTML = " ";


	event.preventDefault();
	
	makeGrid(event);
	
});
// creating dynamic tables
function makeGrid() {
	for(let index=0 ; index<rowNumber ; index++){
	 let row = canvas.insertRow (0);
		for( let j=0 ; j<cellNumber ; j++){
		row.insertCell (0);
		}
	}
}
// filling the grid with colors
	canvas.addEventListener('click' , function(event) {
		if(event.target.nodeName === 'TD'){
		event.target.style.backgroundColor = color.value; 
		}
	});



