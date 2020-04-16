
var capture;
var tracker;

var rhi, ghi, bhi;
var rlo, glo, blo;



function setup() {
    var w = 640,
        h = 480;
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    capture.size(w, h);
    capture.parent('container');
    cnv = createCanvas(w, h);
    cnv.parent('container');



}

function draw() {

}
