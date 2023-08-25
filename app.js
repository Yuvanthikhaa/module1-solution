(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', SepAndCount);

    SepAndCount.$inject = ['$scope'];
    function SepAndCount($scope) {
        $scope.checkLunch = function() {
        $scope.colorr="red";
        $scope.message="Please enter data first";
            const itemArray = $scope.name.split(',');
            const numberOfItems = itemArray.length;
          
            if (!$scope.name) {
                $scope.message = "Please enter data first";
                $scope.colorr = 'red';
            }
            else if (numberOfItems <= 3 ) {
                $scope.message = "Enjoy!";
                $scope.colorr='green';
            } 
            else {
                $scope.message = "Too much!";
                $scope.colorr="green";
            }
        };
    }

})();
