angular.module('app', ['ng.static'])
  .controller('MainController', function($scope) {
    $scope.foo = 'bar';
    $scope.role = 'manager';

    $scope.changeRole = function(role) {
      return (role === 'manager') ?
        $scope.role = 'employee' :
        $scope.role = 'manager';
    };

  })
  .value({
    value1: { foo: 'bar' },
    value2: { foo: 'baz' }
  })
  .config(['ngStaticProvider', function(ngStaticProvider) {
    ngStaticProvider
      .setDirectory('/ng-static/demo/static')
      .staticFiles({
        demo:  'demo.json',
        demo1: 'demo.json',
        demo2: 'demo.json'
      })
      .staticValues([
        'value1',
        'value2'
      ])
  }]);
