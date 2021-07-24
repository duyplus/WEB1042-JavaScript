function checknum(f0){
    if (isNaN(f0)==true){
        return f0;
    }
}
function checknum1(f1){
    if (isNaN(f1)==true){
        return f1;
    }
}
var f0 = parseInt(prompt("Nhập số f0:"));
var f1 = parseInt(prompt("Nhập số f1:"));

var check = checknum(f0);
var check1 = checknum1(f1);
 
if (check == true){}else{
    f0 = 1;
}
if (check1 == true){}else{
    f1 = 2;
}

var n;
do{
    n = parseInt(prompt("Nhập số lượng:"));
    if(isNaN(n)==true){
        alert("Warning: Vui lòng nhập đúng số lượng!");
    }
}while(isNaN(n)==true);

for(var i=0;i<n;i++){
    var f = f0 + f1;
    f0 = f1;
    f1 = f;
    document.write("<span class='number'> "+f+" </span>");
}