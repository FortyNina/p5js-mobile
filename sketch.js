
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
    pixelDesnity(1);
    videoFeed = createCapture(VIDEO);
    videoFeed.size(screenWidth/8, screenHeight/8);


}

function draw() {

}




function getColDist(r1, g1, b1, r2, g2, b2) {
  var dist = (r2 - r1) * (r2 - r1) + (g2 - g1) * (g2 - g1) + (b2 - b1) * (b2 - b1);
  return dist;

}

function lerpColors(arr, index) {

  var startInd = colorIndicies[index];
  var finishInd = startInd + 1;
  if (finishInd > 3) {
    finishInd = 0;
  }
  arr[0] = lerp(colLineup[startInd][0], colLineup[finishInd][0], lerpPercent);
  arr[1] = lerp(colLineup[startInd][1], colLineup[finishInd][1], lerpPercent);
  arr[2] = lerp(colLineup[startInd][2], colLineup[finishInd][2], lerpPercent);

}

function hexToRGB(hexNum, arr) {
      hexNum = hexNum.replace('#', '');

    arr[0] = unhex(hexNum.substring(0,2));
    arr[1] = unhex(hexNum.substring(2,4));
    arr[2] = unhex(hexNum.substring(4,6));
}

function RGBToHex(r,g,b){
  var c = color(r,g,b);
  var hx = "#" + hex(r,2) + hex(g,2) + hex(b,2);
  print(hx);
  return hx;
}
