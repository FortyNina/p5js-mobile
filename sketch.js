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
}

function draw() {
 image(video, 0, 0, width, height);
 //image(video,0,0, 200, 200);
 fill(bgCol);
 rect(75,75,50,50);

}
