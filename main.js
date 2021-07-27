var nose_x,nose_y;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/QdFCSrJ6/moustache-PNG38.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('posenet is inatilised');

}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x -25;
    nose_y=results[0].pose.nose.y;
    console.log("position of x is "+nose_x+" and y is "+nose_y);
}
}

function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0); 
image(clown_nose,nose_x,nose_y,50,30);

}

function take_snapshot(){
    save('My_clown_nose_filter_selfie.png');
}
