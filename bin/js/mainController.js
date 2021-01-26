app.controller('pos', function($scope) {
  $scope.discount = 5;
  $scope.getDiscount = function(){
    return ($scope.discount * 0.01).toFixed(2);
  }
});
