function hienthi(v){
    var vc = document.getElementById("vc");
    vc.style.display = (v==true) ? "" : "none";
}
function kiemtra(){
    var thanhcong = true;
    var thongbao = "";
    // kiểm tra tên sp
    var sp = document.getElementById("tensp");
    if(sp.value.length == 0){ //(sp.value == "")
        thongbao += "Vui lòng nhập tên sản phẩm<br>";
        thanhcong = false;
    }
    // kiểm tra giá
    var gia = document.getElementById("gia");
    if(gia.value == ""){
        thongbao += "Bạn chưa nhập giá<br>";
        thanhcong = false;
    }
    if(isNaN(gia.value) == true){
        thongbao += "Bạn phải nhập giá là số nhé<br>";
        thanhcong = false;
    }
    if(parseInt(gia.value) <= 0){
        thongbao += "Bạn phải nhập giá là số dương<br>";
        thanhcong = false;
    }
    // kiểm tra loại sản phẩm
    var loai = document.getElementById("loai");
    if(loai.value == ""){
        thongbao += "Chọn 1 loại sản phẩm đi<br>";
        thanhcong = false;
    }
    // kiểm tra nơi nhận hàng
    var radios = document.getElementsByName("diachi");
    if(radios[0].checked == false && radios[1].checked == false){
        thongbao += "Vui lòng nhập nơi giao hàng<br>";
        thanhcong = false;
    }

    if(thongbao == ""){
        thongbao = "Nhập đúng dữ liệu";
    }
    document.getElementById("kq").innerHTML = thongbao;
    return thanhcong;
}