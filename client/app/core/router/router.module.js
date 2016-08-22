(function() {
    'use strict';

    angular
        .module('mqs.router', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl: 'app/home/home-header.html'
                        },
                        'features': {
                            templateUrl: 'app/home/home-features.html'
                        },
                        'footer': {
                            templateUrl: 'app/shared/footer/footer.html'
                        },
                        'navbar': {
                            templateUrl: 'app/shared/navbar/navbar.html'
                        },
                        'loginForm': {
                            templateUrl: 'app/login/login-form.html'
                        }
                    }
                })
        });
})();
