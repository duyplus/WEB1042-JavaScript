/*
1.câu dụng của DOM
- thay đổi class( thêm hoặc xóa)
- thay đổi thuộc tính(attribute) của thành phần(element) (chỉnh sửa)
- Thêm một thuộc tính(attribute) cho 1 thành phần (element)
- Bắt sự kiện click chuột của người dùng
- Thêm một phần tử gắn vào trong cấu trúc HTML
...
- làm hiệu ứng cho thành phần đó.
2. Muốn thay đổi hay thêm hay xóa các thuộc tính hay thành phần thì phải truy xuất
được đến thành phần đó
2.1 Truy xuất = id của thành phần
document.getElemnetById("chuỗi")==> kết quả trả về là 1 phần tử hay thành phần HTML Element
 */
var demo=document.getElementById("demo");
console.log(demo);
/**
 *2.2 Truy xuat=class của thành phần
 document.getElementByClassName("chuỗi")==> kết quả về là 1 tập họp HTMlCollection ( tức là nhiều thành phần)
 có cấu trúc giống như mảng( có chiều dài (leng) và có thể dùng for để truy xuât) 
 nhưng không phải mảng thì nó không xài được các phương thức của mảng
 - Muốn sử dụng các phương thức của mảng thì phải ép kiểu về mảng dùng
 Array.from(HTLCollection)
 */
var democlass=document.getElementsByClassName("demo");
for(var i=0;i<democlass.length;i++)
{
  console.log("Phan tu thu ",(i+1),democlass[i]);
}
console.log(democlass[1]);
var democlassArry=Array.from(democlass);
console.log(democlassArry.push(1223));
console.log(democlassArry);
/**2.3 Truy xuất = tên thành phần
 * document.getElementByTagName("tên thành phần")=>kêt quả trả về là 1 tập HTMLCollection( nhiều thành phần)

 */
var div=document.getElementsByTagName("div");// tra ve 1 tập htmlcollection
console.log(div[1]);
/**
 * 2.4 Truy xuất = selector của css
 * id=> //dấu //#
 * class =>// dấu chấm
 * Attibute selector : [thuộc tính="giá trị"]
 * Truy xuât bằng selector của css có 2 cách
 * Cách 1: 
 * querySelector("#chuỗi")
 * querySelector(".chuỗi")
 * dùng cách này để thay thế cho 2 cách truy xuất trên 
 * là getElementById và getElementByClassName
 * => kết quả trả về là 1 thành phần đầu tiên mà nó nhìn thấy
 * cách 2:
 * querySelectorAll(chuỗi)=> kết quả trả về là HTMlCollection
 */
var demoID=document.querySelector("#demo");
var demoClass=document.querySelector(".demo");
console.log(demoClass);
var demodata=document.querySelector("[ data-toggle='modal']");
console.log(demodata);
/**
 * Sau khi truy xuất được thành phần của HTML, chúng ta muốn thay đổi thuộc tính của thành phần
 * set/get
 * cách 1:thành phần.SetAttribute("thuộc tính", giá trị), áp dụng cho thuộc tính có sẵn và thuộc tính do người dùng định nghĩa
 * cách 2: thành phần.thuộc tính=giá trị;chỉ áp dụng các thuộc tính có sẵn
 */
// truy xuất được thẻ img
var image=document.getElementById("demo");
// var imgage=document.querySelector("#demo");
var img="./image/2.jpg";
//image.setAttribute("src",img);
// cách 2
image.src=img;
