var dh = null;
function tg() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("dongho").innerHTML = h + " : " + m + " : " + s;
}
dh = setInterval("tg()", 1000);
function tinhtien() {
    var nguoilon_arr = document.getElementsByClassName("nl");
    var treem_arr = document.getElementsByClassName("te");
    var sotien_arr = document.getElementsByClassName("tien");
    var tongnguoilon = 0, tongtreem = 0, tongtien = 0;
    for (var i = 0; i < nguoilon_arr.length; i++) {
        var songuoilon = nguoilon_arr[i].innerText;
        var sotreem = treem_arr[i].innerText;
        songuoilon = parseInt(songuoilon);
        sotreem = parseInt(sotreem);

        tongnguoilon += songuoilon;
        tongtreem += sotreem;

        t = songuoilon*1000000 + sotreem*600000;
        tongtien = + t;
        sotien_arr[i].innerText = t;
    }
}
function sum(obj){
    var row = obj.parentNode;
    tongnl = row.children[1].innerText;
    tongte = row.children[2].innerText;
    tongtien = tongnl * 1000000 + tongte * 600000;
    row.children[3].innerText = tongtien;
}
function tien(obj) {
    var row = obj.parentNode;
    sonl = row.children[1].innerText;
    sote = row.children[2].innerText;
    t = sonl * 1000000 + sote * 600000;
    row.children[3].innerText = t;
}
function anhien() {
    var row_arr = document.getElementsByClassName("row");
    for (var i = 1; i < row_arr.length - 1; i++) {
        if (row_arr[i].style.display == "none") {
            row_arr[i].style.display = "";
        } else {
            row_arr[i].style.display = "none";
        }
    }
}
$("div").on("keydown", function (event) {
    if (event.which != 8 && event.which != 46 && isNaN(String.fromCharCode(event.which))) {
        event.preventDefault();
    }
})