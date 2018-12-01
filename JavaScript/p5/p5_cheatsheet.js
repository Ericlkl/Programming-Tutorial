
// Global Variable Area 把Setup 和Draw有 需要共用的Variable 放在這邊
var img; // 定義一個圖片的變量 給SetUp 和Draw 共用

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

// 把所有有關於 畫東西的Function放在這
function draw() {
    // 把Canvas的背景調為 數字的這個顏色
    // 使用方法 background（顏色的數字）
    background(100);
    // 打印圖片
    // 使用方法 image(圖片的變量名字 , X開始點, Y開始點);
    image(img,0,0);
}