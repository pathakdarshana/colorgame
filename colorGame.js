var colors = [];
var level = "hard";
var pickedColor ;
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var colorDisplay = document.querySelector("h1 span");
var resetEvent = document.querySelector("#reset");
var buttonReset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
init();

function init(){
	reset();
	colorDisplay.textContent = pickedColor;
	levelButtons();

}

// To get number of colored squares according to the level of game.
function numberOfColors(){
	return level == "hard" ? 6 : 3
}
// code for switching between easy and hard levels
function levelButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			level = this.textContent.toLowerCase();
			reset();
			colorDisplay.textContent = pickedColor;
		});
	}
}


// setting the color of squares for easy and hard case.
function setColor(){
	for(i = 0; i < squares.length; i++ ){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if (clickedColor == pickedColor){
				message.textContent = "Great!";
				changeColor(clickedColor);
				h1.style.background = clickedColor;
				buttonReset.textContent = "Play Again?";
			}
			else{
				message.textContent = "Try Again!";
				this.style.background = "black";
			}
		});
	}
}

function numberOfSquares(){

}


// changing the backgroung colour to clicked color when guess is correct.
function changeColor(color){
	for(i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}
// picking random color out of the generated number of colors.
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return random;
}
//the code for reset button click event 
resetEvent.addEventListener("click", function(){
	reset();
	colorDisplay.textContent = pickedColor;

});
// function to reset the game
function reset(){
	message.textContent = "Start";
	colors = generateRandomColours();
	setColor();
	buttonReset.textContent = "New Colors";
	h1.style.background = "steelblue";
	pickedColor =  colors[pickColor()];
}
//generating random set of colors
function generateRandomColours(){
	var colors = [];
	for(i = 0; i < numberOfColors(); i++){
		colors[i] = generateColors();
	}
	return colors;
// generating random color
}
function generateColors(){
	r = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	return "rgb"+"("+ r +", "+ b +", " + g +")";
}


