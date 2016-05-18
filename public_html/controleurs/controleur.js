var myModule = angular.module("myModule", []);
myModule.controller("productsCtrl", function ($scope) {
    $scope.products = [
        new product("Tee-shirt", "Vêtement", "6.99€"),
        new product("Baguette", "Alimentaire", "0.95€"),
        new product("Bracelet", "Bijou", "35.00€"),
        new product("Bermuda", "Vêtement", "14.75€"),
        new product("Citron", "Alimentaire", "0.45€")
    ];
});
myModule.controller("videogamesCtrl", ['$scope', '$http', '$templateCache', function ($scope, $http, $templateCache) {
        $scope.videogameslist = function () {
            //alert("passe ici");
            $scope.code = null;
            $scope.response = null;
            $http({method: 'GET', url: 'http://127.0.0.1/api.php'})
                    .then(function (response) {
                        //Fonction .then() pour le succès
                        //alert("passe là");
                        $scope.data = response.data;
                        $scope.status = response.status;
                        $scope.config = response.config;
                    }, function (response) {
                        //Une deuxième fonction pour attraper les erreurs
                        //alert("passe là aussi");
                        $scope.data = response.data || "Request failed";
                        $scope.status = response.status;
                        $scope.config = response.config;
                    });
        };
    }]);

