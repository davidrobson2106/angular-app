(function() {
  'use strict';

  angular.module('angularApp')
    .controller('MainController', function($scope){
      $scope.message = 'this works';
      
      $scope.diary = [
      ];

      $scope.newDiaryEntry = function() {
        $scope.diary.push({'item':$scope.diaryEntry, 'date':new Date().toUTCString(), 'done':false});
        $scope.diaryEntry = '';
      };

      console.log($scope.diary);

      $scope.removeDiaryEntry = function() {
       $scope.diary = $scope.diary.filter(function(foo) {
          return !foo.done;
       })
    };
  })
})();
