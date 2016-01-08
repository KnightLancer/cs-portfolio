var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");

var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");
var info5 = document.getElementById("info5");
var info6 = document.getElementById("info6");
var info7 = document.getElementById("info7");
var info8 = document.getElementById("info8");
var info9 = document.getElementById("info9");
var info10 = document.getElementById("info10");

item1.addEventListener("click", function(){
    info1.innerHTML = "Some stuff";
    info2.innerHTML = "some other stuff";
});
                       
item2.addEventListener("click", function(){
    info3.innerHTML = "Item 2 stuff";
    info4.innerHTML = "Item 2 other stuff";
});

item3.addEventListener("click", function(){
   info5.innerHTML = "Item 3 stuff";
   info6.innerHTML = "Item 3 more stuff";
});

item4.addEventListener("click", function(){
    info7.innerHTML = "Item 4 stuff";
    info8.innerHTML = "Item 4 more stuff";
})

item5.addEventListener("click", function(){
    info9.innerHTML = "Item 5 stuff";
    info10.innerHTML = "Item 5 more stuff";
})