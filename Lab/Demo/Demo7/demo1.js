/*
  1. Công dụng của DOM
    thay đổi class (thêm hoặc xoá)
    thay đổi thuộc tính(attribute) của thành phần(element) (chỉnh sửa)
    thêm một thuộc tính(attribute) cho 1 thành phần(element)
    Bắt sự kiện click chuột của người dùng
    thêm một phần tử gắn vào trong cấu trúc HTML
    ...
    Làm hiệu ứng cho thành phần đó
  2. Muốn thành đổi hay thêm hay xoá các thuộc tính hay thành phần thì phai truy xuất
  được đến thành pahanf đó 
  2.1 Truy xuất = id của thành phần
    document.getElementById("chuỗi") ==> kết quả trả về là 1 phần tử hay thành phần HTML element
*/
var demo = document.getElementById("demo");
console.log(demo);
/*
  2.2 Truy xuất = class của thành phần
  document.getElementsByClassName("chuỗi") ==> kết quả trả về là 1 phần tử hay thành phần HTML Collection

*/
var democlass = document.getElementsByClassName("demo");
for(var i=0;i<democlass.length;i++){
    console.log("Phần tử thứ",(i+1),democlass[i]);
}
console.log(democlass[1]);
/* */
var democlasAR = Array.from(democlass);
console.log(democlasAR.push(12345));
console.log(democlasAR);

/* */
var div = document.getElementsByTagName("div");
console.log(div[1]);

/* */
var demosID = document.querySelector("#demo");
var demoClass = document.querySelector(".demo");
console.log(demoClass);
var demodata = document.querySelector('[data-toggle="model"]');

// Try xuất được thẻ img
var image = document.getElementById("demo");
// 