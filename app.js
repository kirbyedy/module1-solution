(function (){
  'use strict';

  angular.module('LunchCheck',[])

  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
      $scope.food = "";
      $scope.message = "";
      $scope.checkFood = function() {
        var foodArray = $scope.food.split(",");
        if (foodArray == "") {
          $scope.message = "Please enter data first!";
        }
        else if (foodArray.length <= 3) {
          $scope.message = "Enjoy!";
        }
        else {
          $scope.message = "Too much!";
        }
      };
  };
})();
