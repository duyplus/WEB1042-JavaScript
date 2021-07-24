var a,b,c;
do{
    a = parseInt(prompt("Nhập số a:"));
    if(isNaN(a)==true){
        alert("Nhập sai, vui lòng nhập lại!");
    }
}while(isNaN(a)==true);
do{
    b = parseInt(prompt("Nhập số b:"));
    if(isNaN(b)==true){
        alert("Nhập sai, vui lòng nhập lại!");
    }
}while(isNaN(b)==true);
do{
    c = parseInt(prompt("Nhập số c:"));
    if(isNaN(c)==true){
        alert("Nhập sai, vui lòng nhập lại!");
    }
}while(isNaN(c)==true);

var delta = Math.pow(b,2)-4*a*c;

if(a==0){
    document.write("<b>Đây không phải phương trình bật 2:</b></br>");
    document.write(a+"x<sup>2</sup> + "+b+"x + "+c+" = 0");
}else{
    document.write("<b>Đây là phương trình bật 2:</b></br>");
    document.write(a+"x<sup>2</sup> + "+b+"x + "+c+" = 0");
    if(delta<0){
        document.write("<p><b>Phương trình vô nghiệm!</b></p>");
    }else if(delta==0){
        var x0 = -b/(2*a);
        document.write("<p>Phương trình có nghiệm kép x<sub>0</sub> = <b>"+x0+"</b></p>");
    }else{
        var x1 = (-b + Math.sqrt(delta))/(2*a);
        var x2 = (-b - Math.sqrt(delta))/(2*a);
        document.write("<p><b>Phương trình có 2 nghiệm:</b></p>");
        document.write("<p>x<sub>1</sub> = <b>"+x1+"</b></p>");
        document.write("<p>x<sub>2</sub> = <b>"+x2+"</b></p>");
    }
}