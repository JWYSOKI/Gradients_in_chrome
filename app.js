// Add event listener to button that calls getColor function
$(document).ready(getColor1)
$('#run').click(getColor1)

// generate 2 random colors

// an array of all possible hex color

var choices = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
var gradients = []
var color1 = '#';
var color2 = '#';

function getColor1(){
	for(var i = 0; i<6; i++){
		var char = Math.floor(Math.random()*choices.length);
		color1 += choices[char]
		}
		
			$('#color1').css('background', color1)	
		getColor2()	
	}

function getColor2(){

	for(var i = 0; i<6; i++){
		var char = Math.floor(Math.random()*choices.length);
		color2 += choices[char]
		}
			$('#color2').css('background', color2)	
			changeBg()
	} 

function changeBg(){
	var bg = 'linear-gradient(' + color1 + ', ' + color2 +')'
	$('body').css('background', bg)
 	color1 = '#';
 	color2 = '#';
 	$('#outcome').text(bg);
};	






// set the colors of the boxes to those random colors


// change the background color of the page to a gradient of the two random colors


