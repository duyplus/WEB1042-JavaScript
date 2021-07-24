var so1,so2;
do{
    so1 = parseInt(prompt("Nhập số số 1:"));
    if(isNaN(so1)==true){
        alert("Warning: Không được phép nhập chữ!");
    }
}while(isNaN(so1)==true);
do{
    so2 = parseInt(prompt("Nhập số số 2:"));
    if(isNaN(so2)==true){
        alert("Warning: Không được phép nhập chữ!");
    }
}while(isNaN(so2)==true);

var pheptinh = prompt("Nhập phép tính (+,-,*,/):");

switch(pheptinh){
    case '+':
        var kq = so1+so2;
        document.write("<p>Kết quả "+so1+" + "+so2+" là: <b>"+kq+"</b></p>");
        break;
    case '-':
        var kq = so1-so2;
        document.write("<p>Kết quả "+so1+" - "+so2+" là: <b>"+kq+"</b></p>");
        break;
    case '*':
        var kq = so1*so2;
        document.write("<p>Kết quả "+so1+" * "+so2+" là: <b>"+kq+"</b></p>");
        break;
    case '/':
        var kq = so1/so2;
        document.write("<p>Kết quả "+so1+" / "+so2+" là: <b>"+kq+"</b></p>");
        break;
    default:
        document.write("Warning: Phép tính (<b>"+pheptinh+"</b>) không được phép, vui lòng nhập (+,-,*,/)!");
        break;
}