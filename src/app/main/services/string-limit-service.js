(function() {
  'use strict';

  angular.module('angularApp')
    .service('StringLimitService', function(){
      var self = this;

      self.stringLimit = function(string, limit) {
        var shortString = string.slice(0, limit);
        var spaceCount = shortString.lastIndexOf(' ');

        shortString = shortString.slice(0, spaceCount);

        return shortString + '...';
      };
    })
})();

