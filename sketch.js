var videoFeed; //reference to video from webcam
var lerpPercent = 0; //keep track of lerping
var colorTravelSpeed = .05; //how quickly the color lerps
var prevFrame;
var movementThreshold = 4000;
var maxDotWidth = 15;
var invert = true;

var screenWidth = 600;
var screenHeight = 450;

//COLOR VARIABLES------------------------------------
let backCol = [123, 36, 63, 255]; //background color
let accentColOne = [243, 45, 68, 255];
let accentColTwo = [255, 194, 25, 255];
let accentColThree = [85, 155, 255, 255];
let accentColFour = [133, 197, 130, 255];

let colLineup = [accentColOne, accentColTwo, accentColThree, accentColFour];

let colorIndicies = [0, 1, 2, 3];

//colors that will actually be displayed
let currentColOne = [255, 255, 255, 255];
let currentColTwo = [0, 0, 0, 255];
let currentColThree = [0, 0, 0, 255];
let currentColFour = [0, 0, 0, 255];
//-----------------------------------------------------------

//SLIDER AND GUI OBJECTS-------------------------------------
var threshSlider;
var invertCheckBox;
var backgroundColorPicker;
var accentOneColorPicker;
var accentTwoColorPicker;
var accentThreeColorPicker;
var accentFourColorPicker;



//-----------------------------------------------------------

function setup() {
  createCanvas(screenWidth, screenHeight);

}


function draw() {



  background(backCol);
  loadPixels();
  //Handle coloring pixels
  for (var y = 0; y < pixels.height; y++) {
    for (var x = 0; x < pixels.width; x++) {
      var index = (pixels.width - x + 1 + (y * videoFeed.width)) * 4;
      var r = pixels.pixels[index + 0];
      var g = pixels.pixels[index + 1];
      var b = pixels.pixels[index + 2];
      var brightMapped = (map(((r + g + b) / 3), 0, 255, 0, 8)) + .5;

        fill(currentColOne);
        widthBrightnessModifier = 10;


      rectMode(CENTER);

      var finalWidth = widthBrightnessModifier * widthBasedOnMovement;
      if (finalWidth > maxDotWidth) {
        finalWidth = maxDotWidth;
      }

      ellipse(x * 8, y * 8, 2, 2);
    }
  }
}
