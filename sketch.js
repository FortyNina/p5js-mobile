// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using MobileNet and p5.js
This example uses a callback pattern to create the classifier
=== */

let classifier;
let video;

let bgCol = 0;

let button;

function setup() {
  //noCanvas();
  //createCanvas(200,200);
  createCanvas(displayWidth, displayHeight - 100);
  
  if (isMobileDevice()) {
  	console.log("mobile device");
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }
  };
  
  video = createCapture(constraints);
  } else {
  	console.log("NOT mobile device");
    video = createCapture(VIDEO);
  }
  
  //video.size(640, 480);
  video.hide();
  
  // Initialize the Image Classifier method with MobileNet and the video as the second argument
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);  
	button = createButton('create poem');
  //button.position(video + 20, 200 + 20);
  button.mousePressed(greet);
}

function draw() {
 image(video, 0, 0, width, height);
 //image(video,0,0, 200, 200);
 fill(bgCol);
 rect(75,75,50,50);
  
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


function modelReady() {
  // Change the status of the model once its ready
  select('#status').html('Model Loaded');
  // Call the classifyVideo function to start classifying the video
  classifyVideo();
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.predict(gotResult);
}

// When we get a result
function gotResult(err, results) {
  // The results are in an array ordered by probability.
  select('#result').html(results[0].className);
  select('#probability').html(nf(results[0].probability, 0, 2));
  classifyVideo();
}

function greet() {
  bgCol = random(255);
}

