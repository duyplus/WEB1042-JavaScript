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
    document.getElementById("dongho").innerHTML = h+":"+m+":"+s;
}
dh = setInterval("tg()", 1000);
function start() {
    dh = setInterval("tg()", 1000);
}
function stop() {
    clearInterval(dh);
    dh = null;
}
function xembaihoc() {
    var box = document.getElementById("select");
    var web = box.options[box.selectedIndex].value;
    if (web == 0) {
        alert("Bạn chưa chọn bài học mà");
    } else {
        window.location.href = web;
    }
}

function naplai() {
    window.location.reload();
}