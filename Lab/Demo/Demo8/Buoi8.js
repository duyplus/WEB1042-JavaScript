// truy cập được đến thành phần mà cần thay đổi
/* thay đổi nội dung thì dung innerHTML
-- cú pháp thành phần.innerHTML=new value;
*/
var x=document.getElementById("pdemo");
x.innerHTML="Chào buổi chiều";
/* cách 1: setAttribute("thuộc tính", giá trị)// gán giá trị mới cho thuộc tinh
cách 2: thành phần. thuộc tính=giá trị
  * Lấy giá trị của thuộc tính getAttribute("thuộc tính")=> trả về giá trị
 */
var y=document.querySelectorAll("[data-title");
// console.log(y);
var tmp='';
for(var i=0;i<y.length;i++)
{
  tmp=tmp+y[i].getAttribute("data-title")+" ";
}
document.getElementById("pdemo").setAttribute("data-title",tmp);
console.log(tmp);