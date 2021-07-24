// function kiemtra() {
//     var idsv = document.myform.masv.value;
//     var tensv = document.myform.tensv.value;
//     var mail = document.myform.email.value;
//     var selectBox = document.myform.box.value;
//     var textarea1 = document.myform.textarea2.value;
//     var reg_mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     //check mã sv
//     if (idsv == null || idsv == "") {
//         document.getElementById("code").innerHTML = "Vui lòng điền mã sinh viên!";
//     } else {
//         document.getElementById("code").innerHTML = "";
//     }
//     // check họ tên
//     if (tensv == null || tensv == "") {
//         document.getElementById("ten").innerHTML = "Vui lòng điền họ và tên!";
//     } else {
//         document.getElementById("ten").innerHTML = "";
//     }
//     // check email
//     if (mail == "" || mail == null) {
//         document.getElementById("emailsv").innerHTML = "Vui lòng nhập đúng email";
//     } else if(reg_mail.test(value) == false){
//         document.getElementById("emailsv").innerHTML = "Email phải có chữ @";
//     } else {
//         document.getElementById("emailsv").innerHTML = "";
//     }
//     // check giới tính
//     if ($('input[name=gender]:checked').length > 0) {
//         document.getElementById("genders").innerHTML = "";
//     } else {
//         document.getElementById("genders").innerHTML = "Vui lòng chọn giới tính";
//     }
//     // check sở thích
//     if ($('input[name=fav]:checked').length > 0) {
//         document.getElementById("favs").innerHTML = "";
//     } else {
//         document.getElementById("favs").innerHTML = "Hãy chọn sợ thích của bạn";
//     }
//     // check quốc gia
//     if (selectBox == 0) {
//         document.getElementById("boxf").innerHTML = "Bạn chưa chọn quốc gia";
//     } else {
//         document.getElementById("boxf").innerHTML = "";
//     }
//     // check ghi chú
//     if (textarea1 == "" || textarea1 == null) {
//         document.getElementById("textareas").innerHTML = "Vui lòng nhập thêm ghi chú";
//     }
//     else if(textarea1.length < 50 || textarea1.length > 1000){
//         document.getElementById("textareas").innerHTML = "Hãy nhập ghi chú từ 50 đến 1000 ký tự";
//     } else {
//         document.getElementById("textareas").innerHTML = "";
//     }
//     // trả về
//     return false;
// }


app = angular.module("myapp", []);
app.controller("hienthi", xuly);
function xuly($scope) {
    return true;
}

function naplai() {
    window.location.reload();
}