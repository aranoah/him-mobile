angular.module('hereiam', ['ionic', 'ui.router','hereiam.controllers', 'hereiam.services'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            /*** 
            Routing for user module
            ***/

            .state('auth', {
                url: "/auth",
                views:{
                   'body':{templateUrl: "templates/auth.html"}
                }     
            })
            .state('auth.signin', {
                url: '/signin',
                views: {
                    'signIn': {
                        templateUrl: 'templates/auth-signin.html',
                        controller: 'SignInCtrl'
                    }
                }
            })
            .state('auth.signup', {
                url: '/signup',
                views: {
                    'signUp': {
                        templateUrl: 'templates/auth-signup.html',
                        controller: 'SignUpCtrl'
                    }
                }
            })

                                    /*** 
            Routing for business module
            ***/

            .state('dashboard', {
                url: "/dashboard",
                abstract: true,
                templateUrl: "templates/dashboard.html"
            })
            .state('dashboard.view', {
                url: '/view',
                views: {
                    'dashboard-view': {
                        templateUrl: 'templates/dashboard-view.html',
                        controller: 'DashBoardCtrl'
                    }
                }
            })
                        /*** 
            Routing for bucket module
            ***/

            .state('bucket', {
                url: "/bucket",
                abstract: true,
                templateUrl: "templates/bucket.html"
            })
            .state('bucket.list', {
                url: '/list',
                views: {
                    'bucket-list': {
                        templateUrl: 'templates/bucket-list.html',
                        controller: 'myListCtrl'
                    }
                }
            })
            .state('bucket.completed', {
                url: '/completed',
                views: {
                    'bucket-completed': {
                        templateUrl: 'templates/bucket-completed.html',
                        controller: 'completedCtrl'
                    }
                }
            })
        $urlRouterProvider.otherwise('/auth');
    });