var dangky = document.getElementById("submit");
register.onclick = function() {
    return kiemtra();
}

function kiemtra() {
    var errors = false;
    var input = document.forms["register"].getElementsByTagName('input');
    var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
    for (var i = 0; i < input.length; i++) { // 7 thẻ input
        var value = input[i].value; // lấy ra value của từng input
        var id = input[i].getAttribute('id'); // trả ra thuộc tính của id input dau tien=username
        var span = document.createElement('span');
        var p = input[i].parentNode;
        if (p.lastChild.nodeName == 'SPAN') {
            p.removeChild(p.lastChild);
        }
        if (value == '') {
            span.innerHTML = "Thông tin yêu cầu";
        } else {
            if (id == 'masv') {
                if (value.length < 6) {
                    span.innerHTML = "Mã sinh viên phải trên 6 ký tự";
                }
            }
            if (id == 'email') {
                if (reg_mail.test(value) == false) {
                    span.innerHTML = "Email nhập lại chưa đúng, phải có chữ @";
                }
            }
            if (id == 'gender') {
                if ($('input[name=gender]:checked').length > 0) {
                    span.innerHTML = "Vui lòng chọn giới tính";
                }
            }
        }
        if (span.innerHTML != '') {
            p.appendChild(span);
            errors = true;
            span.style.color = "red";
            input[i].style.border = '1px solid #c6807b';
            input[i].style.background = '#fffcf9';
        }
    }
    if (errors == false) {
        alert('Đăng ký thành công');
    }
    return !errors;
}