let stillimage;
let openvideo;
let closevideo;

let endlessdoor = "start";

let s = 'Scroll for Mickey!';

function preload() {
  openvideo = createVideo("videos/Mickey door video.mp4");
  closevideo = createVideo("videos/Mickey door video reverse.mp4");
}

function setup() {
  createCanvas(400, 450);
  stillimage = loadImage("images/Mickey still image.PNG");
  image(stillimage, 10, 10);
  openvideo.hide();
  closevideo.hide();
  text(s, 10, 10, 100, 100);
  textFont
  textSize
}

function show() {
  image(stillimage,width/2,height/2,400,400);
}


function draw() {
  imageMode(CENTER);
  if(endlessdoor === "open"){
    //vid.play(openvideo,width/2,height/2,300,300);
    image(openvideo,width/2,height/2,400,400);
    
  }else if(endlessdoor === "close"){
    image(closevideo,width/2,height/2,400,400);
  }else if(endlessdoor === "start"){
    image(stillimage,width/2,height/2,400,400);
  }
}

function mousePressed(){
  if (mouseButton === LEFT) {
    endlessdoor = "open";
    openvideo.play();
    print("door " + endlessdoor);
  }
  if (mouseButton === RIGHT) {
    endlessdoor = "close";
    closevideo.play();
    print("door " + endlessdoor);
  }
}
  
function mouseWheel(){
  if (event.deltaY < 0) {
    endlessdoor = "open";
    openvideo.play();
    print("door " + endlessdoor);
  }
  if (event.deltaY > 0) {
    endlessdoor = "close";
    closevideo.play();
    print("door " + endlessdoor);
  }
}