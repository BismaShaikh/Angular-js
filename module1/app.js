(function () {
'use strict';

angular.module('LunchChkApp', [])
.controller('LunchChkController', LunchChkController);

LunchChkController.$inject = ['$scope'];

function LunchChkController($scope) {
  $scope.dishesName = "";
  $scope.stateOfLunchCheker = "";
  $scope.colorLine = "";
  $scope.colorborder = "";
  $scope.checkIfItTooMuch = function () {
    var dishNameVal=$scope.dishesName;
    var array = dishNameVal.split(',');
    array=clean(array);
     if(array.length==0){
      $scope.stateOfLunchCheker="Please enter data first";
       $scope.colorLine='color-line1';
       $scope.colorborder='color-border1';
    }else if(array.length<=3){
        $scope.stateOfLunchCheker="Enjoy!";
        $scope.colorLine='color-line2';
        $scope.colorborder='color-border2';
    }else{
        $scope.stateOfLunchCheker="Too much!";
        $scope.colorLine='color-line2';
        $scope.colorborder='color-border2';
      }
  };
}
function clean(item) {
  var tempArr = [];
  for (var i = 0; i < item.length; i++) {
      if (item[i] !== undefined && item[i] != "") {
          tempArr.push(item[i]);
      }
  }
  return tempArr;
}
})();
