lipstickX = 0;
lipstickY = 0;

function preload(){
    lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    console.log("hello")
    if(results.length > 0){
        console.log(results);
        lipstickX = results[0].pose.nose.x - 40;
        lipstickY = results[0].pose.nose.y + 10;
        console.log("lipstick x =" + lipstickX);
        console.log("lipstick y =" + lipstickY);
        console.log("lipstick x = " + results[0].pose.lipstick.x);
        console.log("lipstick y = " + results[0].pose.lipstick.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(lipstickX, lipstickY, 20);
    image(lipstick, lipstickX, lipstickY, 80, 35);
}

function take_snapshot(){
    save('myImage.png')
}