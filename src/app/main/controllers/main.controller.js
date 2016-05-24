(function() {
  'use strict';

  angular.module('angularApp')
    .controller('MainController', ['StringLimitService', function(StringLimitService){
      
      var self = this;

      self.diary = [
      ];
      
      self.toggleCustom = function(i) {
        self.diary[i].custom = self.diary[i].custom === false ? true: false;
      };

      self.newDiaryEntry = function() {
        self.messageLimit = 10;
        self.shortString  = StringLimitService.stringLimit(self.diaryEntry, 10);

        if(self.diaryEntry.length > self.messageLimit) {
          self.diaryEntryShort = self.shortString;
        }
        else {
          self.diaryEntryShort = '';
        }

        self.diary.push({'item':self.diaryEntryShort, 'fullItem':self.diaryEntry, 'date':new Date().toUTCString(), 'done':false, 'custom':true});
        self.diaryEntry = '';
      };

      self.removeDiaryEntry = function() {
        self.diary = self.diary.filter(function(foo) {
          return !foo.done;
       })
    };
  }])
})();
