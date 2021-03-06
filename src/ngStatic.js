
/**
 * @ngdoc module
 * @name ng.static
 *
 * @requires ng.static.filter
 * @requires ng.static.provider
 *
 * @description
 * ngStatic description
 */

angular.module('ng.static', [
    'ng.static.filter',
    'ng.static.provider'
  ])
  .run(['ngStatic', function(ngStatic) {
    ngStatic.init();
  }]);
