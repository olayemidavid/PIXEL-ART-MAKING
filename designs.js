// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
console.log("before");
function makeGrid() {
	let pixelCanvas, grid, x, y;
	pixelCanvas = $('#pixel_canvas');
	x = $("#inputHeight").val();
	y = $("#inputWeight").val();
	//evt.preventDefault();

	for (var i = 0; i <x; i++) {
		//grid += "<tr>";
		$("#pixelCanvas").append("<tr></tr>");
	}
	
	for (var i = 0; i < y; i++) {
		$("tr").each(function(){
		$(this).append('<td></td>');
		});
	}
	console.log("end");
}
/*$(document).ready(function () {
	$('#submit-btn').click(function (evt) {
		var x, y;
		makeGrid(x, y);
	});*/

	$('#pixelCanvas tr td').on('click',function () {
		let color = $('#colorPicker').val();
		$(this).css('background-color', color);
		console.log("color");

	});