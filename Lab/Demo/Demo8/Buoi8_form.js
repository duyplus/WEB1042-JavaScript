function myfuntion()
{
  var x=document.forms["frm"];
  var text="";
  for(var i=0;i<x.length;i++)
  {
    text+=x.elements[i].value+"<br>";
  }
  document.getElementById("pdemo").innerHTML=text;
}
/*
  document.anchors: trả về tất cả thành phần <a> có thuộc tính name
  document.body: trả về tất cả thành phần nằm trong thẻ body
  document.forms: trả về tất cả thành phần nằm trong forms
  document.links: trả về tất cả thành <a> và <area> có thuộc tính  href
  document.image: trả về tất cả thành phần là image
  document.script: trả về tất cả thành phần là script
  document.title: trả về tiêu đề
  document.head: trả về tất cả thành phần là head
  document.documentElement: trả về tất cả thành phần HTML
 */