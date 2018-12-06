var img;

function setup() {
  createCanvas(2000, 2000);
  img = loadImage('shop0.jpg');
}

function detectMouseClick(){
  if(mouseIsPressed){
    console.log("Mouse X : " + mouseX);
    console.log("Mouse Y : " + mouseY);
  }
  
  if (key == 'a'){
    console.log("Apple");
  }
}

function draw() {
  background(255);
  detectMouseClick();
  image(img, mouseX, mouseY);
}