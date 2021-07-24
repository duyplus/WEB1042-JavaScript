var dh=null;
function tg(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    if(h < 10){
        h ="0" + h;
    }
    if(m < 10){
        m ="0" + m;
    }
    if(s < 10){
        s ="0" + s;
    }
    document.getElementById("dongho").innerHTML = h + " : " + m + " : " + s;
}
dh = setInterval("tg()", 1000);
function startstopDH(){
    if(dh == null){
        dh = setInterval("tg()", 1000);
    }else{
        clearInterval(dh);
        dh = null;
    }
}
function naplai(){
    window.location.reload();
}
var t = setTimeout("window.alert('Tôi là Nguyễn Hoàng Duy. Chào bạn! Chúc an lành.');",10000);
document.getElementById("lc").innerHTML = t;