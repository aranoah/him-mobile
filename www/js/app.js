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
            .state('auth', {
                url: "/auth",
                views:{
                   'body': {
                   	       templateUrl: 'templates/auth.html',
                     
                           
                       }
                }     
            })

           .state('auth.storelanding', {
                url: '/storelanding',
                views: {
                    'storelanding': {
                        templateUrl: 'templates/storelanding.html',
                       
                    }
                }
            })

            .state('auth.signin', {
                url: '/signin',
                views: {
                    'signIn': {
                        templateUrl: 'templates/auth-signin.html',
                        
                    }
                }
            })


           .state('auth.storelanding.contactus', {
           	 views: {
             'contactus': { 
               url: '/contactus',
               templateUrl: 'templates/contactus.html'
                       }
                    }
                 })

            
                 

               .state('auth.productlisting', {
                url: '/productlisting',
                views: {
                    'productListing': {
                        templateUrl: 'templates/productlisting.html'
                        
                    }
                }
                  })

               .state('auth.offerslisting', {
                url: '/offerslisting',
                views: {
                    'offersListing': {
                        templateUrl: 'templates/offerslisting.html'
                        
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