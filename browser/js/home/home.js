app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        resolve: {
          Links: function(LinksFactory){
            return LinksFactory.getLinks()
          }
        },
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope, Links) {
  console.log("Homectrl loaded!")
  $scope.links = Links;
  console.log("links are",$scope.links)

})