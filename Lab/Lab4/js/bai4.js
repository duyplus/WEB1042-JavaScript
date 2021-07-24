var w; //cửa số sẽ điều khiển
function moWin(){
    w = window.open("bai4-tt.html","tt","width=500,height=500,top=50,left=900");
    w.focus();
}
function dichuyen(){
    w.moveBy(5,10);
    w.focus();
}
function dichuyen1(){
    var x = parseInt(prompt("Nhập X:"));
    var y = parseInt(prompt("Nhập Y:"));
    w.moveTo(x,y);
    w.focus();
}