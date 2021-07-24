app = angular.module("b1", []);
app.controller("hienthi", xuly);
function xuly($scope) {
    $scope.hoten = "Nguyễn Hoàng Duy";
    $scope.ngaysinh = "22/08/1999";
    $scope.gender = "Nam";
    $scope.photo = "duy.jpg";
    $scope.mark = 9.9;
}