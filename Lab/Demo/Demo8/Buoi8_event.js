/* SỰ KIỆN TRÊN DOM
  - khi người dùng click chuột
  - khi trang web được load
  - khi hình ảnh được load
  - khi người dùng chi chuyển chuột
  - khi nguoiwfi dùng thay đổi trong thẻ input
  - khi người dùng nhấn phím
 */
function myfunction()
{
  var x=document.getElementById("inputdemo");
  x.value=x.value.toUpperCase();
}
function over(obj)
{
  obj.style.backgroundColor="#1ec5e5";
  obj.innerHTML="Mouseover";
}
function ChangeText(id)
{
  id.innerHTML="a hi ha ha";
}