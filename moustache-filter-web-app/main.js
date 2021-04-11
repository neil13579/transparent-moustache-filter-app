noseX = 0;
noseY = 0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('posenet is initialized');
}


function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 45;
        noseY = results[0].pose.nose.y - 20;
    }
}


function draw() {
    image(video, 0, 0, 500, 500);
    image(moustache, noseX, noseY, 90, 90);
}

function take_snapshot() {
    save('nose_clown_img.png');
}