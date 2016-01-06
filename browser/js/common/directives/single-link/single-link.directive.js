app.directive('singleLink', function () {

    return {
      restrict: 'E',
      templateUrl: 'js/common/directives/single-link/single-link.html',
      link: function(scope, elem, attr){
        scope.increaseScore = function(){
          scope.link.calculatedScore++;
        };
        scope.decreaseScore = function(){
          scope.link.calculatedScore--;
        };
      }
    };

})

// console.log("link directive loaded")