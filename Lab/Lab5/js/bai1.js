function hienthi(){
    var tensp = document.getElementById("ten").innerText;
    var soluong = document.getElementById("qty").value;
    var gia = document.getElementById("pro").getAttribute("data-price");
    var tinhtien = gia*soluong;
    
    document.getElementById("name").innerText = tensp;
    document.getElementById("amount").innerText = "$"+tinhtien;
}