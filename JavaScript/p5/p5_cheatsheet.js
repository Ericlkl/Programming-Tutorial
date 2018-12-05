
// Global Variable Area 把Setup 和Draw有 需要共用的Variable 放在這邊
var img; // 定義一個圖片的變量 給SetUp 和Draw 共用

// 在系統運行SetUp 和 Draw 之前會先運行這個功能
function preload(){

}

// 說明一下 字體位置的輸入方法
// ../  <-這個文件的上一層文件夾的意思
// ./ 《- 存了這個文件的 文件夾 位置

// 設定文字的功能
function fontSetUp(){ //名字是我改的 並不是系統原本就有
    // Set text characteristics

    // 讀取字體的文件 
    // 使用方法 loadFont('字體位置')
    font = loadFont('font/Roboto-BlackItalic.ttf'); 
    textFont(font); //設定打印的文字是用剛讀取的字體
    textSize(fontsize); //設定文字大小
    textAlign(CENTER, CENTER); //文字的顯示方法
}

// 打印文字的功能
function drawText(){ //名字是我改的 並不是系統原本就有

    fill(255); //這個功能用於 接下來打印的文字將會是 什麼顏色 255＝白色 ， 0＝黑色
    
    // 打印文字出去油畫位置
    // 使用方法， text("需要顯示的文字", X開始點， Y開始點)；
    text("Cherry", 400,400);
}  

// Set UP Container
// 把所有設定的Function放在這
function setup() {
    // 設定油畫
    // 使用方法 createCanvas(X開始點, Y開始點);
    createCanvas(400, 400);

    // 讀取圖片 放進執Img 變量
    // 使用方法 loadImage("檔案位置")
    img = loadImage("assets/" + i + ".jpg")
}

// How to use keybroad key
function keyPressed() {
  // Key 是一個string字串Variable 去判你按了什麼Key
  if (key >= 'a' && key <= 'z') { //當你按了a-z的字母Key時
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
}

function drawCircle(){
  //一個打印圓圈的功能
  stroke(50);  
  fill(255); //圓圈的顏色
  ellipse(0, 0, 20, 20); //打印圓圈在 X Y 位置
  // 使用方法 ellipse(X開始點,Y開始點,大小，大小)
}

// 一個感應鼠標按下去之後要幹什麼的功能
function mousePressed() {
  // 當滑鼠按Canvas的時候始動
  if (mouseIsPressed){
    console.log(mouseX);
    console.log(mouseY);
}


// 把所有有關於 畫東西的Function放在這
function draw() {
    // 把Canvas的背景調為 數字的這個顏色
    // 使用方法 background（顏色的數字）
    background(100);
    // 打印圖片
    // 使用方法 image(圖片的變量名字 , X開始點, Y開始點);
    image(img,0,0);
    console.log(mouseX);  // mouseX 是讀取鼠標的X位置
    console.log(mouseY);  // mouseY  是讀取鼠標的Y位置
    
    // 自己定義的X 跟Y 位置
    var x = 100;
    var y = 100;
    // 這個意思是說 鼠標到約某位置的事候幹點什麼
    if(mouseX > x -10 && mouseX < 10 + x && mouseY > y - 10 && mouseY < y +10)
    {
      //幹點什麼事
    }
}