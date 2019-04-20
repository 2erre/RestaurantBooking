angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('orgCompany', [function(){
    var company = [];

      var addCompany = function(newObj) {
          company.push(newObj);         // push() crea il file a fine array
      };

      var deleteCompany = function() {
        company.pop();                // pop() cancella il file a fine array
    };

      var getCompany = function(){
          return company;
      };

      return {
        addCompany: addCompany,
        getCompany: getCompany,
        deleteCompany: deleteCompany
      };


}]);
