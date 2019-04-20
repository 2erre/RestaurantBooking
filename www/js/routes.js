angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('home', {                           //home
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

    .state('login', {                         //login cliente
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {                          //signup cliente
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('rests', {                             //lista ristoranti
    url: '/page4',
    templateUrl: 'templates/rests.html',
    controller: 'restsCtrl'
  })

  .state('loginris', {                          //login ristoratore
    url: '/page5',
    templateUrl: 'templates/loginris.html',
    controller: 'loginRisCtrl'
  })

  .state('signupris', {                          //signup ristoratore
    url: '/page6',
    templateUrl: 'templates/signupris.html',
    controller: 'signupRisCtrl'
  })

  .state('rischoice', {                   // area Ristoratori
    url: '/page7',
    templateUrl: 'templates/rischoice.html',
    controller: 'risChoiceCtrl'
  })

  .state('restris', {                   // lista ristoranti (Ristoratori)
    url: '/page8',
    templateUrl: 'templates/restris.html',
    controller: 'restRisCtrl'
  })

  .state('addrest', {                   //Aggiungi ristoranti
    url: '/page9',
    templateUrl: 'templates/addrest.html',
    controller: 'addRestCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});
