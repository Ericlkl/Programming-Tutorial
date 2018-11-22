/*
    創做一個Variable，叫做money, 儲300塊進去
    創做一個Variable，叫做GU_student 為 true
    創做一個Variable，叫做join_course 為 false
*/

var money = 3000;
var GU_student = false;
var joined_course = false;
var Course_I_Joined = 0;
var course_fee = 4000;

if (money > 16000){
    joined_course = true;
    GU_student = true;

    for(var loop = 0; course_fee < money ; loop = loop + 1){
        money = money - course_fee;
        Course_I_Joined = Course_I_Joined + 1;
    }
}

console.log("I have $" + money);
console.log("Am I a GU Student : " + GU_student);
console.log("Did i joined the course : " + joined_course);
console.log("How many course I have joined : " + Course_I_Joined);

/*
    打印 "我現在開始要做Quiz了" <- 去電腦視𥦬
    打印 "Section 1 : " <- 去電腦視𥦬
    打印 "我現在有$ 'money的值'" <- 去電腦視𥦬
*/
console.log("我現在開始要做Quiz了");
console.log("section 1: ");
console.log("I have $" + money);
console.log("Am i a GU student"+ GU_student)

/*
    創做一個Variable，叫做 hours_per_day 為 24       <-這是儲存 一天有多少個小時
    創做一個Variable，叫做 days_per_week 為 7        <-這是儲存 一星期有多少天
    創做一個Variable，叫做 weeks_per_month 為 4.1    <-這是儲存 一個月有多少星期

    創做一個Variable，叫做 hours_per_month           <- 問題 ： 這是儲存跟計算 一個月有多少個小時
    計算方法 為 hours_per_day 乘 days_per_week 乘 weeks_per_month 
    打印 "一個月有總共 'hours_per_month的值' 小時！ " <- 去電腦視𥦬
*/

var hours_per_day = 24;
var days_per_week = 7;
var weeks_per_month = 4.1;

var hours_per_month = weeks_per_month * days_per_week * hours_per_day;
console.log("一個月有總共" + hours_per_month + " Hours " + days_per_week + " Days per week" );

/*
    打印 "Section 2 : " <- 去電腦視𥦬
    這個部分我們做一個 真實情況 條件類 的程序

    創做一個 If/else 公式
    如果你是 GU_student 的話， join_course 變為true
    ------------------ 之後呢 ----------------------
    打印 "能不能參加這個Course" <- 去電腦視𥦬
    打印 join_course 的值 <- 去電腦視𥦬
*/

console.log("section 2");
if (GU_student === true){
    joined_course = true;
}

console.log("能不能參加這個Course");
console.log(join_course);

/*
    創做一個 If/else if / else 公式
    條件 1
    如果 你的錢多過或者等於300的話
    打印 "我現要去旅行了" <- 去電腦視𥦬
*/
if(moeny >= 300){
    console.log("我現要去旅行了");
}

/*
    條件 2
    如果 你的錢多過或者等於100的話
    打印 "我現要去唱K了" <- 去電腦視𥦬
*/
else if (moeny>=100){
console.log("我現要去唱K了");
}


/*
    條件 3
    如果 你的錢大於或者等於50的話
    打印 "我現要去唱K了" <- 去電腦視𥦬
*/
else if(moeny >=50){
    console.log("我現要去唱K了");
}

/* 
    其他條件/別的情況
    打印 我現要去唱K了" <- 去電腦視𥦬
*/
else{
    console.log("我現要去唱K了");
}

/*
    打印 "Section 3 : " <- 去電腦視𥦬
    這個部分我們儲做一個 澳元兌Rmb的程序

    創做一個Variable，叫做 items_in_aud 為 14.9             <-這是儲存 物品在澳大利亞的價錢
    創做一個Variable，叫做 aud_to_rmb 為 5.3041             <-這是儲存 澳元兌RMB的兌率
    創做一個Variable，叫做 items_in_rmb 去計算 物品的價錢      <-這是儲存 物品在大陸的價錢
    公式應該是 (澳洲物品價格 * 0.9) * 兌率
*/

var items_in_aud=14.9;
var aud_to_rmb=5.3041;
var items_in_rmb = (items_in_aud*0.9)*aud_to_rmb;

/*
    打印 "Section 4 : " <- 去電腦視𥦬
    這個部分我們儲做一個 澳元兌Rmb的程序

    創做一個Variable，叫做 height 為 3  <- 高度          
    創做一個Variable，叫做 width 為 4   <- 闊度          
    創做一個Variable，叫做 area 去計算 三角型面積
    公式是 高度 乘 闊度 / 2
    打印 "Area : 'area的值' " <- 去電腦視𥦬
*/

console.log("Section 4 : ");

var height = 3;
var width = 4;
var area = height * width / 2;
console.log("Area : " + area);