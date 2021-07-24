app = angular.module("myapp", []);
app.controller("hienthi", function ($scope) {
    $scope.chucvu = [
        { cv: 'Giám đốc', tien: 20000000,},
        { cv: 'Trưởng phòng', tien: 15000000,},
        { cv: 'Nhân viên', tien: 10000000,}
    ];
});

function done() {
    alert("Form đã hoàn thành");
}

function naplai() {
    window.location.reload();
}