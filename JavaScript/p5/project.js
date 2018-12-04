var mapImg;
// Array for storing shop images
var shopsImages = [];
// 2D Array for storing coordinate of the shop on the map
var shopsCoordinates = [ [865,310] , [1453,893] , [772, 559] ,[930,663] , [1378,970] ];

/*  -----------------------------------------------------------------------
    ---------------------SET UP Function---------------------------
    ----------------------------------------------------------------------- */
function GetImageFromImagesFolder(){
  
  // get shopping center images
  mapImg = loadImage("images/map.jpg");
  
  // Get all the shops images
  for(var i = 0; i < 5 ; i++){
    
    // shop0.jpg = Woolworth
    // shop1.jpg = H&M
    // shop2.jpg = David Jones
    // shop3.jpg = BigW
    // shop4.jpg = Myer
    shopsImages[i] = loadImage("images/shop"+ i+".jpg");
  }
}


/*  -----------------------------------------------------------------------
    ---------------------Draw Function---------------------------
    ----------------------------------------------------------------------- */
function drawImage()
{
  // Draw the map image 
  image(mapImg, 0,0);
}

function ShopImagePopsUp()
{
  for(var i = 0; i < 5 ; i++){
    var shopX = shopsCoordinates[i][0];
    var shopY = shopsCoordinates[i][1];
    if(mouseX > shopX-10 && mouseX < 10+shopX && mouseY > shopY-10 && mouseY < shopY+10)
    {
      image(shopsImages[i],shopX,shopY);
    }
  }
}

/*  -----------------------------------------------------------------------
    ---------------------Excute Program Function---------------------------
    ----------------------------------------------------------------------- */
function setup() {
  createCanvas(2500, 1500);
  GetImageFromImagesFolder();
}

function draw() {
  background(220);
  
  if (mouseIsPressed){
    console.log("Mouse X = " + mouseX);
    console.log("Mouse Y = " + mouseY);
  }
  drawImage();
  ShopImagePopsUp();
}