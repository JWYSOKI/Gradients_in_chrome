// Executes the getColor1 function when the page loads
$(document).ready(getColor1)

// Executes getColor1 when run button is clicked
$('#run').click(getColor1)

// Event listener to run the copyCode function when the copy button is clicked
$('#copyCode').click(copyCode)


// Adds bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// Initalizes an array of all possible hex color characters
var choices = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

// Initalizes color1 and color2 variables as '#'
var color1 = "#";
var color2 = "#";


// Generates random color 1
function getColor1(){

	// Ensures the color1 and color2 variables are ready to accept new colors
	color1 = "#"
	color2 = "#"

	// Loops over the code below 6 times (length of a hex color code)
	for (var i = 0;i<6;i++){

		// picks a random number between 0 and the length of the choices array
		// and assigns it to char
		var char = Math.floor(Math.random()*choices.length)

		// concatenates the character from choices array at index char 
		// to color1 variable, creating a hex color code.
		color1 += choices[char]
	}

	// Assigns the background of the color1 box to the randomly generated color
	$('#color1').css({
		background:color1
	})

	// executes the getColor2 function which does the same thing, but stores
	// it's generated code in the color2 variable
	getColor2()
}



function getColor2(){
	for(var i = 0;i<6;i++){
		var char = Math.floor(Math.random()*choices.length)
		color2 += choices[char]
	}
	$('#color2').css({
		background:color2
	})
	changeBg()

}



function changeBg(){
	// Assigns the variable bg equal to a gradient color string, concatenating
	// color1 and color2 that we generated
	var bg = 'linear-gradient(' + color1 + ", " + color2 + ")"

	// Sets the background of the body equal to the bg string that was created in
	// the line above.
	$('body').css({
		background:bg,
		backgroundRepeat:'no repeat'
	});

	// Puts bg code as the value of the hidden input to be copied
	$('#outcome').val(bg)

}



function copyCode() {
  // Get the text field 
  var copyText = $('input');

  // Select the text field 
  copyText.select();

  // Copy the text inside the text field 
  document.execCommand("copy");

}