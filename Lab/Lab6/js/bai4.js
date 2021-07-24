function checksearch() {
    if (document.formtim.tukhoa.value == 'Tìm kiếm') {
        alert("Bạn chưa nhập từ khóa tìm kiếm…");
        document.formtim.tukhoa.focus();
        return false; // Chặn form không cho submit
    }
    return true; // Cho submit form khi đã kiểm tra xong
}
function checklogin() {
    if (document.flogin.u.value == '') {
        alert("Bạn chưa nhập username");
        document.flogin.u.focus(); //Chọn đối tượng u
        return false; // Chặn form không cho submit
    }
    if (document.flogin.p.value == '') {
        alert("Bạn chưa nhập password");
        document.flogin.p.focus(); //Chọn đối tượng p
        return false;
    }
    return true; // Cho submit form khi đã kiểm tra xong
}
function random1(num) {
    var rand;
    var n = "";
    for(var i=0;i<num;i++) {
        rand = Math.floor(Math.random() * 10);
        n += rand.toString();
    }
    return n;
}
function random2(num) {
    var rand;
    var n = "";
    for(var i=0;i<num;i++) {
        rand = Math.floor(Math.random() * 10);
        n += rand.toString();
    }
    return n;
}
document.getElementById("rand1").value = random1(1);
document.getElementById("rand2").value = random2(1);
function checkmath(){
    if (random1(1) == false || random2(1) == false) {
        alert("SAI RỒI BÉ IU");
        return false;
    }else{
        alert("GIỎI QUÁ BÉ ƠI");
    }
    return true;
}