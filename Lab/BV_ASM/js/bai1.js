function fover() {
    var h = document.getElementById("hinh");
    h.src = "img/hinh2.jpg";
}
function fout() {
    var h = document.getElementById("hinh");
    h.src = "img/hinh1.jpg";
}
function hien() {
    var x = document.getElementById("anhien");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}
function an() {
    var x = document.getElementById("anhien");
    x.style.display = "none";
}
function naplai() {
    window.location.reload();
}