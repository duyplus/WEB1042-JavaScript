var so1 = null;
var so2 = null;
var pheptinh = null;
var kq = null;

function ganso(x){
    if(so1==null){
        so1 = x;
        document.getElementById("so1").innerText = x;
        // console.log(so1);
    }
    else{
        so2 = x;
        document.getElementById("so2").innerText = x;
        // console.log(so2);
    }
}
function ganpt(x){
    pheptinh = x;
    // console.log(x);
    document.getElementById("pt").innerText = x;
}
function result(){
    if(pheptinh=="+") kq = so1+so2;
    if(pheptinh=="-") kq = so1-so2;
    if(pheptinh=="x") kq = so1*so2;
    if(pheptinh==":") kq = (so1/so2).toFixed(2);
    //alert(kq);
    console.log(kq);
    document.getElementById("kq").innerText = kq;
}
function reset(){
    so1 = null;
    so2 = null;
    pheptinh = null;
    kq = null;
    document.getElementById("so1").innerText = null;
    document.getElementById("so2").innerText = null;
    document.getElementById("pt").innerText = null;
    document.getElementById("kq").innerText = null;
}
function undo() {
    var res = result.innerHTML;
    result.innerHTML = res.substring(0, res.length - 1);;
}