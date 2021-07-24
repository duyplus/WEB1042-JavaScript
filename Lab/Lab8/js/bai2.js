var app = angular.module('app', []);
app.controller('handleEventController', ['$scope', function ($scope) {
    var technologies = [
        {Name:"C#",Likes:0,Minus:0,Dislikes:0},
        {Name:"ASP.NET",Likes:0,Minus:0,Dislikes:0},
        {Name:"SQL Server",Likes:0,Minus:0,Dislikes:0},
        {Name:"AngularJS",Likes:0,Minus:0,Dislikes:0}
    ];
    $scope.technologies = technologies;
    $scope.increaseLike = function (tech) {
        tech.Likes++;
        tech.Minus = tech.Likes - tech.Dislikes;
    }
    $scope.increaseDislike = function (tech) {
        tech.Dislikes++;
        tech.Minus = tech.Likes - tech.Dislikes;
    }
}]);

function naplai(){
    window.location.reload();
}