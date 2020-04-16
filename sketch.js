
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
    //pixelDesnity(1);
    videoFeed = createCapture(VIDEO);
    videoFeed.size(screenWidth / 8, screenHeight / 8);


}

function draw() {

}
