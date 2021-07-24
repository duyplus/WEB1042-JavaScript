function them(button){
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.innerText = "Xoá";
    btnXoa.setAttribute('onclick','xoa(this)');
    document.getElementById("cart").appendChild(row);
    tinhtong();
    document.getElementById("cart").style.display="";
}
function xoa(button){
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
    tinhtong();
}
function tinhtong(){
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr");
    var tong = 0;
    for(var i=0;i<rows.length;i++){
        var price = rows[i].children[2].innerText;
        price = parseInt(price);
        tong += price;
    }
    document.getElementById("tong").innerText = tong;
}
function daott(obj){
    var row = obj.parentElement.parentElement;
    var btn = row.getElementsByTagName("button")[0];
    btn.disabled = ! btn.disabled;
}
document.getElementById("cart").style.display="none";