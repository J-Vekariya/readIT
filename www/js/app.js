
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl',
    resolve: {
        id: ['$stateParams', function ($stateParams) {
                return $stateParams.idForDetail; //By putting this here... (STEP 1)
            }]
    }
  })

  .state('app.buy', {
    url: '/buy',
    views: {
      'menuContent': {
        templateUrl: 'templates/buy.html',
        controller:'BuyController'
      }
    }
  })

  .state('app.bookDetail', {
    url: '/detail/:idForDetail',
    views: {
      'menuContent': {
        templateUrl: 'templates/bookDetail.html',
        controller:'BookDetailController'
      }
    }
  })

  .state('app.sell', {
      url: '/sell',
      views: {
        'menuContent': {
          templateUrl: 'templates/sell.html',
          controller:'SellController'
        }
      }
    })

    .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller:'ProfileController'
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html'
      }
    }
  })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/buy');
});
