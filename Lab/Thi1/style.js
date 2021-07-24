app = angular.module("myapp", []);
app.controller("hienthi", xuly);
function xuly($scope) {
    return true;
}
setTimeout(function() {
    this.edited = false;
    console.log(this.edited);
}.bind(this), 3000);