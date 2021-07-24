// var img = [];
// var index = 0;
// var sohinh = 7;
// for(var i=0;i<sohinh;i++){
//     img[i] = new Image();
//     img[i].src = "img/"+i+".jpg";
// }
// function prev(){
//     index--;
//     if(index < 0){
//         index = img.length - 1;
//     }
//     var anh = document.getElementById("pic");
//     anh.src = img[index].src;
//     document.getElementById("demo").innerHTML = "Ảnh "+index+"/<b style='color:red;'>"+(img.length-1)+"</b>";
// }
// function next(){
//     index++;
//     if(index > img.length - 1){
//         index = 0;
//     }
//     var anh = document.getElementById("pic");
//     anh.src = img[index].src;
//     document.getElementById("demo").innerHTML = "Ảnh "+index+"/<b style='color:blue;'>"+(img.length-1)+"</b>";
// }

app = angular.module("myapp", []);
app.controller("hienthi", xuly);
function xuly($scope) {
    $scope.hinh = ["./img/0.jpg","./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg","./img/6.jpg","./img/7.jpg"];
    $scope.img = "./img/0.jpg";
    $scope.index = 0;
    $scope.prev = function(){
        $scope.index--;
        if($scope.index < 1){
            $scope.index = $scope.hinh.length - 1;
        }
        $scope.img = $scope.hinh[$scope.index];
        console.log($scope.index);
    }
    $scope.next = function(){
        $scope.index++;
        if($scope.index > $scope.hinh.length-1){
            $scope.index = 0;
        }
        $scope.img = $scope.hinh[$scope.index];
        console.log($scope.index);
    }
}