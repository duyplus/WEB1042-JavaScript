var images = [];
var index = 0;
var sohinh = 11;
for(var i=0;i<sohinh;i++){
    images[i] = new Image();
    images[i].src = "img/"+i+".jpg";
}
function first(){
    // alert("Hình đầu tiên");
    index = 0;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    
}
function last(){
    // alert("Hình cuối cùng");
    index = images.length - 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}
function next(){
    // alert("Hình kế tiếp");
    index++;
    if(index > images.length - 1){
        index = 0;
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}
function prev(){
    // alert("Hình kế trước");
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}