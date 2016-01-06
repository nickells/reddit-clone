app.factory('LinksFactory',function($http) {

  var linkFactory = {
    getLinks: function(){
      return $http.get('/api/links')
      .then(function(links){
        return links.data;
      })
    }
  }

  return linkFactory;
})