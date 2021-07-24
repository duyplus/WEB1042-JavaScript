var nam = 1999;
var nam1;
var tuoi;
// hàm tính tuổi
function tinhTuoi(){
    tuoi = 2021-nam;
    document.write("Tuổi 1 là: ",tuoi);
}
//hàm có tham số
function tinhTuoi1(nam1){
    tuoi = 2021-nam1;
    document.write("Tuổi 2 là: ",tuoi);
}
//hàm có return
function tinhTuoi2(){
    tuoi = 2021-nam;
    return tuoi;
}
var test = tinhTuoi2();

var tinhTuoi3 = function(){
    tuoi = 2021-nam;
    document.write("Tuổi 3 là: ",tuoi);
}

var tinhTuoi4=()=>{
    tuoi = 2021-nam;
    document.write("Tuổi 4 là: ",tuoi);
}

var h = new Date();
var year = h.getFullYear();
console.log("Year: "+year);