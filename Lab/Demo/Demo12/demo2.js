app = angular.module("myapp", []);
app.controller("hienthi", xuly);
function xuly($scope) {
    $scope.tinh = function(){
        var a = parseInt($scope.cd);
        var b = parseInt($scope.cr)
        $scope.cv = (a+b)*2;
        $scope.dt = a*b;
    }
}