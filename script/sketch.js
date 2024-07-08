

let rad = 360;
let waves = [];
let num = 12;
let step = 30;

let x = 1080;

let x_ = x/10; // 108

let x_125 = x_ * 1.25; // 135 which is 108 x 1.25

let x_half = x_/2; // 54



let faces = [];
let gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = loadImage("../assets/turtle_run_.gif");
  //gif_createImg = createImg("turtle_run_.gif");
  planet = loadImage("../assets/planet.gif");

  for (let z=1;z<=23;z++){
    faces[z] = loadImage(`../assets/fs_${z}.png`);
  }

}


function setup() { 
  
  createCanvas(1080, 1080); 
  // frameRate(8);
  angleMode(DEGREES);

  // Initiate waves
  for (let i = 0; i < num; i++){
    waves[i] = new Wave(i*step);
  }
  















  
} 

function draw() { 
  //Start capturing the frames with CCapture
  if (frameCount === 1) {
    capturer.start()
  }
  

  //background(100);

  // Add background animation
  gif_loadImg.resize(1400, 0);
  image(gif_loadImg, -100, 0);

  //gif_createImg.position(50, 350);


  // Image tint
  push();
  fill(0,0,0,64)
  rect(0, 0, 1080);
  pop();


  // three different random for the different section of faces
  let r1 = floor(random(1,23));
  let r2 = floor(random(1,23));
  let r3 = floor(random(1,23));

  // add planet to top right
  planet.resize(x_125, 0);
  image(planet, (width-(x_+x_125)), x_);
  // image(planet, (width-(x_+x_125))+x_half, x_-x_half);

  // add face loops to different corners
  push();
  frameRate(8);
  faces[r1].resize(x_125, 0);
  faces[r2].resize(x_125, 0);
  faces[r3].resize(x_125, 0);

  // top left
  image(faces[r1], x_-x_half, x_-x_half);

  // bottom left
  image(faces[r2], x_-x_half, (height-(x_+x_125))+x_half);

  // bottom right
  image(faces[r3], (width-(x_+x_125))+x_half, (height-(x_+x_125))+x_half);
  pop();



  push();
  noStroke();
  
  // top left
  fill(0,255,255, 85);
  rect(x_, x_, x_125);

  // bottom left
  fill(255,0,255, 85);
  rect(x_, (height-(x_+x_125)), x_125);

  // bottom right
  fill(255,255,0, 85);
  rect((width-(x_+x_125)), (height-(x_+x_125)), x_125);
  pop();

  

  

  

  //Center sphere
  translate(width/2, height/2);
  rotate(135);

  //noFill();
  //fill(255,0,255, 127); 
  // An ellipse at 540, 540 with radius 400 
  //ellipse(0, 0, rad*2, rad*2)  

  // Move and Display Waves
  for (let i = 0; i < num; i++){
    waves[i].display();
    waves[i].move();
  }
  



  //Counter using CCapture
  if (frameCount < 8 * 56) {
    capturer.capture(canvas)
  } else if (frameCount === 8 * 56) {
    capturer.save()
    capturer.stop()
  }
  

  
}  
