var test = {
  templateUrl: './test.html',
  controller: 'TestController'
}

angular
  .module('components.test')
  .component('test', test)
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('test', {
        url:'/test',
        component:'test'
      })
    $urlRouterProvider.otherwise('/test');
  });
