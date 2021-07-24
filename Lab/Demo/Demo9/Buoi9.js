/*Navigattion: điều hướng giữa các nút trong JS
. parentNode--> trả về nút cha
. parentElement--> trả về nút cha, nó trả null 
. childNode[vị trí nút con]--> trả về nút con
. firstNode --> trả về nút con đầu tiên
. lastNode --> nút con cuối cùng
. nextSibling
ChildNode và NodeValue: Truy cập đến thuộc tính innerHTM giống như truy cập vào 
giá trị nút của phần tử con đầu tiên
 */
// var a=document.getElementById("demo").childNodes[1];
// console.log("Con là: ",a);
// // tìm cha
// var parent=document.getElementById("p2").parentNode;
// console.log("parent: ",parent);
// // tìm con đầu lòng
// var fchild=document.getElementById("demo").firstChild.nodeValue;
// console.log("Con đầu lòng: ",fchild);
/*
  Thuộc tính nodeValue: chỉ định giá trị của nút
  nodeValue cho text nodes 
  nodeValue cho thuộc tính
  nodeType: chỉ đọc trả về loại của nut
 */
// document.getElementById("iddemo").innerHTML=document.getElementById("iddemo1").nodeType;
/**
 * nodeName -- trả về tên của node, giống tên thẻ
 */
/*
  Tạo node và xóa node
  Để thêm một thành phần mới vào HTML DOM, trước tiên phải tạo được phần tử (nút phần tử)
  sau đó nối phần tử vào thành phần cần thêm vào
  createElement("thành phần")
  createTextNode("nội dung của thành phần")
  <p> hii </p>
  Sau khi tao được thành phần thì dùng phương thức appendChild("thành phần vừa tạo")
  appendChild-- thêm ở dưới
  insertBefore--> thêm trước thành phần nào mình cần chèn
 */
// var para=document.createElement("p")
// var textnode=document.createTextNode("This is....")
// // đưa nội dung vào thành phần
// para.appendChild(textnode); //<p> this is....</p>
// // đưa thành phần vừa tạo vào div
// var parent=document.getElementById("demo");
// parent.appendChild(para);
// dùng insertBefore
var para=document.createElement("p")
var textnode=document.createTextNode("This is....")
// đưa nội dung vào thành phần
para.appendChild(textnode); //<p> this is....</p>
// đưa thành phần vừa tạo vào div
// truy xuất đến p1
var child=document.getElementById("p2");
var parent=document.getElementById("demo");
parent.insertBefore(para,child);
/**
 * Xóa đi thành phần
 * remove
 * Lưu ý: Đối với trình duyệt không hỗ trợ phương thức remove(),
 *  thì phải tìm nút cha để xóa phần tử đó thì dùng removeChild
 */
// function myfunction()
// {
//   var elemt=document.getElementById("p1");
//   elemt.remove();
// }
// truy xuất đên thành phần cha
// var parent=document.getElementById("demo");
// var child=document.getElementById("p1");
// parent.removeChild(child);
/*
Thay thế replaceChild(thanh phan moi, thanh phan bị thay thế)
 */
var child=document.getElementById("p2");
// tao nut moi
var para= document.createElement("p");
var textnode=document.createTextNode("This is...");
para.appendChild(textnode);// <p> this is.....</p>
var parent=document.getElementById("divdemo");
parent.replaceChild(para,child);