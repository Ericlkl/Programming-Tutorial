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

function fontSetUp()
{
  var font = loadFont('fonts/Roboto-Regular.ttf');
  textFont(font);
  textSize(20);
  textAlign(CENTER,CENTER);
}


/*  -----------------------------------------------------------------------
    ---------------------Draw Function---------------------------
    ----------------------------------------------------------------------- */
function drawMap()
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
      drawText( "TelPhone : 0416123421" ,shopX-30, shopY - 30 );
    }
  }
}

function drawText(msg, x, y){
  fill(0);
  text(msg,x,y);
}

function drawUIComponent()
{
  background(220);
  drawText("WelCome To Westfield GardenCity Online Map",0, 50 );
  drawMap();
}

/*  -----------------------------------------------------------------------
    ---------------------Excute Program Function---------------------------
    ----------------------------------------------------------------------- */
function setup() {
  createCanvas(2500, 1500);
  fontSetUp();
  GetImageFromImagesFolder();
}

function draw() {
  drawUIComponent();
  ShopImagePopsUp();
}