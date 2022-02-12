function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";

}


function draw(){
    image(video,10,10,620,470);
    tint(tint_color);
rect(0,0,1000,10)
rect(0,0,10,1000)
rect(0,470,1000,10)
rect(630,0,10,1000)
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}

