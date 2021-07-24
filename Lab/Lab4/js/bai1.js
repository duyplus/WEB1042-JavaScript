var ptb2 = new Object();
ptb2.a = null;
ptb2.b = null;
ptb2.c = null;
ptb2.nhap = function(){
    do{
        this.a = parseInt(window.prompt("Nhập số a:"));
        if(isNaN(this.a)==true){
            alert("Nhập sai, Bắt buộc phải nhập số!");
        }
    }while(isNaN(this.a)==true);
    do{
        this.b = parseInt(window.prompt("Nhập số b:"));
        if(isNaN(this.b)==true){
            alert("Nhập sai, Bắt buộc phải nhập số!");
        }
    }while(isNaN(this.b)==true);
    do{
        this.c = parseInt(window.prompt("Nhập số c:"));
        if(isNaN(this.c)==true){
            alert("Nhập sai, Bắt buộc phải nhập số!");
        }
    }while(isNaN(this.c)==true);
    var str = this.a+"x<sup>2</sup> + "+this.b+"x + "+this.c+" = 0";
    document.getElementById("pt").innerHTML = str;
}
ptb2.giai = function(){
    var delta = Math.pow(this.b,2) - 4*this.a*this.c;
    console.log("delta:",delta);
    if(delta < 0){
        /// alert("Phương trình vô nghiệm!");
        document.getElementById("vonghiem").innerHTML = "Phương trình vô nghiệm!";
    }else if(delta == 0){
        // alert("Phương trình có nghiệm kép:");
        var x = -this.b/(2*this.a);
        document.getElementById("title").innerHTML = "Phương trình có nghiệm kép:";
        document.getElementById("demo").innerHTML = "x = ";
        document.getElementById("x").innerText = x.toFixed(2);
    }else{
        // alert("Phương trình có 2 nghiệm:");
        var x1 = (-this.b-Math.sqrt(delta))/(2*this.a);
        var x2 = (-this.b+Math.sqrt(delta))/(2*this.a);
        document.getElementById("title1").innerHTML = "Phương trình có 2 nghiệm:";
        document.getElementById("demo1").innerHTML = "x<sup>1</sup> = ";
        document.getElementById("x1").innerText = x1.toFixed(2);
        document.getElementById("demo2").innerHTML = "x<sup>2</sup> = ";
        document.getElementById("x2").innerText = x2.toFixed(2);
    }
}
function reset() {
    document.getElementById("vonghiem").innerHTML = null;
    document.getElementById("title").innerHTML = null;
    document.getElementById("demo").innerHTML = null;
    document.getElementById("x").innerHTML = null;
    document.getElementById("title1").innerHTML = null;
    document.getElementById("demo1").innerHTML = null;
    document.getElementById("x1").innerHTML = null;
    document.getElementById("demo2").innerHTML = null;
    document.getElementById("x2").innerHTML = null;
}