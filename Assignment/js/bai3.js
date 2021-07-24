app = angular.module("myapp", []);
app.controller("hienthi", function ($scope) {
    $scope.sanpham = [
        { hanghoa: 'Iphone9', dongia: 800, soluong: 0 },
        { hanghoa: 'Samsung', dongia: 200, soluong: 0 },
        { hanghoa: 'Nokia', dongia: 400, soluong: 0 },
        { hanghoa: 'Sony Xperia', dongia: 100, soluong: 0 },
        { hanghoa: 'Motorola', dongia: 300, soluong: 0 },
        { hanghoa: 'Oppo', dongia: 700, soluong: 0 },
        { hanghoa: 'Bphone', dongia: 50, soluong: 0 },
        { hanghoa: 'Huawei', dongia: 500, soluong: 0 }
    ];
    $scope.getTT = function () {
        var tong = 0;
        for (var i = 0; i < $scope.sanpham.length; i++) {
            tong += ($scope.sanpham[i].dongia * $scope.sanpham[i].soluong);
        }
        return tong;
    }
});

// app.filter("Fdongia", function(){
//     return function(x){
//         for(var i=0;i<x.length;i++){

//         }
//     }
// });

app.filter("FilterDongia", function () {
    return function (products, value) {
        var FilterItem = [];
        if (value == "" || value == null) {
            return products;
        }
        else if(value <= 100) {
            angular.forEach(products, function (product) {
                if (product.dongia < value && value == 100) {
                    FilterItem.push(product);
                }
            });
            return FilterItem;
        }
        else if(value >= 100 && value <= 300) {
            angular.forEach(products, function (product) {
                if (product.dongia >= 100 && value == 300 && product.dongia <= 300) {
                    FilterItem.push(product);
                }
            });
            return FilterItem;
        }
        else if(value >= 100 && value <= 300) {
            angular.forEach(products, function (product) {
                if (product.dongia >= 100 && value == 300 && product.dongia <= 300) {
                    FilterItem.push(product);
                }
            });
            return FilterItem;
        }
        else if(value >= 300 && value <= 500) {
            angular.forEach(products, function (product) {
                if (product.dongia >= 300 && value == 500 && product.dongia <= 500) {
                    FilterItem.push(product);
                }
            });
            return FilterItem;
        }
        else{
            angular.forEach(products, function (product) {
                if (product.dongia >= value) {
                    FilterItem.push(product);
                }
            });
            return FilterItem;
        }
    }
});

function naplai() {
    window.location.reload();
}
