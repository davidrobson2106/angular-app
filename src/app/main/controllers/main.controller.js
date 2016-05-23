(function() {
  'use strict';

  angular.module('angularApp')
    .controller('MainController', function($scope){
      $scope.message = 'this works';

      $scope.diary = [
      ];

      $scope.newDiaryEntry = function() {
        $scope.diary.push({'item':$scope.diaryEntry, 'done':false});
        $scope.diaryEntry = '';
      };

      $scope.removeToDo = function() {
       $scope.todos = $scope.todos.filter(function(item) {
          return !item.done;
       })
    };
  })
})();
