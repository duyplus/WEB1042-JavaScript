app = angular.module("myapp", []);
app.controller("hienthi", xuly);
function xuly($scope) {
    $scope.hoten = "Nguyễn Hoàng Duy";
    $scope.ngaysinh = "22/08/1999";
    $scope.gender = "Nam";
    $scope.mark = 9.9;
}