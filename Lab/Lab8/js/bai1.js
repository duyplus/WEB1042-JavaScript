var myApp = angular.module('myModule', []);
myApp.controller('myController', function ($scope) {
    var employee = {
        FirstName: "Duy",
        LastName: "Nguyễn Hoàng",
        Gender: "Nam"
    }
    $scope.employee = employee;
})

function naplai(){
    window.location.reload();
}