
var videoFeed;




function setup() {
    var w = 640,
        h = 480;


        videoFeed = createCapture(VIDEO);
        videoFeed.size(w, h);


    // videoFeed = createCapture({
    //     audio: false,
    //     video: {
    //         width: w,
    //         height: h
    //     }
    // }, function() {
    //     console.log('capture ready.')
    // });
    // videoFeed.elt.setAttribute('playsinline', '');
    // videoFeed.size(w, h);
    // videoFeed.parent('container');
    cnv = createCanvas(w, h);
    //cnv.parent('container');



}

function draw() {

}
