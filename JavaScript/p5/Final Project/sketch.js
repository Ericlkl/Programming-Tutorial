/*  -----------------------------------------------------------------------
    ---------------------Global Variable Field  ---------------------------
    ----------------------------------------------------------------------- */

// variable for reading the map image as the background image
var mapImg; 

// Array for storing shop images
var shopsImages = [];

// Variable for recording there are 5 shop photo in the folder
var ImagesNumber = 5;

// 2D Array for storing coordinate of the shop on the map
// shopsCoordinates [0 - 4][] = WoolWorth, H&M , David Jones, BigW, Myer Coordinate set
// shopsCoordinates [][0-1] = 0 = X Values, 1 = Y Values
var shopsCoordinates = [ [865,310] , [1453,893] , [772, 559] ,[930,663] , [1378,970] ];

// User Location Variablex
var userX = 540; // user coordinate X Value
var userY = 355; // user coordinate Y Value
var loc_indicator_size = 20; // the location indicator size


/*	-----------------------------------------------------------------------
		---------------------SET UP Function---------------------------
    ----------------------------------------------------------------------- */
function GetImageFromImagesFolder(){
  
  // get shopping center images
  mapImg = loadImage("images/map.jpg");
  
  // Get all the shops images
  for(var i = 0; i < ImagesNumber ; i++){
    
    // shop0.jpg = Woolworth
    // shop1.jpg = H&M
    // shop2.jpg = David Jones
    // shop3.jpg = BigW
    // shop4.jpg = Myer
    // Load all the shop images to the array variable for printing later
    shopsImages[i] = loadImage("images/shops/shop"+ i+".jpg");
  }
}

function fontSetUp()
{
  // Read Fonts from the fonts folder
  var font = loadFont('fonts/Roboto-Regular.ttf');
  // Set Text Font
  textFont(font);
  // Set Text Size
  textSize(20);
  // Align the text to print it in center position
  textAlign(CENTER,CENTER);
}

/*	-----------------------------------------------------------------------
		---------------------User Interaction Function---------------------------
    ----------------------------------------------------------------------- */

function ShopImagePopsUp()
{
  // loop 5 times, because we have 5 shop images
  for(var i = 0; i < ImagesNumber ; i++){

    // Read the X,Y Position from the coordinates set
    var shopX = shopsCoordinates[i][0];
    var shopY = shopsCoordinates[i][1];
    
    // If the user put the mouse to the shop name point area
    if(mouseX > shopX-10 && mouseX < 10+shopX && mouseY > shopY-10 && mouseY < shopY+10)
    {
      // Draw the shop image
      image(shopsImages[i],shopX,shopY);
      // MeanWhile draw the telphone number
      drawText( "TelPhone : 0416123421" , shopX-100, shopY);
    }
  }
}

function DetectKeyPressed() {
  UserMovement(); // Detect the key, if it is a key for move the user location

  // Clean the insert key , in case it keep going to one position
  key ="";
}

function UserMovement()
{  

  if (key == "d") // if key is d , Going right
  {
    userX += 5; // move user right to 5px;
  }
  else if (key == "a") // if key is a , Going left
  {
    userX -= 5; // move user left to 5px;
  }
  else if (key == "w") //if key is w , Going Up
  {
    userY -= 5; // move user up to 5px;
  } 
  else if (key == "s") //if key is s , Going down
  {
    userY += 5; // move user down to 5px;
  }
}

/*	-----------------------------------------------------------------------
		---------------------Draw Function---------------------------
    ----------------------------------------------------------------------- */
function drawMap()
{
  // Draw the map image 
  image(mapImg, 0,0);
}

function drawText(msg, x, y){
  // A function for drawing text
  fill(0); //color black
  text(msg,x,y); //draw message on x y position
}

function drawUIComponent()
{
  // fill grey color background
  background(220);
  // draw the map to the background
  drawMap();
  // Draw Welcome msg
  drawText("WelCome To Westfield GardenCity Online Map",225, 150 );
  // Draw Garden city phone number
  drawText("mobile number:0432789987",225,170);
}

function drawUserLocation(){
  
  // Draw a circle
  stroke(50);
  // fill color to white
  fill(255);
  // Draw a circie to representing user location
  ellipse(userX, userY, loc_indicator_size, loc_indicator_size);
  // A Msg to signal the user when they are
  drawText("You are here!", userX + loc_indicator_size , userY + loc_indicator_size );
}

/*	-----------------------------------------------------------------------
		---------------------Excute Program Function---------------------------
    ----------------------------------------------------------------------- */
function setup() {
  // draw the UI size
  createCanvas(2500, 1500);
  // set up font
  fontSetUp();
  // load Image from folder
  GetImageFromImagesFolder();
}

function draw() {
  // Draw the basic UI
  drawUIComponent();
  // Check User Interaction
  DetectKeyPressed();
  // Draw the user location on map
  drawUserLocation();
  // Check the mouse location, print the image when it is needed
  ShopImagePopsUp();
}