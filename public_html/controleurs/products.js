angular.module("myModule").directive('myProducts', function () {
    return {
        templateUrl: 'vues/products.html',
        controller: 'productsCtrl',
        replace: true
    };
});


