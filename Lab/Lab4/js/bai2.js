var sv = new Object();
sv.hoTen = prompt("Họ và tên:");
do{
    sv.diem = parseInt(prompt("Điểm:"));
    if(isNaN(sv.diem)==true){
        alert("Warning: Không được phép nhập chữ!");
    }
}while(isNaN(sv.diem)==true);
sv.hienThi = function(){
    if(this.diem >= 5){
        this.hocLuc = "Đậu";
    }else{
        this.hocLuc = "Rớt";
    }
    document.getElementById("kq").innerHTML = "<p>Họ và tên: <b>"+this.hoTen+"</b></p>";
    document.getElementById("kq1").innerHTML = "<p>Điểm TB: <b>"+this.diem+"</b></p>";
    document.getElementById("kq2").innerHTML = "<p>Học lực: <b>"+this.hocLuc+"</b></p>";
}
sv.nhap = function(){
    document.getElementById("kq").innerHTML = null;
    document.getElementById("kq1").innerHTML = null;
    document.getElementById("kq2").innerHTML = null;
    sv.hoTen = prompt("Họ và tên:");
    do{
        sv.diem = parseInt(prompt("Điểm:"));
        if(isNaN(sv.diem)==true){
            alert("Warning: Không được phép nhập chữ!");
        }
    }while(isNaN(sv.diem)==true);
}