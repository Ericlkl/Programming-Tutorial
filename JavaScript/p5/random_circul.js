function setup() {
    createCanvas(2000, 2000);
  }
  
  function drawUserLocation(){
    
    // Draw a circle
    stroke(50);
    fill(0);
    for(var i = 0; i < 500; i++){
      var x = Math.floor((Math.random() * 1000) + 1);
      var y = Math.floor((Math.random() * 1000) + 1);
         ellipse(x, y, 10, 10); 
    }
    
  }
  
  
  function draw() {
    background(255);
    drawUserLocation();
  }