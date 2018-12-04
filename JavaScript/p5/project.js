var mapImg;
var shopsImages = [];


/*	-----------------------------------------------------------------------
		---------------------SET UP Function---------------------------
    ----------------------------------------------------------------------- */
function GetImageFromImagesFolder(){
  
  // get shopping center images
  mapImg = loadImage("images/map.jpg");
  
  // Get all the shops images
  for(var i = 0; i < 5 ; i++){
    // Image[0] = 
    shopsImages[i] = loadImage("images/shop"+ i+".jpg");
  }
}


/*	-----------------------------------------------------------------------
		---------------------Draw Function---------------------------
    ----------------------------------------------------------------------- */
function drawImage()
{
  // Draw the map image 
  image(mapImg, 0,0);
}


/*	-----------------------------------------------------------------------
		---------------------Excute Program Function---------------------------
    ----------------------------------------------------------------------- */
function setup() {
  createCanvas(1920, 1080);
  GetImageFromImagesFolder();
}

function draw() {
  background(220);
  drawImage();
}