var img = [];

function fontSetUp(){
  // Set text characteristics
	var fontsize = 40;
  var font = loadFont('font/Roboto-BlackItalic.ttf');
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

// Read EightImage to the image Variable
function ReadEightImage(){
  for(var i = 0; i < 8; i++){
    img[i] = loadImage("images/" + i + ".jpg");
  }
}

function drawText(){
  fill(255);
  text("Cherry", 400,400);
}

// Print 8 image to the canvas
function drawEightImage(){
  for(var i = 0; i < 8; i++){
    var height = i * 620;
    image(img[i],0,height);
  }
}

function setup() {
  createCanvas(800, 5000);
  fontSetUp();
  ReadEightImage();
}

function draw() {
  background(100);
  drawEightImage();
  drawText();
}